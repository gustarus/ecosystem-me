import Scene from '@core/views/scene';
import Block from '@core/views/block';
import Activities from '@core/views/blocks/activities';
import Links from '@core/views/blocks/links';

export default class extends React.Component {

  render() {
    return (
      <Scene type='hello'>
        <Block className='block-hello'>
          <div className='block-hello__content' dangerouslySetInnerHTML={{__html: this.props.summary}}/>
        </Block>
        <Activities title='Activities' items={this.props.activities}/>
        <Activities title='Speeches' items={this.props.speeches}/>
        <Links title='Links' items={this.props.links}/>
      </Scene>
    );
  }
}
