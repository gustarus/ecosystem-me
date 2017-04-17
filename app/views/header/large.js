import {Link} from 'react-router'

export default class extends React.Component {

  render() {
    if (this.props.href) {
      if (_.isRoute(this.props.href)) {
        return <h3><Link to={this.props.href} dangerouslySetInnerHTML={{__html: this.props.children}}/></h3>;
      } else {
        return <h3><a href={this.props.href} target="_blank" dangerouslySetInnerHTML={{__html: this.props.children}}/></h3>;
      }
    } else {
      return <h3 dangerouslySetInnerHTML={{__html: this.props.children}}/>
    }
  }
}
