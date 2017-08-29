import { combineReducers } from 'redux';

import {appReducer} from './app';
import {userReducer} from './user';
import {fileUploadReducer} from './file';
import {itemCreateReducer, itemSaveReducer} from './item'

export default combineReducers<any>({
  app: appReducer,
  user: userReducer,
  fileUpload: fileUploadReducer,
  itemCreate: itemCreateReducer,
  itemSave: itemSaveReducer
});

