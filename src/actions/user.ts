import { Action } from 'redux-actions';
import * as hello from 'hellojs'
//import firebase from '../common/firebase'

import { 
  USER_DEFAULT_STATE, 
  USER_LOGIN_SUCCESS, 
  USER_LOGIN_FAILED, 
  USER_LOGIN, 

  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILED,

  USER_CHANGED,
  IUserState,
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
PROVIDERS.forEach(p => {provs[p.name] = p.clientId});
console.log(provs)
hello.init(provs);

export function setupUser(user) {
  return (dispatch, getState: () => IUserState) => {
    dispatch({
      type: USER_CHANGED,
      payload: {
        user: user
      } as Action<USER_CHANGED>
    })
  }
}

export function userLogin(providerName: string) {
  return (dispatch, getState: () =>IUserState) => {
    dispatch({
      type: USER_LOGIN,
      payload: {
        provider: providerName
      }
    } as Action<USER_LOGIN>);

    hello(providerName).login({
      scope: 'email'
      }).then(function() {
        const auth = hello(providerName).getAuthResponse()
        console.log(auth);
        let body = {
          provider: providerName,
          token: auth.access_token
        };

        fetch('http://localhost:3100/auth/check', { headers: { "content-type": "application/json" }, method: 'post', body: JSON.stringify(body) } )
        .then(body => body.json())
        .then(data => {
          console.log(data);
          dispatch({
            type: USER_CHANGED,
            payload: {
              user: data,
              response: data
            } as Action<USER_CHANGED>
          })
        }
      , error => {
        //alert('Signin error: ' + error.error.message);
        dispatch({
          type: USER_LOGIN_FAILED,
          payload: {
            code: 1,
            message: error.error.message,
          }
        } as Action<USER_LOGIN_FAILED>);
      });

    });
  }
}


export function userLogout() {
  return (dispatch, getState: () =>IUserState) => {
    dispatch({
      type: USER_LOGOUT,
      payload: {
      }
    } as Action<USER_LOGOUT>)
    firebase.auth().signOut().then(()=> {
      dispatch({
        type: USER_LOGOUT_SUCCESS,
        payload: {
        }
      } as Action<USER_LOGOUT_SUCCESS>)
      //dispatch({
        //type: REDIRECT,
        //payload: {
          //target: '/login'
        //}
      //} as Action<REDIRECT>)

    }).catch(function(error:any) {
      dispatch({
        type: USER_LOGOUT_FAILED,
        payload: {
          code: error.code,
          message: error.message
        }
      } as Action<USER_LOGOUT_FAILED>)
    });


  };
}

