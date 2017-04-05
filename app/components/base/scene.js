export default class extends React.Component {

  render() {
    return <div className={`scene scene-${this.props.type }`}>
      <div className={`scene__content scene-${this.props.type }__content`}>{this.props.children}</div>
    </div>;
  }
}
