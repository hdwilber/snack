import { handleActions, Action } from 'redux-actions';
import { 
  IItem,
  ITEM_CREATE,
  ITEM_UPDATE,
  ITEM_RETRIEVE,
  ITEM_CHANGED,
  ITEM_ERROR, 
  ITEM_DEFAULT,
  ITEM_RETRIEVE_ALL

} from './../states'

export const itemReducer = handleActions<IItem, any>({
  [ITEM_CREATE]: (state: IItem, action: Action<ITEM_CREATE>) : IItem => {
    return {
      ...state, 
      userId: action.userId
    }
  },
  [ITEM_UPDATE]: (state: IItem, action: Action<ITEM_UPDATE>): IItem => {
    return {
      ...state
    }
  },
  [ITEM_ERROR]: (state: IItem, action: Action<ITEM_ERROR>): IItem => {
    return {
      ...state,
      error: {
        code: action.code,
        message: action.message
      }
    }
  },
  [ITEM_CHANGED]: (state: IItem, action: Action<ITEM_CHANGED>): IItem => {
    const { item } = action;
    if (action.list) {
      return {
        ...state,
        list: action.list
      }
    }
    return {
      ...state,
      id: item.id,
      name: item.name,
      description: item.description,
      userId: item.userId,
      images: item.images,
    }
  },
  [ITEM_RETRIEVE_ALL]: (state: IItem, action: Action<ITEM_RETRIEVE>): IItem => {
    return {
      ...state, 
    }
  },
  [ITEM_RETRIEVE]: (state: IItem, action: Action<ITEM_RETRIEVE>): IItem => {
    return {
      ...state, 
      id: action.id
    }
  }
}, ITEM_DEFAULT);


