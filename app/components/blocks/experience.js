import date from '@helpers/date'
import translate from '@helpers/translate'
import Block from '@components/base/block'
import LargeHeader from '@components/base/header/large'
import MediumHeader from '@components/base/header/medium'
import SmallHeader from '@components/base/header/small'
import Html from '@components/base/html'

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

