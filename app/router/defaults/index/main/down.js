import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class extends React.Component {

  constructor(options) {
    super(options);
    this.state = {visible: true};
    this.onWindowChangeDebounced = _.debounce(this.onWindowChange.bind(this), 200);
  }

  componentDidMount() {
    this.delegateAnimation();
  }

  componentWillUpdate() {
    this.undelegateAnimation();
  }

  componentDidUpdate() {
    this.delegateAnimation();
  }

  componentWillUnmount() {
    this.undelegateAnimation();
  }

  delegateAnimation() {
    window.addEventListener('scroll', this.onWindowChangeDebounced);
    window.addEventListener('resize', this.onWindowChangeDebounced);
  }

  undelegateAnimation() {
    window.removeEventListener('scroll', this.onWindowChangeDebounced);
    window.removeEventListener('resize', this.onWindowChangeDebounced);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.visible !== nextState.visible;
  }

  render() {
    let component = this.state.visible ? <div className="scene-main__down"></div> : null;
    return <ReactCSSTransitionGroup transitionName="scene-main__down"
                                    transitionAppear={true}
                                    transitionAppearTimeout={500}
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={500}>{component}</ReactCSSTransitionGroup>;
  }

  onWindowChange() {
    this.setState({
      visible: window.innerWidth >= this.props.threshold.width
      && window.innerHeight >= this.props.threshold.height
      && window.scrollY <= this.props.threshold.scroll
    });
  }
}
