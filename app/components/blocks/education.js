import Table from '@components/base/table'
import LargeHeader from '@components/base/header/large'
import MediumHeader from '@components/base/header/medium'
import SmallHeader from '@components/base/header/small'

export default class extends React.Component {

  render() {
    let rows = this.props.items.map((item, index) => {
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

