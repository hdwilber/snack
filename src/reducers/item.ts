import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';

import {
  IItemSaveState,
  IItemCreateState,
  ITEM_SAVE_DEFAULT_STATE,
  ITEM_CREATE_DEFAULT_STATE,
  ITEM_SAVE_FAILED,
  ITEM_SAVE_SUCCESS,
  ITEM_CREATE,
  ITEM_CREATE_SUCCESS,
  ITEM_CREATE_FAILED,
  ITEM_SAVE,

  ITEM_REMOVE,
  ITEM_REMOVE_SUCCESS,
  ITEM_REMOVE_FAILED,

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


} from '../states'

export const currentItemReducer = handleActions<ICItemState, any>({
  [CITEM_CREATE]: (state: ICItemState, action: Action<CITEM_CREATE>) : ICItemState => {
    return null;
  },
  [CITEM_CREATE_SUCCESS]: (state: ICItemState, action: Action<CITEM_CREATE>): ICItemState => {
    return {
      ...state,
      id: action.payload.id
    }
  },
  [CITEM_CREATE_FAILED]: (state: ICItemState, action: Action<CITEM_CREATE>): ICItemState => {
    return {
      ...state,
      error: {
        code: action.payload.code,
        message: action.payload.message
      }
    }
  },
}, null)

export const itemSaveReducer = handleActions<IItemSaveState, any>( {
  [ITEM_SAVE]: (state: IItemSaveState, action: Action<ITEM_SAVE>): IItemSaveState => {
    return {
      ...state,
    }
  },
  [ITEM_SAVE_SUCCESS]: (state: IItemSaveState, action: Action<ITEM_SAVE_SUCCESS>): IItemSaveState=> {
    return {
      ...state,
      name: action.payload.name,
      quantity: action.payload.quantity,
      timeToWait: action.payload.timeToWait,
      description: action.payload.description,
      error: null
    }
  },
  [ITEM_SAVE_FAILED]: (state: IItemSaveState, action: Action<ITEM_SAVE_FAILED>): IItemSaveState=> {
    return {
      ...state,
      error: {
        code: action.payload.code,
        message: action.payload.message
      }
    }
  },
  [ITEM_REMOVE]: (state: IItemSaveState, action: Action<ITEM_REMOVE>): IItemSaveState => {
    return {
      ...state,
    }
  }
}, ITEM_SAVE_DEFAULT_STATE);

export const itemCreateReducer = handleActions<IItemCreateState, any>({
  [ITEM_CREATE]: (state: IItemCreateState, action: Action<ITEM_CREATE>): IItemCreateState => {
    return {
      ...state,
    }
  },
  [ITEM_CREATE_SUCCESS]: (state: IItemCreateState, action: Action<ITEM_CREATE_SUCCESS>): IItemCreateState => {
    return {
      ...state,
      id: action.payload.id
    }
  },
  [ITEM_CREATE_FAILED]: (state: IItemCreateState, action: Action<ITEM_CREATE_FAILED>): IItemCreateState=> {
    return {
      ...state,
      error: {
        code: action.payload.code,
        message: action.payload.message
      }
    }
  },
}, ITEM_CREATE_DEFAULT_STATE);

