import { ISession } from '../states/session';
export const SERVER = 'http://localhost:3100/api';

export class RestService {
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
    var headers = new Headers();
    headers.append("enctype", "multipart/form-data");
    if (this.session) {
      headers.append('Authorization', this.session.id )
    }
    return headers;
  }
}


