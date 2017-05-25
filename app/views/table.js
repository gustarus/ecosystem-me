export default class extends React.Component {

  render() {
    let title;
    if (this.props.title) {
      title = <h3 className={'block__header' + (this.props.highlight ? ' block__header_highlight' : '')}>{this.props.title}</h3>;
    }

    let content;
    if (this.props.children) {
      content = <div className='block__content'>{this.props.children}</div>;
    }

    return <div className={'block' + (this.props.className ? ' ' + this.props.className : '')}>
      {title}
      {content}
    </div>;
  }
}

