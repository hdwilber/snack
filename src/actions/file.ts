import { Action } from 'redux-actions';
import firebase from '../common/firebase'

import { IFileUploadState, FILE_UPLOAD_DEFAULT_STATE, FILE_UPLOAD_SUCCESS, FILE_UPLOAD_FAILED, FILE_UPLOAD } from '../states';


export function fileUpload(targetId: string, files:FileList) {
  return (dispatch, getState: () =>any) => {
    var state = getState();

    if (state.user.email != null) {
      var storageRef = firebase.storage().ref();
      var images = storageRef.child('images/'+targetId);
      for(let i=0; i< files.length; i++) {
        let imgRef = images.child(Date.now()+ files[i].name)
        imgRef.put(files[i]).then (snap => {
          console.log(snap);
          dispatch({
            type: FILE_UPLOAD_SUCCESS,
            payload: {
              name: snap.metadata.name,
              path: snap.metadata.fullPath,
              url: snap.metadata.downloadURLs[0],
              target:  targetId
            } as Action<FILE_UPLOAD_SUCCESS>
          })
        }).catch((error:any) => {
          dispatch({
            type: FILE_UPLOAD_FAILED,
            payload: {
              code: error.code,
              message: error.message,
            }
          } as Action<FILE_UPLOAD_FAILED>);
        });
      };

      dispatch({
        type: FILE_UPLOAD,
        payload: {
          name: 'archivo.txt'
        }
      } as Action<FILE_UPLOAD>);
    } else {
      dispatch({
        type: FILE_UPLOAD_FAILED,
        payload: {
          code: '0',
          message: 'Not logged user'
        }
      } as Action<FILE_UPLOAD_FAILED>);
    };
  }
}

