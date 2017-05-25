import {browserHistory} from 'react-router';

/**
 * This is a global component for all non root routes.
 * For example: resume, infographic and so on.
 * This instance allow to use escape for exit to the root route.
 */
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
      isEscape = e.key === 'Escape';
    } else {
      isEscape = e.keyCode === 27;
    }

    if (isEscape) {
      this.undegelateKeydown();
      browserHistory.push('/');
    }
  }

  render() {
    const {type} = this.props;
    const classes = ['section'];
    const suffixes = type instanceof Array
      ? type.map(type => `section-${type}`) : [`section-${type}`];


    return (
      <div className={classes.concat(suffixes).join(' ')}>
        {this.props.children}
      </div>
    );
  }
};
