import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import config from '@core/config'
import Section from '@core/views/section'
import Scene from '@core/views/scene'
import Return from '@core/views/return'
import Svg from '@core/views/svg'
import Plate from '@core/views/plate'
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
