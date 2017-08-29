import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';

import { IFileUploadState, FILE_UPLOAD_DEFAULT_STATE, FILE_UPLOAD_SUCCESS, FILE_UPLOAD_FAILED, FILE_UPLOAD} from '../states';

export const fileUploadReducer = handleActions<IFileUploadState, any>({
  [FILE_UPLOAD]: (state: IFileUploadState, action: Action<FILE_UPLOAD>): IFileUploadState=> {
    return {
      ...state,
      name: action.payload.name
    }
  },
  [FILE_UPLOAD_SUCCESS]: (state: IFileUploadState, action: Action<FILE_UPLOAD_SUCCESS>): IFileUploadState => {
    return {
      ...state,
      name: action.payload.name,
      uid: action.payload.uid,
      path: action.payload.path,
      url: action.payload.url,
      target: action.payload.target
    }
  },
  [FILE_UPLOAD_FAILED]: (state: IFileUploadState, action: Action<FILE_UPLOAD_FAILED>): IFileUploadState => {
    return {
      ...state,
      error: {
        code: action.payload.code,
        message: action.payload.message
      }
    }
  },
}, FILE_UPLOAD_DEFAULT_STATE);

