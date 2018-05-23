class Playground {
  constructor (canvas) {
    this.canvas = canvas;
    this._init();
  }

  render () {
    this._clear();
    this._drawBackground();
    this._update();
    this._draw();
  }

  _update () {
    this.arcs.forEach((arc) => {
      arc.update();
    });
  }

  _draw () {
    this.arcs.forEach((arc) => {
      arc.draw();
    });
  }

  _clear () {
    this.canvas.clear();
  }

  _drawBackground () {
    this.canvas.drawBlackBackground();
  }

  _init () {
    this._configPlayground();
    this._configAngles();
    this._createArcs();
  }

  _configPlayground () {
    this.arcs = [];
    this.numberOfArcs = 1250;
    this.center = this._getCenter();
  }

  _configAngles () {
    this.zero = 0;
    this.pi = Math.PI;
    this.twoPI = 2 * Math.PI;
    this.halfPI = Math.PI / 2;
    this.threePIHalf = 3 * Math.PI / 2;
    this.quarterPi = Math.PI / 4;
    this.offset = this._getOffset();
  }

  _createArcs () {
    for (let i = 0; i < this.numberOfArcs; i++) {
      let radius = this._getRadius();
      let angle = this._getAngles();
      let offset = this._getOffset();
      this.arcs.push(new Arc(this.canvas.ctx, this.center, radius, angle, offset));
    }
  }

  _getRadius () {
    return this._getRandomNumberBetween(1, (this.canvas.minSize / 2));
  }

  _getCenter () {
    return {x: this.canvas.halfWidth, y: this.canvas.halfHeight};
  }

  _getAngles () {
    let start = this._getRandomNumberBetween(0, this.pi);
    const aux = this.twoPI - start;
    let end = this._getRandomNumberBetween(this.pi, aux);
    return { start, end };
  }

  _getOffset () {
    return this._getRandomNumberBetween(0, 0.2);
  }

  _getRandomNumberBetween (a, b) {
    return (Math.random() * b) + a;
  }
}
