export const MEDIA_UPLOAD = 'Media/UPLOAD';
export const MEDIA_UPLOADED = 'Media/UPLOADED';
export const MEDIA_ERROR_SINGLE = 'Media/ERROR_SINGLE';
export const MEDIA_ERROR = 'Media/ERROR';

export interface IMedia {
  id: string ;
  userId: string;
  files: FileList;
  error: any;
};

