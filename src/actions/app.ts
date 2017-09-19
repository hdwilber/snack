import { Action } from 'redux-actions';
//import firebase from '../common/firebase'
import {
  IAppState,
  PAGE_LOAD
} from '../states'

export function showLoadable(page: string, loading: boolean) {
  return (dispatch, getState: () => IAppState) => {
    dispatch({
      type: PAGE_LOAD,
      payload: {
        page: page,
        isLoading: loading
      }
    } as Action<PAGE_LOAD>);
  };
}
