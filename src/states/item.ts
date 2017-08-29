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

export interface ICItemState {
  id: string;
  name: string;
  quantity: number;
  description: string;
  timeToWait: number;
  images: Array<string>
  inProcess: boolean; // True when is executing the status: creation, saving, uploading,etc
  status: string; // create, save, upload
  uploadStatus: { // When uploading files
    files: File,
    current: number;
    progress: number;
    status: string;
  }
  error: ICItemErrorState;
}
export interface ICItemErrorState {
  code: number;
  message: string;
}

export const CITEM_DEFAULT = {
  id: null,
  name: null,
  quantity:null, 
  timeToWait: null,
  description: null,
  images: [],
  inProcess: false,
  status: 'empty',
  uploadStatus: null,
};
export const CITEM_ERROR_DEFAULT: ICItemErrorState = {
  code: 0,
  message: null
}

export const CITEM_CREATE = 'CItem/CREATE';
export const CITEM_CREATE_SUCCESS = 'CItem/CREATE_SUCCESS';
export const CITEM_CREATE_FAILED = 'CItem/CREATE_FAILED';
export type CITEM_CREATE = {
  id: string;
};
export type CITEM_CREATE_FAILED = {
  code: number;
  essage: string;
}

export const CITEM_SAVE = 'CItem/SAVE'
export const CITEM_SAVE_SUCCESS = 'CItem/SAVE_SUCCES'
export const CITEM_SAVE_FAILED = 'CItem/SAVE_FAILED'
export type CITEM_SAVE = {
  id: string;
  name: string;
  quantity: number;
  description: string;
  timeToWait: number;
  images: Array<string>
}
export type CITEM_SAVE_FAILED = {
  code: number;
  message: string;
}

export const CITEM_REMOVE = 'CItem/REMOVE';
export const CITEM_REMOVE_SUCCESS = 'CItem/REMOVE_SUCCESS';
export const CITEM_REMOVE_FAILED = 'CItem/REMOVE_FAILED';
export type CITEM_REMOVE = {
  id: string;
}
export type CITEM_REMOVE_FAILED = {
  code: number;
  message: string;
}

export const CITEM_UPLOAD = 'CItem/UPLOAD';
export const CITEM_UPLOAD_SUCCESS = 'CItem/UPLOAD_SUCCESS';
export const CITEM_UPLOAD_FAILED = 'CItem/UPLOAD_FAILED';
export type CITEM_UPLOAD = {
  name: null,
  path: null,
  uid: null,
  url: null,
  target: null,
}
export type CITEM_UPLOAD_FAILED = {
  code: number;
  message: string;
}

//export const CITEM_SAVE_SUCCESS = 'CItem/SAVE_SUCCESS';
//export const CITEM_SAVE_FAILED = 'CItem/SAVE_FAILED';
//export type CITEM_SAVE_ALL = {
  //id: string;
  //name: string; 
  //quantity: number;
  //timeToWait: number;
  //description: string;
  //images: Array<string>;
//export type CITEM_SAVE_FAILED = {
  //code: string;
  //message: string;
//}
//export const CITEM_REMOVE_FAILED = 'CItem/REMOVE_SUCCESS';
//export type CITEM_REMOVE_SUCCESS = {
//}

//export const CITEM_DELETE = 'CItem/'


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
export const ITEM_REMOVE = 'Item/REMOVE';
export type ITEM_REMOVE = {
  id: string;
}
export const ITEM_REMOVE_SUCCESS = 'Item/REMOVE_SUCCESS';
export type ITEM_REMOVE_SUCCESS = {
  id: string;
};
export const ITEM_REMOVE_FAILED = 'Item/REMOVE_FAILED';
export type ITEM_REMOVE_FAILED = {
  error: {
    code: string;
    message: string;
  }
};

