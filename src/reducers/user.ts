import { combineReducers } from 'redux';
import { handleActions, Action } from 'redux-actions';

import { 
  USER_DEFAULT_STATE, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAILED, 
  USER_LOGIN, 
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED,

  USER_CHANGED,
  IUserState
} from '../states';



/*
 *export const userReducer = handleActions<IUserState, any>({
 *  [USER_LOGIN]: (state: IUserState, action: Action<USER_LOGIN>): IUserState => {
 *    return {
 *      ...state,
 *      provider: action.payload.provider,
 *      id:null,
 *      email: null,
 *      displayName: null,
 *      photoUrl: null,
 *    }
 *  },
 *  [USER_LOGIN_SUCCESS]: (state: IUserState, action: Action<USER_LOGIN_SUCCESS>): IUserState => {
 *    return {
 *      ...state,
 *      id: action.payload.uid,
 *      email: action.payload.email,
 *      displayName: action.payload.displayName,
 *      photoUrl: action.payload.photoUrl,
 *      provider: action.payload.provider
 *    }
 *  },
 *  [USER_LOGIN_FAILED]: (state: IUserState, action: Action<USER_LOGIN_FAILED>): IUserState => {
 *    return {
 *      ...state,
 *      error: {
 *        code: action.payload.code,
 *        message: action.payload.message
 *      }
 *    }
 *  },
 *
 *  [USER_LOGOUT]: (state:IUserState, action: Action<USER_LOGOUT>): IUserState=> {
 *    return  {
 *      ...state,
 *    };
 *  },
 *  [USER_LOGOUT_SUCCESS]: (state: IUserState, action: Action<USER_LOGOUT>): IUserState => {
 *    return null;
 *  },
 *  [USER_LOGOUT_FAILED]: (state: IUserState, action: Action<USER_LOGOUT_FAILED>): IUserState => {
 *    return {
 *      ...state,
 *      logout: false,
 *      error: {
 *        code: action.payload.code,
 *        message: action.payload.message
 *      }
 *    }
 *  },
 *  [USER_CHANGED] : (state: IUserState, action: Action<USER_CHANGED> ) : IUserState=> {
 *    console.log('Entering user changed')
 *    console.log(action.payload.user)
 *    const session = action.payload.response;
 *    return {
 *      ...state,
 *      id: session.id,
 *      email: session.profile.emails[0].value,
 *      displayName: session.profile.displayName,
 *      photoUrl: session.profile.photos[0].value,
 *      provider: session.profile.provider,
 *      session: {
 *        id: session.id,
 *        userId: session.userId,
 *        ttl: session.ttl,
 *        profile: {
 *          id: session.profile.id,
 *          email: session.profile.emails[0].value,
 *          displayName: session.profile.displayName,
 *          photoUrl: session.profile.photos[0].value,
 *          provider: session.profile.provider
 *        },
 *        error: null,
 *      },
 *      error: null
 *    }
 *  }
 *}, null);
 *
 */
