import {Link} from 'react-router'
import Svg from '@components/base/svg'

export default class extends React.Component {

  static defaultProps = {
    position: 'absolute',
    theme: 'light'
  };

  render() {
    const {theme, position} = this.props;

    return (
      <Link to="/" className="return" title="Back to the main page" data-theme={theme} style={{position}}>
        <Svg id="house" viewBox="0 0 79 73" className="return__house"/>
      </Link>
    );
  }
}
