export default class extends React.Component {

  render() {
    let title;
    if (this.props.title) {
      title = <h3 className='block__header'>{this.props.title}</h3>;
    }

    let row;
    if (this.props.label || this.props.children) {
      let label;
      if (this.props.label) {
        label = <div className='block__label'>{this.props.label}</div>;
      }

      let content;
      if (this.props.children) {
        content = <div className='block__content'>{this.props.children}</div>;
      }

      row = (
        <div className='block__row'>
          {label}
          {content}
        </div>
      );
    }


    return (
      <div className={'block' + (this.props.className ? ' ' + this.props.className : '')}>
        {title}
        {row}
      </div>
    );
  }
}

