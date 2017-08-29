import { combineReducers } from 'redux';

import {appReducer} from './app';
import {userReducer} from './user';
import {fileUploadReducer} from './file-upload';

export default combineReducers<any>({
  app: appReducer,
  user: userReducer,
  fileUpload: fileUploadReducer
});

