//tslint:disable no-empty-interface
export interface IItemCreateState{
  id: string;
  error: {
    code: string;
    message: string;
  }
};
export interface IItemSaveState {
  id: string;
  name: string;
  quantity: number;
  description: string;
  timeToWait: number;
  error: {
    code: string;
    message: string;
  }
}
export const ITEM_CREATE_DEFAULT_STATE: IItemCreateState = {
  id: null,
  error:{
    code: null,
    message: null
  }
}

export const ITEM_SAVE_DEFAULT_STATE: IItemSaveState = {
  id: null,
  name: null,
  quantity:null, 
  timeToWait: null,
  description: null,
  error: {
    code: null,
    message: null
  }
}


export const ITEM_SAVE = 'Item/SAVE';
export type ITEM_SAVE= {
  id: string;
}
export const ITEM_SAVE_SUCCESS = 'Item/SAVE_SUCCESS'
export type ITEM_SAVE_SUCCESS = {
  id: string;
  name: string;
  quantity: string;
  description: string;
  timeToWait: any;
}
export const ITEM_SAVE_FAILED = 'Item/SAVE_FAILED';
export type ITEM_SAVE_FAILED = {
  code : string;
  message: string;
}

// create an empty data . Useful to retrieve key value for saving images
export const ITEM_CREATE = 'Item/CREATE'
export type ITEM_CREATE = {
}
export const ITEM_CREATE_SUCCESS = 'Item/CREATE_SUCCESS'
export type ITEM_CREATE_SUCCESS = {
  id: string;
}
export const ITEM_CREATE_FAILED = 'Item/CREATE_FAILED'
export type ITEM_CREATE_FAILED=  {
  code: string;
  error: string;
}
