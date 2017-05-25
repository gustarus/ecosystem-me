import Scene from '@core/views/scene';
import Block from '@core/views/block';
import Svg from '@core/views/svg';
import Links from '@core/views/blocks/links';
import Section from '@core/views/section';
import HugeHeader from '@core/views/header/huge';
import MediumHeader from '@core/views/header/medium';
import SmallHeader from '@core/views/header/small';
import Html from '@core/views/html';
import Return from '@core/views/return';
import translate from '@core/helpers/translate';
import socials from '@core/helpers/socials';

export default class extends React.Component {

  componentDidMount() {
    socials.renderWidgets();
  }

  render() {
    return <Section type={[this.props.type, 'speech']}>
      <Scene type={this.props.type}>
        <Svg id={this.props.icon} className={'scene-' + this.props.type + '__icon'}/>
        <Return/>
      </Scene>

      <Scene type='details'>
        <Block className='block_summary'>
          <HugeHeader children={this.props.title}/>
          <MediumHeader children={this.props.description}/>
          <SmallHeader children={translate.asDate(this.props.date)}/>
          <Html children={this.props.summary}/>
        </Block>
        <Links title='Links' className='block_summary' items={this.props.links}/>
      </Scene>
    </Section>;
  }
}
