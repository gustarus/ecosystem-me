import Table from '@core/views/table'
import LargeHeader from '@core/views/header/large'
import SmallHeader from '@core/views/header/small'
import translate from '@core/helpers/translate'

export default class extends React.Component {

  render() {
    if (!this.props.items) {
      return null;
    }

    let rows = this.props.items.map((item, index) => {
      let date;
      if (item.date instanceof Array) {
        date = translate.asPeriod(item.date[0], item.date[1]).toString();
      } else {
        date = moment(item.date, 'DD.MM.YYYY').format('MMMM D, YYYY');
      }

      return <div className="block__row" key={index}>
        <div className="block__label">{date}</div>
        <div className="block__content">
          <LargeHeader href={item.url} children={item.title}/>
          <SmallHeader children={item.description}/>
        </div>
      </div>;
    });

    return <Table title={this.props.title} highlight={this.props.highlight}>{rows}</Table>;
  }
}

