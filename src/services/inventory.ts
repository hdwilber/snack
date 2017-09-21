import { ISession } from '../states/session';
import {connect} from 'react-redux'

import { SERVER, RestService } from './common';

const PATHNAME = 'Inventory';

export class InventoryService extends RestService {

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


