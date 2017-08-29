//tslint:disable no-empty-interface
export interface IFileUploadState {
  name: string;
  path: string;
  uid: string;
  url: string;
  target: string;
  error: {
    code: string;
    message: string;
  }
}

export const FILE_UPLOAD_DEFAULT_STATE: IFileUploadState = {
  path: null,
  name: null,
  uid: null,
  url: null,
  target: null,
  error: {
    code: null,
    message: null
  }
}


export const FILE_UPLOAD_SUCCESS = 'File/UPLOAD_SUCESS'
export type FILE_UPLOAD_SUCCESS = {
  path: string;
  name: string;
  url: string;
}
export const FILE_UPLOAD_FAILED= 'File/UPLOAD_FAILED'
export type FILE_UPLOAD_FAILED= {
  code : string;
  message: string;
}
export const FILE_UPLOAD = 'File/UPLOAD'
export type FILE_UPLOAD = {
  name: string;
}
