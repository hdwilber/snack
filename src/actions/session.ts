import { Action } from 'redux-actions';
import hello from 'hellojs';

import { 
  SESSION_START,
  SESSION_CHANGED,
  SESSION_END,
  SESSION_RESTORE,
  SESSION_REMOVED,
  SESSION_ERROR,
  ISession
} from '../states';

export const PROVIDERS = [{
    name: 'google',
    clientId: '829662258599-a0jiegjessge14ene1qn8cb9bh1l9993.apps.googleusercontent.com',
  },
  {
    name: 'facebook', 
    clientId: '818114968339364',
  }
];

var provs = {};
const SESSION_NAME = 'snackbarsession';

PROVIDERS.forEach(p => {provs[p.name] = p.clientId});
console.log(provs)
hello.init(provs);

export function sessionStart (provider: string) {
  return (dispatch, getState: () => ISession) => {
    dispatch({
      type: SESSION_START,
      provider: provider
    } as Action<SESSION_START>);

    hello(provider).login({
      scope: 'email'
      }).then(function() {
        const auth = hello(provider).getAuthResponse()
        console.log(auth);
        let body = {
          provider: provider,
          token: auth.access_token
        };

        fetch('http://localhost:3100/auth/check', { headers: { "content-type": "application/json" }, method: 'post', body: JSON.stringify(body) } )
        .then(body => body.json())
        .then(data => {

          dispatch({
            type: SESSION_CHANGED,
            session: data
          } as Action<SESSION_CHANGED>);
          setSession(data);
        }
        , error => {
          dispatch({
            type: SESSION_ERROR,
            code: 1,
            message: error.message,
          } as Action<SESSION_ERROR>);
        });
    });
  }
}


export function sessionRestore() {
  return (dispatch, getState: () => ISession) => {
    dispatch({
      type: SESSION_RESTORE
    } as Action<SESSION_RESTORE>);

    const session = getSession();
    if (session) {
      dispatch( {
        type: SESSION_CHANGED,
        session: session
      } as Action<SESSION_CHANGED>);
    } else {
      dispatch( {
        type: SESSION_ERROR,
        code: 0,
        message: 'There is not saved session to restore'
      } as Action<SESSION_ERROR>);
    }
  }
}

export function sessionEnd () {
  return (dispatch, getState: () => ISession) => {
    dispatch({
      type: SESSION_END
    } as Action<SESSION_END>);

    localStorage.removeItem(SESSION_NAME);

    dispatch( {
      type: SESSION_REMOVED,
    } as Action<SESSION_REMOVED>);
  }
}

function setSession(session: ISession) {
  let sessionStr = JSON.stringify(session);
  console.log(sessionStr);
  localStorage.setItem(SESSION_NAME, sessionStr);
}

function getSession() {
  return JSON.parse(localStorage.getItem(SESSION_NAME));
}

function removeSession () {
  localStorage.removeItem(SESSION_NAME);
}
