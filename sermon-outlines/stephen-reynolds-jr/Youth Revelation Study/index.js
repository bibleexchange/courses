'use strict';

const e = React.createElement;

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };
  }

  render() {
    if (this.state.step) {
      return 'You liked this.' + this.state.step;
    }

    return e(
      'button',
      { onClick: () => this.setState({ step: this.state.step+1 }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#app_container');
ReactDOM.render(e(Study), domContainer);