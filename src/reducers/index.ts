import { combineReducers } from 'redux';

import {appReducer} from './app';
import {sessionReducer} from './session';
import {itemReducer} from './item';
//import {currentItemReducer, itemCreateReducer, itemSaveReducer} from './item'
//import {fileUploadReducer} from './file';

export default combineReducers<any>({
  app: appReducer,
  session: sessionReducer,
  item: itemReducer, 

  //fileUpload: fileUploadReducer,
  //itemCreate: itemCreateReducer,
  //itemSave: itemSaveReducer,
  //currentItem: currentItemReducer
});

