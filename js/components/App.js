import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  mountImgUrl(path) {
      return 'http://images.footballfanatics.com/FFImage/thumb.aspx?i=' + path
  }
  render() {
    return (
      <div>
        <h1>Departments</h1>
        <ul>
          {this.props.data.departments.map(department =>
            <li>
              <p>Dept: {department.name}</p>
              <p>Team: {department.teamName}</p>
              <p>Count: {department.count}</p>
              <p><img src={this.mountImgUrl(department.image)}/></p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    data: () => Relay.QL`
      fragment on TLP {
        departments {
          name,
          teamName,
          count,
          image
        },
      }
    `,
  },
});
