import date from '@core/helpers/date'
import translate from '@core/helpers/translate'
import Block from '@core/views/block'
import LargeHeader from '@core/views/header/large'
import MediumHeader from '@core/views/header/medium'
import SmallHeader from '@core/views/header/small'
import Html from '@core/views/html'

export default class extends React.Component {

  render() {
    let total = this.props.items.reduce((value, item) => {
      let period = date.period(item.period[0], item.period[1]);
      return value + period.months;
    }, 0);

    let blocks = this.props.items.map((item, index) => {
      let period = translate.asPeriod(item.period[0], item.period[1]);

      return <Block className="group__block block_experience" label={period} key={index}>
        <div>
          <LargeHeader children={item.specialization}/>
          <MediumHeader children={item.company}/>
          <SmallHeader children={item.description}/>
          <Html children={item.content}/>
        </div>
      </Block>;
    });

    return <div className="group">
      <Block title={'Work experience — ' + translate.asDuration(moment.duration(total, 'months'))} className="group__block"/>
      {blocks}
    </div>;
  }
}

