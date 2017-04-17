export default class extends React.Component {

  render() {
    return <h5 dangerouslySetInnerHTML={{__html: this.props.children}}/>;
  }
}
