import { Action } from 'redux-actions';
import { IAppState} from '../states';
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
  CITEM_DEFAULT
} from '../state'

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
      try {
        let nid = itemsRef.push({
          
        }).key;
        dispatch( {
          type: CITEM_CREATE_SUCCESS,
          payload: {
            id: nid
          }
        } as Action<CITEM_CREATE_SUCCESS>)
      } catch (error) {
        dispatch({
          type: CITEM_CREATE_FAILED,
          payload: {
            cole: 0,
            message: 'something went wrong';
          }
        } as Action<CITEM_CREATE_FAILED>)
      }
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

export function citemSave() {
  return (dispatch, getState: ()=>any) => {
    var state = getState();

    dispatch( {
      type: CITEM_CREATE,
      payload: {
        id: null
      }
    }as Action<CITEM_SAVE>);


    if (state.user != null) {

      var itemsRef = firebase.database().ref('items');
      let theref= itemsRef.child(state.currentItem.id)
      theref.update({
        name: data.name,
        timeToWait: data.timeToWait,
        quantity: data.quantity,
        autoservice: data.autoservice, 
        images: data.images
      }).then(aux => {
        dispatch( {type: CITEM_SAVE_SUCCESS}, 
        payload: {
          name: aux.name,
          timeToWait: aux.timeToWait,
          quantity: aux.quantity,
          autoservice: aux.autoservice, 
          images: aux.images
        } as Action<CITEM_SAVE_SUCCESS>)
      }).catch(err => {
        dispatch({type: CITEM_SAVE_FAIELD},
          payload: {
            code: -1,
            message: 'Something webt wrong'
         } as Action<CITEM_SAVE_FAILED>)
      });
    } else {
      dispatch({type: CITEM_SAVE_FAIELD},
        payload: {
          code: -1,
          message: 'You need to get logged'
       } as Action<CITEM_SAVE_FAILED>)
    }
}

export function citemRemove() {

}

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
        dispatch( {type: "ITEM_SAVE_SUCCESS"}, payload: {
          name: aux.name,
          timeToWait: aux.timeToWait,
          quantity: aux.quantity,
          autoservice: aux.autoservice, 
          images: aux.images
        } )
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
    var itemsRef = firebase.database().ref('items')
    let theref = itemsRef.child(state.itemCreate.id)
    theref.remove().then(a=>{
      dispatch( { type: 'ITEM_REMOVE_SUCCESS', payload: {
        id: data.id
      }} as Action<ITEM_REMOVE_SUCCESS>)
    }).catch(e=>{
      dispatch({type: 'ITEM_REMOVE_FAILED', payload: {
        error: {
          code: e.code,
          message: e.code;
        }
      }} as Action<ITEM_REMOVE_FAILED> )
    });

    dispatch({type: 'ITEM_REMOVE', payload: {
      id: data.id
    }}as Action<ITEM_REMOVE>)
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
