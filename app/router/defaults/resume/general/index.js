import Scene from '@core/views/scene';
import Block from '@core/views/block';
import Activities from '@core/views/blocks/activities';
import config from '@core/config';

export default class extends React.Component {

  render() {
    return (
      <Scene type='general'>
        <Block className='block-me'>
          <div className='block-me__header'>
            <h3 className='block-me__title'>
              <div className='block-me__part'>{config.me.name},</div>
              <div className='block-me__part'>&nbsp;{config.me.role}</div>
            </h3>
            <h4 className='block-me__contacts'>
              <div className='block-me__part'>{config.me.city}, <a href={'mailto:' + atob(config.me.email)}>{atob(config.me.email)}</a>,</div>
              <div className='block-me__part'>&nbsp;<a href={window.location.origin}>{window.location.origin}</a>,</div>
              <div className='block-me__part'>
                <div className='print'>&nbsp;linkedin: <a href={config.me.linkedin}>{config.me.linkedin}</a></div>
                <div className='noprint'>&nbsp;<a href={config.me.linkedin}>https://linkedin.com</a></div>
              </div>
            </h4>
          </div>
        </Block>
        <Block className='block-hello'>
          <div className='block-hello__content' dangerouslySetInnerHTML={{__html: this.props.summary}}/>
        </Block>
        <Activities title='Speeches' items={this.props.speeches}/>
        <Activities title='Activities' items={this.props.activities}/>
      </Scene>
    );
  }
}
