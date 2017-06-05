import Table from '@core/views/table';

export default class extends React.Component {

  renderLink(index, item) {
    const title = _.isStatic(item.url) ? item.url.split('/').pop() : item.url;
    return (
      <div className='block__row' key={index}>
        <div className='block__label' dangerouslySetInnerHTML={{__html: item.title}}/>
        <div className='block__content'><a href={item.url} target='_blank' title={title}>{title}</a></div>
      </div>
    );
  }

  renderLinksBlock(index, block) {
    const links = block.links.map((item, linkIndex) => this.renderLink(linkIndex, item));
    return (
      <div key={index} className='block__section'>
        <div className='block__section-header' key={index}>{block.title}</div>
        {links}
      </div>
    );
  }

  render() {
    const rows = this.props.items.map((item, index) => {
      return item.links
        ? this.renderLinksBlock(index, item) : this.renderLink(index, item);
    });

    return <Table title={this.props.title} className={this.props.className}>{rows}</Table>;
  }
}
