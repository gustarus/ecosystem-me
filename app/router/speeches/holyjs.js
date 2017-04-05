import config from '@core/config/defaults'
import Speech from '@components/base/speech'

export default class extends React.Component {

  render() {
    return <Speech type="holyjs" icon="holyjs" {...config.speeches.holyjs}/>;
  }
}
