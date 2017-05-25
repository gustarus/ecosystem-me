import config from '@core/config';
import Speech from '@core/views/speech';

export default class extends React.Component {

  render() {
    return <Speech type='frontendconf' icon='frontendconf' {...config.speeches.frontendconf}/>;
  }
}
