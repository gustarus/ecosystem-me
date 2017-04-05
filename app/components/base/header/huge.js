export default class extends React.Component {

  render() {
    return <h1 dangerouslySetInnerHTML={{__html: this.props.children}}/>;
  }
}
