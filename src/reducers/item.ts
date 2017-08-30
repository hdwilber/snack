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
  CITEM_DEFAULT,
  CITEM_UPLOAD,
  CITEM_UPLOAD_SUCCESS,
  CITEM_UPLOAD_FAILED
} from '../states'

export const currentItemReducer = handleActions<ICItemState, any>({
  [CITEM_CREATE]: (state: ICItemState, action: Action<CITEM_CREATE>) : ICItemState => {
    return {
      ...CITEM_DEFAULT,
      inProcess: true,
      status: 'create'
    }
  },
  [CITEM_CREATE_SUCCESS]: (state: ICItemState, action: Action<CITEM_CREATE>): ICItemState => {
    return {
      ...state,
      id: action.payload.id,
      inProcess: false,
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
  [CITEM_SAVE]: (state: ICItemState, action: Action<CITEM_SAVE>): ICItemState => {
    return {
      ...state,
      inProcess: true,
      status: 'save'
    }
  },
  [CITEM_SAVE_SUCCESS]: (state: ICItemState, action: Action<CITEM_SAVE>): ICItemState => {
    return {
      ...state, 
      name: action.payload.name,
      quantity: action.payload.quantity,
      description: action.payload.description,
      autoservice: action.payload.autoservice,
      timeToWait: action.payload.timeToWait,
      images: action.payload.images,
      inProcess: false,
    }
  },
  [CITEM_SAVE_FAILED]: (state: ICItemState, action: Action<CITEM_SAVE_FAILED>): ICItemState=> {
    return {
      ...state,
      inProcess: false, 
      error: {
        code: action.payload.code,
        message: action.payload.message
      }
    }
  },
  [CITEM_REMOVE]: (state: ICItemState, action: Action<CITEM_REMOVE>): ICItemState=> {
    return {
      ...state,
      inProcess: true, 
      status: 'remove',
    }
  },
  [CITEM_REMOVE_SUCCESS]: (state: ICItemState, action: Action<CITEM_REMOVE>): ICItemState=> {
    return {
      ...CITEM_DEFAULT,
      inProcess: false, 
      status: 'remove',
    }
  },
  [CITEM_REMOVE_FAILED]: (state: ICItemState, action: Action<CITEM_REMOVE_FAILED>): ICItemState=> {
    return {
      ...state,
      error: {
        code: action.payload.code,
        message: action.payload.message
      }
    }
  },
  [CITEM_UPLOAD]: (state: ICItemState, action: Action<CITEM_UPLOAD>): ICItemState => {
    var newdata =null;
    if (state.uploading != null) {
      //newdata = state.uploading.data.slice(0);
      newdata = state.uploading.data.concat(action.payload.data)
    } else {
      newdata = action.payload.data
    }
    return {
      ...state,
      uploading: {
        data: newdata,
        current: action.payload.current,
        status: 'init'
      }
    }
  },
  [CITEM_UPLOAD_SUCCESS]: (state: ICItemState, action: Action<CITEM_UPLOAD_SUCCESS>): ICItemState => {
    return {
      ...state,
      uploading: {
        ...state.uploading,
        current: action.payload.singleUpload,
        status: 'finished'
      }
    }
  },
  [CITEM_UPLOAD_FAILED]: (state: ICItemState, action: Action<CITEM_UPLOAD_FAILED>): ICItemState => {
    return {
      ...state,
      uploading: {
        status: 'failed'
      },
      error: {
        code: action.payload.code, 
        message: action.payload.message
      }
    }
  },

}, null);

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

