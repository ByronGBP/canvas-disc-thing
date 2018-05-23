class Arc {
  constructor (ctx, center, radius, angle, offSet) {
    this.ctx = ctx;
    this._configAngles();

    this.center = center;
    this.radius = radius;
    this.angle = angle || {start: this.zero, end: this.threePIHalf};
    this.offAngle = offSet || 0.1;
  }

  _configAngles () {
    this.zero = 0;
    this.pi = Math.PI;
    this.twoPI = 2 * Math.PI;
    this.halfPI = Math.PI / 2;
    this.threePIHalf = 3 * Math.PI / 2;
    this.quarterPi = Math.PI / 4;
  }

  draw () {
    this.ctx.beginPath();
    this.ctx.arc(this.center.x, this.center.y, this.radius, this.angle.start, this.angle.end);
    this.ctx.strokeStyle = 'black';
    this.ctx.stroke();
    this.ctx.closePath();
  }

  update () {
    this._updateAngle('start');
    this._updateAngle('end');
  }

  _updateAngle (angle) {
    let newAngle = this.angle[angle];
    if (newAngle < this.twoPI) {
      newAngle += this.offAngle;
    } else {
      newAngle = 0;
    }
    this.angle[angle] = newAngle;
  }
}
