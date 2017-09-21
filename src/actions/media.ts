import { Action } from 'redux-actions';
import { IAppState } from '../states';
import { ItemService } from '../services';

import { 
  IMedia,
  MEDIA_UPLOAD_ALL,
  MEDIA_UPLOADED_ONE,
  ITEM_ERROR
} from '../states';

const itemService = new ItemService();

export function itemRetrieveAll() {
  return (dispatch, getState: () => any) => {
    const { session } = getState();
    if (session) {

      itemService.setSession(session);

      dispatch({
        type: ITEM_RETRIEVE_ALL,
      });

      itemService.getAll()
      .then (res => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch( {
            type: ITEM_ERROR,
            code: 0,
            message: "something went wrong in response"
          })
          return null;
        }
      })
      .then( data => {
        dispatch( {
          type: ITEM_CHANGED,
          list: data
        })
      })
      .catch(err => {
        dispatch( {
          type: ITEM_ERROR,
          code: 0,
          message: err.message
        })
      });

    }
  }
}

export function itemRetrieve(id) {
  return (dispatch, getState: () => any) => {
    const { session } = getState();
    if (session) {

      itemService.setSession(session);

      dispatch({
        type: ITEM_RETRIEVE,
        userId: session.userId
      });

      itemService.get(id)
      .then (res => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch( {
            type: ITEM_ERROR,
            code: 0,
            message: "something went wrong in response"
          })
          return null;
        }
      })
      .then( data => {
        console.log(data);
        dispatch( {
          type: ITEM_CHANGED,
          item: JSON.parse(data)
        })
      })
      .catch(err => {
        dispatch( {
          type: ITEM_ERROR,
          code: 0,
          message: err.message
        })
      });

    }
  }
}
export function itemCreate() {
  return (dispatch, getState: () => any) => {
    const { session } = getState();
    if (session) {

      itemService.setSession(session);

      dispatch({
        type: ITEM_CREATE,
        userId: session.userId
      });

      itemService.create(session.userId)
      .then (res => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch( {
            type: ITEM_ERROR,
            code: 0,
            message: "something went wrong in response"
          })
          return null;
        }
      })
      .then( data => {
        console.log(data);
        dispatch( {
          type: ITEM_CHANGED,
          item: JSON.parse(data)
        })
      })
      .catch(err => {
        dispatch( {
          type: ITEM_ERROR,
          code: 0,
          message: err.message
        })
      });

    }
  }
}

export function itemUpdate(data) {
  return (dispatch, getState: () => any) => {
    const { session } = getState();
    if (session && !session.error) {
      itemService.setSession(session);

      dispatch({
        type: ITEM_UPDATE
      });

      itemService.update(data)
      .then (res => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch( {
            type: ITEM_ERROR,
            code: 0,
            message: "something went wrong in response"
          })
          return null;
        }
      })
      .then( data => {
        console.log(data);
        dispatch( {
          type: ITEM_CHANGED,
          item: JSON.parse(data)
        })
      })
      .catch(err => {
        dispatch( {
          type: ITEM_ERROR,
          code: 0,
          message: err.message
        })
      });

    }
  }
}

export function itemRemove(id) {
  return (dispatch, getState: () => any) => {
    const { session } = getState();
    if (session && !session.error) {
      itemService.setSession(session);

      dispatch({
        type: ITEM_REMOVE,
      });

      itemService.remove(id)
      .then (res => {
        if (res.ok) {
          return res.json();
        } else {
          dispatch( {
            type: ITEM_ERROR,
            code: 0,
            message: "something went wrong in response"
          })
          return null;
        }
      })
      .then( data => {
        console.log(data);
        dispatch( {
          type: ITEM_REMOVED
        })
      })
      .catch(err => {
        dispatch( {
          type: ITEM_ERROR,
          code: 0,
          message: err.message
        })
      });

    }
  }
}

