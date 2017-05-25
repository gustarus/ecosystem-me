export default class extends React.Component {

  render() {
    const style = this.props.fixed ? {marginTop: -this.props.scroll} : null;

    return (
      <div className={'facade' + (this.props.fixed ? ' facade_fixed' : '')}>
        <div className='facade__content' style={style}>{this.props.children}</div>
      </div>
    );
  }
}
