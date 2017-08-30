import { Action } from 'redux-actions';
import { IAppState } from '../states';
import firebase from '../common/firebase'

import {
  IItemCreateState,
  ITEM_SAVE_DEFAULT_STATE,
  ITEM_SAVE,
  ITEM_SAVE_FAILED,
  ITEM_SAVE_SUCCESS,
  ITEM_CREATE,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_FAILED,

  ICItemState,
  CITEM_CREATE,
  CITEM_CREATE_SUCCESS,
  CITEM_CREATE_FAILED,
  CITEM_SAVE,
  CITEM_SAVE_FAILED,
  CITEM_SAVE_SUCCESS,
  CITEM_REMOVE,
  CITEM_REMOVE_SUCCESS,
  CITEM_REMOVE_FAILED,
  CITEM_DEFAULT,

  CITEM_UPLOAD,
  CITEM_UPLOAD_SUCCESS,
  CITEM_UPLOAD_FAILED,
  IUploadState
} from '../states'

export function citemCreate() {
  return (dispatch, getState: () => ICItemState) => {
    const state: any = getState();
    if (state.user != null) {
      dispatch( {
        type: CITEM_CREATE,
        payload: {
          id: null
        }
      }as Action<CITEM_CREATE>)


      var itemsRef = firebase.database().ref('items');

      var theRet = itemsRef.push({userId: state.user.id})
      .then(el => {
        console.log(el);
        dispatch({
          type: CITEM_CREATE_SUCCESS,
          payload: {
            id: el.key
          }
        } as Action<CITEM_CREATE>)
      })
      .catch(error => {
        console.log('Puto error');
        dispatch({
          type: CITEM_CREATE_FAILED,
          payload: {
            cole: 0,
            message: 'something went wrong'
          }
        } as Action<CITEM_CREATE_FAILED>)
      });
    } else {
      dispatch({
        type: CITEM_CREATE_FAILED,
        payload: {
          code: -1,
          message: 'User not logged'
        }
      } as Action<CITEM_CREATE_FAILED>);
    }
  }
}

export function citemSave(data) {
  return (dispatch, getState: ()=>any) => {
    var state = getState();

    dispatch( {
      type: CITEM_SAVE,
      payload: {
      }
    } as Action<CITEM_SAVE>);

    if (state.user != null) {
      var itemsRef = firebase.database().ref('items');
      let theref= itemsRef.child(state.currentItem.id)
      console.log(theref);
      theref.update({
        name: data.name,
        timeToWait: data.timeToWait,
        quantity: data.quantity,
        autoservice: data.autoservice, 
        description: data.description,
        images: ((data.images != null) ? data.images : [])
      })
      .then(() => {
        dispatch({type: CITEM_SAVE_SUCCESS, 
          payload: {
            name: data.name,
            description: data.description,
            timeToWait: data.timeToWait,
            quantity: data.quantity,
            autoservice: data.autoservice, 
            images: data.images
        }} as Action<CITEM_SAVE>)
      }).catch(error => {
        dispatch({type: CITEM_SAVE_FAILED,
          payload: {
            code: -1,
            message: error.message
          }
        } as Action<CITEM_SAVE_FAILED>)
      });
    } else {
      dispatch({type: CITEM_SAVE_FAILED,
        payload: {
          code: -1,
          message: 'You need to get logged'
       }} as Action<CITEM_SAVE_FAILED>)
    }
  }
}

export function citemRemove() {
  return (dispatch, getState: () => any) => {
    var state = getState();
    dispatch({type: CITEM_REMOVE, payload: {
      id: state.currentItem.id
    }}as Action<CITEM_REMOVE>)

    if (state.currentItem != null && state.user != null) {
      var itemsRef = firebase.database().ref('items')

      let theref = itemsRef.child(state.currentItem.id)
      theref.remove().then( () =>{
        dispatch( { type: CITEM_REMOVE_SUCCESS, payload: {
          id: state.currentItem.id
        }} as Action<CITEM_REMOVE>)
      }).catch(error =>{
        dispatch({type: CITEM_REMOVE_FAILED, payload: {
          error: {
            code: -1,
            message: error.message
          }
        }} as Action<CITEM_REMOVE_FAILED> )
      });

    } else {
      dispatch({type: CITEM_REMOVE_FAILED, payload: {
        error: {
          code: -1,
          message: 'Item not exists or user not logged'
        }
      }} as Action<CITEM_REMOVE_FAILED> )
    }
  }
}


