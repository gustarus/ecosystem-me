import Scene from '@components/base/scene'
import Block from '@components/base/block'
import Svg from '@components/base/svg'
import Links from '@components/blocks/links'
import Section from '@components/base/section'
import HugeHeader from '@components/base/header/huge'
import MediumHeader from '@components/base/header/medium'
import SmallHeader from '@components/base/header/small'
import Html from '@components/base/html'
import Return from '@components/base/return'
import translate from '@helpers/translate'
import socials from '@core/helpers/socials'

export default class extends React.Component {

  componentDidMount() {
    socials.renderWidgets();
  }

  render() {
    return <Section>
      <Scene type={this.props.type}>
        <Svg id={this.props.icon} className={'scene-' + this.props.type + '__icon'}/>
        <Return/>
      </Scene>

      <Scene type="details">
        <Block className="block_summary">
          <HugeHeader children={this.props.title}/>
          <MediumHeader children={this.props.description}/>
          <SmallHeader children={translate.asDate(this.props.date)}/>
          <Html children={this.props.summary}/>
        </Block>
        <Links title="Links" className="block_summary" items={this.props.links}/>
      </Scene>
    </Section>;
  }
}
