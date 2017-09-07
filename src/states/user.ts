// Types
export interface ISession {
  id: string;
  ttl: string;
  userId: string;
  profile: IProfile;
  error: any;
}

export interface IProfile {
  id: string;
  email: string;
  displayName: string
  photoUrl: string;
  provider: string;
};

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

export const SESSION_START = 'Session/START';
export const SESSION_START_FAILED = 'Session/START_FAILED';
export const SESSION_END = 'Session/START';
export const SESSION_END_FAILED = 'Session/START_FAILED';
export const SESSION_RESTORE = 'Session/RESTORE';
export const SESION_RESTORE_FAILED = 'Session/RESTORE_FAILED';
export const SESSION_CHANGE = 'Session/CHANGE';

export type SESSION_START = {
  provider: string;
};

export type SESSION_CHANGE = {
  id: string;
  ttl: string;
  userId: string;
  profile: IProfile;
};

export type SESSION_ERROR = {
  code: number;
  message: number;
};

export const SESSION_DEFAULT_STATE: ISession = {
  id: null,
  ttl: null,
  userId: null,
  profile: null,
  error: null
};

export const USER_LOGIN_SUCCESS = 'User/LOGIN_SUCESS';

export const USER_DEFAULT_STATE: IUserState = {
  id: null,
  email: null,
  displayName: null, 
  photoUrl: null,
  provider: null,
  logout: true,
  session: {
    id: null, 
    ttl: null,
    userId: null,
    profile: null,
    error: null
  },
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
