import Plate from '@core/views/plate'
import Triangles from './triangles'
import Down from './down'

export default class extends React.Component {

  render() {
    return <div className="scene scene-main">
      <Triangles {...this.props.triangles}/>
      <Down {...this.props.down}/>
      <Plate fixed={this.props.fixed} {...this.props.plate}/>
    </div>;
  }
};
