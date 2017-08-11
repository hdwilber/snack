import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';
import { IAppState } from '../state';

import { PAGE_LOAD } from '../actions/app';

const DEFAULT_STATE: IAppState = {
};

const app = handleActions<IAppState, any>({
  [PAGE_LOAD]: (state: IAppState, action: Action<PAGE_LOAD>): IAppState => state
}, DEFAULT_STATE);

export default combineReducers<IAppState>({
  app,
});