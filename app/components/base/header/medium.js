export default class extends React.Component {

  render() {
    return <h4 dangerouslySetInnerHTML={{__html: this.props.children}}/>;
  }
}
