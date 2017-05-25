import Table from '@core/views/table';

export default class extends React.Component {

  render() {
    const tags = _.map(this.props.tags, (item, index) => {
      return <li key={index} data-value={item}>{index}</li>;
    });

    const languages = _.map(this.props.languages, (item, index) => {
      return <span key={index}>{index} - {item}<br/></span>;
    });

    const rows = [
      <div className='block__row' key='1'>
        <div className='block__label'>Skills</div>
        <div className='block__content'>
          <ul className='tags'>{tags}</ul>
        </div>
      </div>,

      <div className='block__row' key='2'>
        <div className='block__label'>Languages</div>
        <div className='block__content'>{languages}</div>
      </div>
    ];

    return <Table title={this.props.title}>{rows}</Table>;
  }
}

