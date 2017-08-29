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
} from '../state'


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

