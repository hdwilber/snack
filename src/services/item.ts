import { ISession } from '../states/session';
import {connect} from 'react-redux'

import { SERVER, RestService } from './common';

const PATHNAME = 'Items';

export class ItemService extends RestService {

  create(userId) {
    const data = {
      userId: userId
    };
    return fetch (
      `${SERVER}/${PATHNAME}`,
      {
        headers: this.createHeaders(),
        method: 'POST',
        body: JSON.stringify(data)
      }
    );
  }

  upload (id, files: FileList) {

    var formData = new FormData();
    for(var i = 0; i < files.length; i++) {
      formData.append('thefiles', files.item(i), files.item(i).name);
    }

    return fetch (`${SERVER}/${PATHNAME}/${id}/upload`,
                  {
                    headers: this.createUploadHeaders(),
                    method: 'POST',
                    body: formData
                  });
  }

  getAll() {
    return fetch (`${SERVER}/${PATHNAME}`,
                 {headers: this.createHeaders(),
                  method: 'GET', 
                 }
    )
  }

  get(id) {
    return fetch (`${SERVER}/${PATHNAME}`,
                 {headers: this.createHeaders(),
                  method: 'GET', 
                 }
    )
  }

  update(data) {
    if (data && data.id) {
      return fetch (
        `${SERVER}/${PATHNAME}/${data.id}`,
        {
          headers: this.createHeaders(),
          method: 'PATCH',
          body: JSON.stringify(data)
        }
      );
    }
  }

  remove(id) {
    if (id) {
      return fetch (
        `${SERVER}/${PATHNAME}/${id}`,
        {
          headers: this.createHeaders(),
          method: 'DELETE'
        }
      );
    }
  }
}


