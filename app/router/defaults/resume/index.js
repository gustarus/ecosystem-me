import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import config from '@core/config/defaults'
import Section from '@components/base/section'
import Scene from '@components/base/scene'
import Return from '@components/base/return'
import Svg from '@components/base/svg'
import Plate from '@components/interface/plate'
import General from './general'
import Details from './details'

export default class extends React.Component {

  render() {
    const plate = config.main.plate;
    const prefix = window.location.hostname.split('.')[0];
    const resume = _.defaults({}, config.resume[prefix], config.resume.defaults);

    return (
      <Section>
        <div className="noprint">
          <Scene type="resume">
            <Svg id="resume" className="scene-resume__icon"/>
            <Return/>
          </Scene>
        </div>

        <General {...resume}/>
        <Details {...resume}/>
      </Section>
    );
  }
}
