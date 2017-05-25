import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import config from '@core/config';
import Theater from '@core/views/theater';
import Facade from '@core/views/facade';
import Main from './main';
import Hello from './hello';

export default class extends React.Component {

  constructor(options) {
    super(options);
    this.state = {scroll: 0};
  }

  componentWillReceiveProps(nextProps) {
    const {location} = nextProps;
    if (location.pathname !== '/') {
      this.setState({scroll: window.scrollY});
      window.scrollTo(0, 0);
    }
  }

  componentDidUpdate() {
    if (this.props.location.pathname === '/') {
      window.scrollTo(0, this.state.scroll);
    }
  }

  render() {
    const prefix = window.location.hostname.split('.')[0];
    const segment = this.props.location.pathname.split('/')[1] || 'root';
    const resume = _.defaults({}, config.resume[prefix], config.resume.defaults);

    return <Theater>
      <Facade scroll={this.state.scroll} fixed={segment !== 'root'}>
        <Main {...config.main} fixed={segment !== 'root'}/>
        <Hello {...resume}/>
      </Facade>

      <ReactCSSTransitionGroup transitionName='transition-section' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        {React.cloneElement(this.props.children, {key: segment})}
      </ReactCSSTransitionGroup>
    </Theater>;
  }
}
