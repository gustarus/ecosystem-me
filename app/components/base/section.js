import {browserHistory} from 'react-router'

export default class extends React.Component {

  constructor(options) {
    super(options);
    this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
  }

  componentWillMount() {
    this.delegateKeyDown();
  }

  componentWillUnmount() {
    this.undegelateKeydown();
  }

  delegateKeyDown() {
    document.addEventListener('keydown', this.onDocumentKeyDown);
  }

  undegelateKeydown() {
    document.removeEventListener('keydown', this.onDocumentKeyDown);
  }

  onDocumentKeyDown(e) {
    e = e || window.event;
    let isEscape;
    if ('key' in e) {
      isEscape = e.key == "Escape";
    } else {
      isEscape = e.keyCode == 27;
    }

    if (isEscape) {
      this.undegelateKeydown();
      browserHistory.push('/');
    }
  }

  render() {
    return <div className="section">{this.props.children}</div>;
  }
};
