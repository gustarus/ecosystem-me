import config from '@core/config';
import Speech from '@core/views/speech';

export default class extends React.Component {

  render() {
    return <Speech type='database' icon='database' {...config.speeches.database}/>;
  }
}
