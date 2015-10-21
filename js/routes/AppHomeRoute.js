import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    data: () => Relay.QL`
      query {
        tlp
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
