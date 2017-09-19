import { ISession } from './session';

export interface IUserState {
  id: string;
  email: string;
  displayName: string
  photoUrl: string;
  provider: string;
  session: ISession;
  logout: boolean,
  error: {
    code: string;
    message: string;
  }
};


export const USER_LOGIN_SUCCESS = 'User/LOGIN_SUCESS';

export const USER_DEFAULT_STATE: IUserState = {
  id: null,
  email: null,
  displayName: null, 
  photoUrl: null,
  provider: null,
  logout: true,
  session: null,
  error: {
    code: null,
    message: null
  }
}



export type USER_LOGIN_SUCCESS = {
  uid: string;
  email: string;
  displayName: string;
  photoUrl: string;
  provider: any;
  session: ISession;
}


export const USER_LOGIN = 'User/LOGIN';
export type USER_LOGIN = {
  provider: string;
}
export const USER_LOGIN_FAILED = 'User/LOGIN_FAILED'
export type USER_LOGIN_FAILED = {
  code : string;
  message: string;
}

export const USER_LOGOUT = 'User/LOGOUT'
export type USER_LOGOUT = {
}

export const USER_LOGOUT_SUCCESS = 'User/LOGOUT_SUCCESS'
export type USER_LOGOUT_SUCCESS = {
}
export const USER_LOGOUT_FAILED = 'User/LOGOUT_FAILED'
export type USER_LOGOUT_FAILED = {
}
export const USER_CHANGED = 'User/CHANGE';
export type USER_CHANGED = {
  user: any;
  response: any;
}
