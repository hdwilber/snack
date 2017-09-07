import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';

import { 

  SESSION_START,
  SESSION_START_FAILED,
  SESSION_END,
  SESSION_END_FAILED,
  SESSION_RESTORE,
  SESSION_RESTORE_FAILED,
  SESSION_CHANGE,

  SESSION_ERROR,
  SESSION_DEFAULT_STATE.
  ISession,

} from '../states';



export const sessionReducer = handleActions<ISession, any>({
  [SESSION_START]: (state: ISession, action: Action<SESION_START>): ISession => {
    const { payload } = action;
    return {
      ...state,
      provider: payload.provider,
    }
  },
  [SESSION_CHANGE]: (state: IUserState, action: Action<USER_LOGIN_SUCCESS>): IUserState => {
    return {
      ...state,
      id: action.payload.uid,
      email: action.payload.email,
      displayName: action.payload.displayName,
      photoUrl: action.payload.photoUrl,
      provider: action.payload.provider
    }
  },
  [USER_LOGIN_FAILED]: (state: IUserState, action: Action<USER_LOGIN_FAILED>): IUserState => {
    return {
      ...state,
      error: {
        code: action.payload.code,
        message: action.payload.message
      }
    }
  },

  [USER_LOGOUT]: (state:IUserState, action: Action<USER_LOGOUT>): IUserState=> {
    return  {
      ...state,
    };
  },
  [USER_LOGOUT_SUCCESS]: (state: IUserState, action: Action<USER_LOGOUT>): IUserState => {
    return null;
  },
  [USER_LOGOUT_FAILED]: (state: IUserState, action: Action<USER_LOGOUT_FAILED>): IUserState => {
    return {
      ...state,
      logout: false,
      error: {
        code: action.payload.code,
        message: action.payload.message
      }
    }
  },
  [USER_CHANGED] : (state: IUserState, action: Action<USER_CHANGED> ) : IUserState=> {
    console.log('Entering user changed')
    console.log(action.payload.user)
    const session = action.payload.response;
    return {
      ...state,
      id: session.id,
      email: session.profile.emails[0].value,
      displayName: session.profile.displayName,
      photoUrl: session.profile.photos[0].value,
      provider: session.profile.provider,
      session: {
        id: session.id,
        userId: session.userId,
        ttl: session.ttl,
        profile: {
          id: session.profile.id,
          email: session.profile.emails[0].value,
          displayName: session.profile.displayName,
          photoUrl: session.profile.photos[0].value,
          provider: session.profile.provider
        },
        error: null,
      },
      error: null
    }
  }
}, null);

