import Table from '@core/views/table'
import LargeHeader from '@core/views/header/large'
import MediumHeader from '@core/views/header/medium'
import SmallHeader from '@core/views/header/small'

export default class extends React.Component {

  render() {
    const rows = this.props.items.map((item, index) => {
      return <div className="block__row" key={index}>
        <div className="block__label">{item.label}</div>
        <div className="block__content">
          <LargeHeader children={item.name}/>
          <MediumHeader children={item.specialization}/>
          <SmallHeader children={item.description}/>
        </div>
      </div>
    });

    return <Table title={this.props.title}>{rows}</Table>;
  }
}

