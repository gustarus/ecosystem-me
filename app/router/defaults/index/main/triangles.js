export default class extends React.Component {

  constructor(options) {
    super(options);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.width !== nextState.width || this.state.height !== nextState.height;
  }

  render() {
    let matrix = this.props.matrix;

    // define layout size
    let width = window.innerWidth;
    let height = window.innerHeight;

    // define triangle options
    let triangleWidth = this.props.item.width;
    let triangleHeight = this.props.item.height;
    let triangleOffset = this.props.item.offset;
    let triangleOffsetHalf = triangleOffset / 2;

    // define mash options
    let mashMax = this.props.mash.max;
    let mashOffset = this.props.mash.offset;

    let triangleHeightOuter = triangleHeight + triangleOffsetHalf;
    let triangleWidthOuter = triangleWidth + triangleOffset;

    // calculate triangles count
    let countVertical = matrix.length;
    let countHorizontal = matrix[0].length;
    let countK = countVertical / countHorizontal;

    // check if too large for two corners
    let isTwoCorners = width > triangleWidthOuter * countHorizontal && height > triangleHeightOuter * countVertical;

    // create triangles collection
    let triangles = [];
    matrix.forEach((row, y)=> {
      y = parseInt(y);
      row.forEach((item, x) => {
        x = parseInt(x);

        // check triangle direction
        let isUp = (y % 2 === 0 && x % 2 === 0) || (y % 2 !== 0 && x % 2 !== 0);

        // define triangle style
        let style = {};

        // get border property
        let borderProperty = isUp ? 'borderBottom' : 'borderTop';

        // set triangle size
        style.borderLeftWidth = triangleWidth / 2 + 'px';
        style.borderRightWidth = triangleWidth / 2 + 'px';
        style[borderProperty + 'Width'] = triangleHeight + 'px';

        // set triangle color
        let color = matrix[y][x];
        style[borderProperty + 'Color'] = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

        // calculate triangle position
        let py = triangleHeightOuter * y;
        let px = triangleWidthOuter * x / 2 - triangleWidth / 2;

        // apply offset for the triangle if needed
        let yOffset = _.random(0, mashMax) - mashOffset;
        let yThreshold = countVertical - x * countK;
        let isRightCorner = y + yOffset > yThreshold;
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
          let className = 'scene-main__triangle' + (isRightCorner ? ' scene-main__triangle_swapped' : '');
          let triangle = <div key={y + '-' + x} className={className} style={style}></div>;
          triangles.push(triangle);
        }
      });
    });

    // define container style
    let offset = {
      top: triangleOffsetHalf + 'px',
      right: triangleOffsetHalf + 'px',
      bottom: triangleOffsetHalf + 'px',
      left: triangleOffsetHalf + 'px'
    };

    return (<div className="scene-main__triangles" style={offset}>{triangles}</div>);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    this.delegateAnimation();
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
        let i = _.random(0, this.triangles.length);
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
    delete this.interval
  }

  onWindowResize() {
    this.setState({
      width: this.el.clientWidth,
      height: this.el.clientHeight
    });
  }
}
