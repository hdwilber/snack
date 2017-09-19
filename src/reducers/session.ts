import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';

import { 

  SESSION_START,
  SESSION_END,
  SESSION_RESTORE,
  SESSION_CHANGED,
  SESSION_REMOVED,
  SESSION_ERROR,
  SESSION_DEFAULT,
  ISession,

} from '../states';



export const sessionReducer = handleActions<ISession, any>({
  [SESSION_START]: (state: ISession, action: Action<SESSION_START>): ISession => {
    return {
      ...state,
      provider: action.provider,
    }
  },
  [SESSION_CHANGED]: (state: ISession, action: Action<SESSION_CHANGED>): ISession => {
    return {
      ...state,
      profile: {
        id: action.uid,
        email: action.email,
        displayName: action.displayName,
        photoUrl: action.photoUrl,
        provider: action.provider,
        error: null
      }
    }
  },
  [SESSION_ERROR]: (state: ISession, action: Action<SESSION_ERROR>): ISession => {
    return {
      ...state,
      error: {
        code: action.code,
        message: action.message
      }
    }
  },

  [SESSION_REMOVED]: (state: ISession, action: Action<SESSION_REMOVED>): ISession => {
    return  null;
  },

  [SESSION_CHANGED] : (state: ISession, action: Action<SESSION_CHANGED> ) : ISession => {
    const { session } = action;
    return {
      ...state,
      id: session.id,
      userId: session.userId,
      ttl: session.ttl,
      profile: {
        id: session.profile.id,
        email: session.profile.emails[0].value,
        displayName: session.profile.displayName,
        photoUrl: session.profile.photos[0].value,
        provider: session.profile.provider,
        error: null,
      },
      error: null
    }
  }
}, SESSION_DEFAULT);

