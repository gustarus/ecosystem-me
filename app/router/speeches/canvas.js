import config from '@core/config'
import Speech from '@core/views/speech'

export default class extends React.Component {

  render() {
    return <Speech type="canvas" icon="canvas" {...config.speeches.canvas}/>;
  }
}
