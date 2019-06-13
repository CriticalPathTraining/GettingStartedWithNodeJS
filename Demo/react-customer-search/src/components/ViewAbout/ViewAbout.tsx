import * as React from 'react';
import './ViewAbout.css';

export default class ViewAbout extends React.Component<any, any> {

  render() {
    return (
      <div id="view-about" className="content-body" >
        <div className="row">
          <div className="jumbotron col">
            <h3>About this app</h3>
            <p className="about-text">This demo React.js app was created by Critical Path Training.</p>
          </div>
        </div>
      </div>
    );
  }

}
