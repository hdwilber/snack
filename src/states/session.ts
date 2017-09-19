// Types
export interface ISession {
  id: string;
  ttl: string;
  userId: string;
  profile: IProfile;
  provider: string;
  error: any;
}

export interface IProfile {
  id: string;
  email: string;
  displayName: string
  photoUrl: string;
  provider: string;
  error: any;
};

export const SESSION_START = 'Session/START';
export const SESSION_END = 'Session/END';
export const SESSION_RESTORE = 'Session/RESTORE';
export const SESSION_CHANGED = 'Session/CHANGED';
export const SESSION_REMOVED = 'Session/REMOVED'
export const SESSION_ERROR = 'Session/ERROR';

export type SESSION_START = {
  provider: string;
}

export type SESSION_END = {
}

export type SESSION_REMOVED = {
};

export type SESSION_CHANGED = {
  id: string;
  ttl: string;
  userId: string;
  profile: IProfile;
};

export type SESSION_RESTORE = {
};

export type SESSION_ERROR = {
  code: number;
  message: number;
};

export const SESSION_DEFAULT: ISession = null;