export function citemUpload(files ) {
  return (dispatch, getState: () => any) => {
    var state = getState();
    if (state.currentItem != null && state.user != null && state.uploading == null) {
      var _currentItem = state.currentItem;
      var storageRef = firebase.storage().ref();
      var images = storageRef.child('images/'+_currentItem.id);

      var upRefs = [];

      for(let i=0; i< files.length; i++) {

        let imgRef = images.child(Date.now()+ files[i].name);
        var upload: IUploadState  = {
          file: files[i],
          name: files[i].name,
          status: 'started',
          progress: 0,
          path: 'images/'+_currentItem.id,
          url: null,
        };
        var upSelf = imgRef.put(files[i]);

        upSelf.on('state_changed', (snap: any)=> {
          upload.progress = (snap.bytesTransferred / snap.totalBytes) * 100;

          switch(snap.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              upload.status = 'pause';
              console.log('Upload ' +upload.path+'is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              upload.status = 'running'
              console.log('Upload ' +upload.path+'is running');
              break;
          }
          
        });
        upRefs.push(upload);

        upSelf.then(snap => {
          upload.url = snap.metadata.downloadURLs[0],
          dispatch({
            type: CITEM_UPLOAD_SUCCESS,
            payload: {
              singleUpload: upload
            } as Action<CITEM_UPLOAD_SUCCESS>
          })
        }).catch(error => {
          dispatch({
            type: CITEM_UPLOAD_FAILED,
            payload: {
              code: 2,
              message: error.message
            } as Action<CITEM_UPLOAD_FAILED>
          })
        });
      }
      dispatch( {
        type: CITEM_UPLOAD,
        payload: {
          data: upRefs,
          current: upRefs[0]
        }
      })
    } else {
      dispatch({
        type: CITEM_UPLOAD_FAILED,
        payload: {
          code: -1,
          message: 'Somethig went wron: login, item'
        } as Action<CITEM_UPLOAD_FAILED>
      })
    }
  }
}

        //.then (snap => {
          //console.log(snap);
          //dispatch({
            //type: FILE_UPLOAD_SUCCESS,
            //payload: {
              //name: snap.metadata.name,
              //path: snap.metadata.fullPath,
              //url: snap.metadata.downloadURLs[0],
              //target:  targetId
            //} as Action<FILE_UPLOAD_SUCCESS>
          //})
        //}).catch((error:any) => {
          //dispatch({
            //type: FILE_UPLOAD_FAILED,
            //payload: {
              //code: error.code,
              //message: error.message,
            //}
          //} as Action<FILE_UPLOAD_FAILED>);
        //});
        //};

export function itemSave(data){ 
  return (dispatch, getState: ()=>any) => {
    var state = getState();
      var itemsRef = firebase.database().ref('items');
      let theref= itemsRef.child(state.itemCreate.id)
      theref.update({
        name: data.name,
        timeToWait: data.timeToWait,
        quantity: data.quantity,
        autoservice: data.autoservice, 
        images: data.images
      }).then(aux => {
        dispatch( {type: "ITEM_SAVE_SUCCESS", payload: {
          name: aux.name,
          timeToWait: aux.timeToWait,
          quantity: aux.quantity,
          autoservice: aux.autoservice, 
          images: aux.images
        }} )
      })
      //itemsRef.push({
        
        //name: data.name,
        //quantity: data.quantity,
        //timeToWait: data.timeToWait,
        //description: data.description,
        //images: data.images
      //});
      //itemsRef.on('value', (snap) =>{
        //dispatch({
          //type: ITEM_CREATE_SUCCESS,
          //payload: {
            //name: data.name,
            //quantity: data.quantity,
            //timeToWait: data.timeToWait,
            //description: data.description,
          //}

        //})
      //});

    dispatch({
      type: ITEM_SAVE,
      payload: {
        id: state.itemCreate.id
      }
    } as Action<ITEM_SAVE>);
  } 
}


export function itemRemove(data) {
  return (dispatch, getState: () => any) => {
    var state = getState();
    var itemsRef = firebase.database().ref('items')
    let theref = itemsRef.child(state.itemCreate.id)
    theref.remove().then(a=>{
      dispatch( { type: 'ITEM_REMOVE_SUCCESS', payload: {
        id: data.id
      }} as Action<CITEM_REMOVE>)
    }).catch(e=>{
      dispatch({type: 'ITEM_REMOVE_FAILED', payload: {
        error: {
          code: -1,
          message: e.message
        }
      }} as Action<CITEM_REMOVE_FAILED> )
    });

    dispatch({type: 'ITEM_REMOVE', payload: {
      id: data.id
    }}as Action<CITEM_REMOVE>)
  }
}

export function itemCreate() {
  return (dispatch, getState: () => IItemCreateState) => {
    const state:any = getState();
    if (state.user.id != null) {
      dispatch({
        type: ITEM_CREATE,
        payload: {}
      });

      var itemsRef = firebase.database().ref('items');
      try{
        let nid = itemsRef.push({

        }).key;
          dispatch({
            type: ITEM_CREATE_SUCCESS,
            payload: {
              id: nid
            }
          })
      } catch(err) {
        dispatch({
          type: ITEM_CREATE_FAILED,
          payload: {
            code: 0,
            message: 'Something went wrong'
          }
        })
      }
    } else {
      dispatch({
        type: ITEM_CREATE_FAILED,
        payload: {
          code: -1,
          message: 'User not logged'
        }
      });
    }
  }
}
