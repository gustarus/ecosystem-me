export default class extends React.Component {

  render() {
    return <div dangerouslySetInnerHTML={{__html: this.props.children}}/>;
  }
}
