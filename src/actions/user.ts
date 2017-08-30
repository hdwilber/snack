import { Action } from 'redux-actions';
import firebase from '../common/firebase'

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

    var provider = null;
    switch(providerName) {
      case 'google.com':
      provider = new firebase.auth.GoogleAuthProvider();
      break;
      
      case 'facebook.com': 
      provider = new firebase.auth.FacebookAuthProvider();
      break;
    }
    console.log(provider);

    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      console.log(result);
      // The signed-in user info.
      var user = result.user;
      dispatch({
        type: USER_CHANGED,
        payload: {
          user: result.user
        } as Action<USER_CHANGED>
      })
      //dispatch({
        //type:REDIRECT,
        //payload: {
          //location: '/'
        //}
      //});
    }).catch((error:any) => {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: {
          code: error.code,
          message: error.message,
        }
      } as Action<USER_LOGIN_FAILED>);
    });

  };
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

