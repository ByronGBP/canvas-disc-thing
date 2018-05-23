class Canvas {
  constructor () {
    this.init();
  }

  init () {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this._setupSizes();
    document.body.appendChild(this.canvas);
  }

  clear () {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  drawBlackBackground () {
    this.ctx.fillStyle = 'white';
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.fill();
  }

  _setupSizes () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.halfWidth = this.width / 2;
    this.halfHeight = this.height / 2;
    this.maxSize = Math.max(this.width, this.height);
    this.minSize = Math.min(this.width, this.height);
    this.whoIsTheMaxSize = this.width > this.height ? 'width' : 'height';
    this.ctx.canvas.width = window.innerWidth;
    this.ctx.canvas.height = window.innerHeight;
  }
}
