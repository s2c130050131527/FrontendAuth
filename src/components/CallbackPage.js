import React, { Component } from 'react';
import request from 'request-promise';
import { RingLoader } from 'react-spinners';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import { setCookie } from '../Utils';

class Callback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      const params = qs.parse(location.search, { ignoreQueryPrefix: true });
      if (params.code) {
        try {
          const userObj = await request({
            uri: `${process.env.REACT_APP_API_URL}callback`,
            qs: params,
            method: 'GET',
            json: true,
          });
          setCookie('user', userObj);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

  render() {
    const { loading } = this.state;
    return loading ? (
      <div className="container disp-flex center">
        <RingLoader size={210} color="#a5f523" />
      </div>
    ) : null;
  }
}

export default withRouter(Callback);
