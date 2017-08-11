import { Action } from 'redux-actions';
import { IAppState } from '../state';

export const PAGE_LOAD = 'App/PAGE_LOAD';
export type PAGE_LOAD = {
  isLoading: boolean
};

export function showLoadable(isLoading: boolean) {
  return (dispatch, getState: () => IAppState) => {
    dispatch({
      type: PAGE_LOAD,
      payload: {
        isLoading
      }
    } as Action<PAGE_LOAD>);
  };
}