import { ISession } from '../states/session';
import {connect} from 'react-redux'

const SERVER = 'http://localhost:3100/api';
class RestService {
  public session: ISession;
  
  setSession(session: ISession) {
    this.session = session;
  }

  createHeaders() {
    var headers = new Headers();
    headers.append('content-type', 'application/json');
    if (this.session) {
      headers.append('Authorization', this.session.id )
    }
    return headers;
  }
  createUploadHeaders() {
  }
}


const ITEMS_PATHNAME = 'Items';

export class ItemService extends RestService {

  create(userId) {
    const data = {
      userId: userId
    };
    return fetch (
      `${SERVER}/${ITEMS_PATHNAME}`,
      {
        headers: this.createHeaders(),
        method: 'POST',
        body: JSON.stringify(data)
      }
    );
  }
  getAll() {
    return fetch (`${SERVER}/${ITEMS_PATHNAME}`,
                 {headers: this.createHeaders,
                  method: 'GET', 
                 }
    )
  }
  get(id) {
    return fetch (`${SERVER}/${ITEMS_PATHNAME}`,
                 {headers: this.createHeaders,
                  method: 'GET', 
                 }
    )
  }
  update(data) {
    if (data && data.id) {
      return fetch (
        `${SERVER}/${ITEMS_PATHNAME}/${data.id}`,
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
        `${SERVER}/${ITEMS_PATHNAME}/${id}`,
        {
          headers: this.createHeaders(),
          method: 'DELETE'
        }
      );
    }
  }
}


