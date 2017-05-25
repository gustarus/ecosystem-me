export default class extends React.Component {

  constructor(options) {
    super(options);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    this.delegateAnimation();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height;
  }

  componentWillUpdate() {
    this.undelegateAnimation();
  }

  componentDidUpdate() {
    this.delegateAnimation();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    this.undelegateAnimation();
  }

  delegateAnimation() {
    this.el = ReactDOM.findDOMNode(this);
    this.triangles = this.el.querySelectorAll('.scene-main__triangle');

    if (!_.isMobile()) {
      // delegate triangles click event
      this.el.addEventListener('click', event => {
        if (event.target && (' ' + event.target.className + ' ').indexOf(' scene-main__triangle ') >= 0) {
          this.animateTriangle(event.target);
        }
      }, false);

      // initialize interval animation
      this.interval = setInterval(() => {
        const i = _.random(0, this.triangles.length);
        this.animateTriangle(this.triangles[i]);
      }, this.props.animation.showFor);
    }

    this.state = {
      width: this.el.clientWidth,
      height: this.el.clientHeight
    };
  }

  animateTriangle(triangle) {
    if (triangle) {
      triangle.className += ' scene-main__triangle_hidden';
      setTimeout(() => {
        if (triangle) {
          triangle.className = triangle.className.replace(' scene-main__triangle_hidden', '');
        }
      }, this.props.animation.showFor);
    }
  }

  undelegateAnimation() {
    delete this.el;
    delete this.triangles;

    clearInterval(this.interval);
    delete this.interval;
  }

  onWindowResize() {
    this.setState({
      width: this.el.clientWidth,
      height: this.el.clientHeight
    });
  }

  render() {
    let matrix = this.props.matrix;

    // define layout size
    const width = document.body.clientWidth;
    const height = window.innerHeight;

    // define triangle options
    const triangleWidth = this.props.item.width;
    const triangleHeight = this.props.item.height;
    const triangleOffset = this.props.item.offset;
    const triangleOffsetHalf = triangleOffset / 2;

    // define mash options
    const mashMax = this.props.mash.max;
    const mashOffset = this.props.mash.offset;

    const triangleHeightOuter = triangleHeight + triangleOffsetHalf;
    const triangleWidthOuter = triangleWidth + triangleOffset;

    // calculate triangles count
    const countVertical = matrix.length;
    const countHorizontal = matrix[0].length;
    const countK = countVertical / countHorizontal;

    // check if too large for two corners
    const isTwoCorners = width > triangleWidthOuter * countHorizontal && height > triangleHeightOuter * countVertical;

    // create triangles collection
    let triangles = [];
    matrix.forEach((row, yRaw)=> {
      const y = parseInt(yRaw, 10);
      row.forEach((item, xRaw) => {
        const x = parseInt(xRaw, 10);

        // check triangle direction
        const isUp = (y % 2 === 0 && x % 2 === 0) || (y % 2 !== 0 && x % 2 !== 0);

        // define triangle style
        let style = {};

        // get border property
        const borderProperty = isUp ? 'borderBottom' : 'borderTop';

        // set triangle size
        style.borderLeftWidth = triangleWidth / 2 + 'px';
        style.borderRightWidth = triangleWidth / 2 + 'px';
        style[borderProperty + 'Width'] = triangleHeight + 'px';

        // set triangle color
        const color = matrix[y][x];
        style[borderProperty + 'Color'] = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

        // calculate triangle position
        let py = triangleHeightOuter * y;
        let px = triangleWidthOuter * x / 2 - triangleWidth / 2;

        // apply offset for the triangle if needed
        const yOffset = _.random(0, mashMax) - mashOffset;
        const yThreshold = countVertical - x * countK;
        const isRightCorner = y + yOffset > yThreshold;
        if (isRightCorner) {
          // layout height - triangles offset + y coordinate
          py = height - countVertical * triangleHeightOuter - triangleOffsetHalf + py;

          // layout width - triangles offset + x coordinate
          px = width - countHorizontal * triangleWidthOuter / 2 + triangleWidth + px;
        }

        // draw only if allowed
        if (!isRightCorner || isTwoCorners) {
          // set triangle position
          style.position = 'absolute';
          style.top = py + 'px';
          style.left = px + 'px';

          // create triangle object
          const className = 'scene-main__triangle' + (isRightCorner ? ' scene-main__triangle_swapped' : '');
          const triangle = <div key={y + '-' + x} className={className} style={style}/>;
          triangles.push(triangle);
        }
      });
    });

    // define container style
    const offset = {
      top: triangleOffsetHalf + 'px',
      right: triangleOffsetHalf + 'px',
      bottom: triangleOffsetHalf + 'px',
      left: triangleOffsetHalf + 'px'
    };

    return (<div className='scene-main__triangles' style={offset}>{triangles}</div>);
  }
}
