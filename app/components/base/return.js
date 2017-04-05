import {Link} from 'react-router'
import Svg from '@components/base/svg'

export default class extends React.Component {

  render() {
    return <Link to="/" className="return" title="Back to the main page">
      <Svg id="house" viewBox="0 0 79 73" className="return__house"/>
    </Link>;
  }
}
