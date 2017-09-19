export const INVENTORY_CREATE = 'Item/CREATE';
export const INVENTORY_RETRIEVE = 'Item/RETRIEVE';
export const INVENTORY_RETRIEVE_ALL = 'Item/RETRIEVE_ALL';
export const INVENTORY_UPDATE = 'Item/UPDATE';
export const INVENTORY_REMOVE = 'Item/REMOVE';
export const INVENTORY_CHANGED = 'Item/CHANGED';
export const INVENTORY_ERROR = 'Item/ERROR';
export const INVENTORY_REMOVED = 'Item/REMOVED';

export interface IInventory{
  id: string;
  name: string;
  description: string;
  userId: string;
  list?: Array<any>;
  error: any;
};

export interface IInventoryItem {

};

export const IInventory : IInventory = null;
export const IInventoryItem: IInventoryItem = null;

export interface INVENTORY_CHANGED {
  id: string;
  name: string;
  description: string;
};

export interface INVENTORY_ERROR {
  code: number;
  message: string;
};

export interface ITEM_CREATE {
};
export interface ITEM_UPDATE {
};
export interface ITEM_RETRIEVE {
};
export interface ITEM_RETRIEVE_ALL {
  list: Array<any>;
}



//export interface IUploadState {
  //file: any,
  //name: string;
  //status: string;
  //progress: number;
  //path: string;
  //url: string;
//}
//export interface ICItemErrorState {
  //code: number;
  //message: string;
//}

//export const CITEM_DEFAULT = {
  //id: null,
  //name: null,
  //quantity:null, 
  //timeToWait: null,
  //description: null,
  //autoservice: true,
  //images: [],
  //inProcess: false,
  //status: 'empty',
  //uploading: null,
  //error: null

//};
//export const CITEM_ERROR_DEFAULT: ICItemErrorState = {
  //code: 0,
  //message: null
//}

/*
 *export const CITEM_CREATE = 'CItem/CREATE';
 *export const CITEM_CREATE_SUCCESS = 'CItem/CREATE_SUCCESS';
 *export const CITEM_CREATE_FAILED = 'CItem/CREATE_FAILED';
 *export type CITEM_CREATE = {
 *  id: string;
 *};
 *export type CITEM_CREATE_FAILED = {
 *  code: number;
 *  essage: string;
 *}
 *
 *export const CITEM_SAVE = 'CItem/SAVE'
 *export const CITEM_SAVE_SUCCESS = 'CItem/SAVE_SUCCESS'
 *export const CITEM_SAVE_FAILED = 'CItem/SAVE_FAILED'
 *export type CITEM_SAVE = {
 *  id: string;
 *  name: string;
 *  quantity: number;
 *  description: string;
 *  timeToWait: number;
 *  images: Array<string>
 *}
 *export type CITEM_SAVE_FAILED = {
 *  code: number;
 *  message: string;
 *}
 *
 *export const CITEM_REMOVE = 'CItem/REMOVE';
 *export const CITEM_REMOVE_SUCCESS = 'CItem/REMOVE_SUCCESS';
 *export const CITEM_REMOVE_FAILED = 'CItem/REMOVE_FAILED';
 *export type CITEM_REMOVE = {
 *  id: string;
 *}
 *export type CITEM_REMOVE_FAILED = {
 *  code: number;
 *  message: string;
 *}
 *
 *export const CITEM_UPLOAD = 'CItem/UPLOAD';
 *export const CITEM_UPLOAD_SUCCESS = 'CItem/UPLOAD_SUCCESS';
 *export const CITEM_UPLOAD_FAILED = 'CItem/UPLOAD_FAILED';
 *export type CITEM_UPLOAD = {
 *  data: Array<IUploadState>,
 *  current: IUploadState,
 *}
 *export type CITEM_UPLOAD_SUCCESS = {
 *  singleUpload: IUploadState;
 *}
 *export type CITEM_UPLOAD_FAILED = {
 *  code: number;
 *  message: string;
 *}
 *
 *
 *
 *export const ITEM_CREATE_DEFAULT_STATE: IItemCreateState = {
 *  id: null,
 *  error:{
 *    code: null,
 *    message: null
 *  }
 *}
 *
 *export const ITEM_SAVE_DEFAULT_STATE: IItemSaveState = {
 *  id: null,
 *  name: null,
 *  quantity:null, 
 *  timeToWait: null,
 *  description: null,
 *  error: {
 *    code: null,
 *    message: null
 *  }
 *}
 *
 *
 *export const ITEM_SAVE = 'Item/SAVE';
 *export type ITEM_SAVE= {
 *  id: string;
 *}
 *export const ITEM_SAVE_SUCCESS = 'Item/SAVE_SUCCESS'
 *export type ITEM_SAVE_SUCCESS = {
 *  id: string;
 *  name: string;
 *  quantity: string;
 *  description: string;
 *  timeToWait: any;
 *}
 *export const ITEM_SAVE_FAILED = 'Item/SAVE_FAILED';
 *export type ITEM_SAVE_FAILED = {
 *  code : string;
 *  message: string;
 *}
 *
 *export const ITEM_CREATE = 'Item/CREATE'
 *export type ITEM_CREATE = {
 *}
 *export const ITEM_CREATE_SUCCESS = 'Item/CREATE_SUCCESS'
 *export type ITEM_CREATE_SUCCESS = {
 *  id: string;
 *}
 *export const ITEM_CREATE_FAILED = 'Item/CREATE_FAILED'
 *export type ITEM_CREATE_FAILED=  {
 *  code: string;
 *  error: string;
 *}
 *export const ITEM_REMOVE = 'Item/REMOVE';
 *export type ITEM_REMOVE = {
 *  id: string;
 *}
 *export const ITEM_REMOVE_SUCCESS = 'Item/REMOVE_SUCCESS';
 *export type ITEM_REMOVE_SUCCESS = {
 *  id: string;
 *};
 *export const ITEM_REMOVE_FAILED = 'Item/REMOVE_FAILED';
 *export type ITEM_REMOVE_FAILED = {
 *  error: {
 *    code: string;
 *    message: string;
 *  }
 *};
 *
 */
