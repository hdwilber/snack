import { ISession } from '../states/user';
import {connect} from 'react-redux'

interface IOwnProps {
};
interface IConnProps {
  session;
};
interface IConnDispatches {
};
interface IOwnState {
};

function mapStateToProps(state) {
  return {
    session: state.user.session
  };
};
function mapDispatchesToProps(dispatch) {
  return {
  }
};
class _RestService implements IOwnProps, IConnProps{
  server: 'http://localhost:3100';
  session: ISession;
  
  constructor() {
  }
  createHeaders() {
    var headers = new Headers();
    headers.append('content-type', 'application/json');
    if (this.session) {
      headers.append('Authorization', this.session.id )
    }
  }
  createUploadHeaders() {
  }

  componentWillReceiveProps(nextProps) {
    console.log('HOLASDFAS')
    console.log(nextProps);
  }
}

var RestService = new connect(mapStateToProps, mapDispatchesToProps) (_RestService);
export default RestService;

