import {Link} from 'react-router';
import config from '@core/config';
import app from '@core/app';

export default class extends React.Component {

  constructor(options) {
    super(options);

    this.onScroll = this.onScroll.bind(this);
    this.onScrollThrottled = _.throttle(this.onScroll, 100);
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

  render() {
    const {name, role, city, email, linkedin} = this.props;
    const test = app.abinterface.use('link-to-the-infographic');

    return (
      <div className='plate'>
        <div className='plate__content'>
          <div className='plate__title'>
            {name}
            &nbsp;<span className='plate__specialization'>[{role}]</span>
          </div>
          <div className='plate__description'>
            <div className='print plate__description-part'>{linkedin}</div>

            <div className='plate__description-part'>
              <span className='plate__description-item'>{city}</span>
              <span className='plate__description-delimiter'>|</span>
              <a className='plate__description-item'
                 href={'mailto:' + atob(email)}>{atob(email)}</a>
            </div>

            <span className='noprint plate__description-delimiter'>|</span>

            <div className='noprint plate__description-part'>
              <Link to='/infographic'
                    className={'noprint plate__description-item abtest-' + test.id}
                    onClick={test.hit}>
                Infographic about me
              </Link>
              <span className='noprint plate__description-delimiter'>|</span>
              <Link to='/resume' className='plate__description-item' title='Back to the main page'>Get the resume</Link>
              <span className='plate__description-delimiter'>|</span>
              <a className='plate__description-item' href={linkedin} target='_blank'>LinkedIn</a>
            </div>

            <div className='print plate__description-part'>{window.location.origin}</div>
          </div>
        </div>
      </div>
    );
  }

  delegateAnimation() {
    this.el = ReactDOM.findDOMNode(this);
    this.el.classList.remove('plate_fixed');

    if (!_.isMobile()) {
      this.offset = this.el.offsetTop;
      window.scrollY && this.onScroll();
      window.addEventListener('scroll', this.onScrollThrottled, false);
    }
  }

  undelegateAnimation() {
    window.removeEventListener('scroll', this.onScrollThrottled);
    delete this.el;
    delete this.offset;
  }

  stick() {
    this.el.classList.add('plate_fixed');
    this.stuck = true;
  }

  unstick() {
    this.el.classList.remove('plate_fixed');
    this.stuck = false;
  }

  toggle(condition) {
    if (condition) {
      this.stick();
    } else {
      this.unstick();
    }
  }

  onScroll() {
    if (this.props.fixed) {
      this.toggle(this.stuck);
    } else {
      this.toggle(window.scrollY > this.offset - this.el.clientHeight / 2);
    }
  }
}

