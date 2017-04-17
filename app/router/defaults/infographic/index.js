import Scene from '@core/views/scene'
import Indicator from '@core/views/indicator'
import Section from '@core/views/section'
import Return from '@core/views/return'
import Svg from '@core/views/svg'
import config from '@core/config'

export default class extends React.Component {

  constructor(options) {
    super(options);
    this.state = {src: null, zoom: false, x: null, y: null};
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onPictureClick = this.onPictureClick.bind(this);
  }

  componentDidMount() {
    const {src} = config.infographic;
    this.preloadImage(src).then(() => {
      this.setState({src});
    });
  }

  preloadImage(src) {
    return new Promise(resolve => {
      let img = new Image();
      img.onload = function() {
        resolve(src);
      };

      img.src = src;
    });
  }

  render() {
    const isInteractive = !_.isMobile();

    return (
      <Section>
        <Return position="relative"/>

        <Scene ref={ref => this.scene = ref}
               data-zoom={this.state.zoom}
               type="infographic"
               onMouseMove={isInteractive && this.onMouseMove}
               onClick={isInteractive && this.onPictureClick}>
          {this.renderPicture()}
        </Scene>
      </Section>
    );
  }

  renderPicture() {
    const {src, zoom, x, y} = this.state;
    const scale = zoom ? 2 : 1;
    const style = {transform: `scale(${scale})`, marginLeft: x, marginTop: y};

    if (!this.state.src) {
      return <Indicator/>;
    }

    return (
      <img ref={ref => this.picture = ref}
           className="scene-infographic__picture"
           style={style}
           src={src}/>
    );
  }

  calculatePictureOffset(cursorX, cursorY) {
    const content = this.scene.content;
    const picture = this.picture;

    const centerX = content.clientWidth / 2;
    const centerY = content.clientHeight / 2;

    const x = centerX - cursorX;
    const y = centerY - cursorY;

    return {x, y};
  }

  setPictureOffset(left, top) {
    const picture = this.picture;
    picture.style.marginLeft = left ? `${left}px` : 0;
    picture.style.marginTop = top ? `${top}px` : top;
  }

  onMouseMove(e) {
    if (!this.state.zoom) {
      return;
    }

    const {x, y} = this.calculatePictureOffset(e.clientX, e.clientY);
    this.setPictureOffset(x, y);
  }

  onPictureClick(e) {
    if (!this.state.zoom) {
      window.scrollTo(0, 50);
      const {x, y} = this.calculatePictureOffset(e.clientX, e.clientY);
      this.setState({zoom: true, x, y});
    } else {
      this.setState({zoom: false, x: null, y: null});
    }
  }
}
