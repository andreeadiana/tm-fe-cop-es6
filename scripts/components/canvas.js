var TMCOP = window.TMCOP || {};

TMCOP.Canvas = (function () {
  /*
  * param {object} canvas The canvas Dom element
  */
  function Canvas(canvas) {
    this.canvas = canvas;
    if (!canUse.call(this)) {
      this.throw('Canvas getContext not supported on this browser.');
    }

    this.ctx = this.canvas.getContext('2d');
  }

  // public methods
  Canvas.prototype.throw = function (msg) {
    console.error('Canvas error occurred: ' + msg);
  };

  Canvas.prototype.drawNode = function (node) {
    console.log(node);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.fillStyle = node.color;
    this.ctx.arc(node.pos.x, node.pos.y, node.radius, 0, Math.PI * 2, true);
    this.ctx.fill();
  };

  Canvas.prototype.drawLine = function (currentNode, targetNode) {
    // if (config.currentNode !== currentNode.index) {
    //   ctx.moveTo(currentNode.pos.X, currentNode.pos.Y);
    // }
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(currentNode.pos.x, currentNode.pos.y);//don't start from the center

    this.ctx.lineTo(targetNode.pos.x, targetNode.pos.y);

    this.ctx.lineWidth = 1;
    // set line color
    this.ctx.strokeStyle = '#000000';

    this.ctx.stroke();
  };

  Canvas.prototype.drawDistanceText = function ({text = '???', angle, positionX}) {
    context.save();
    context.translate(newx, newy);
    context.rotate(angle);
    context.textAlign = "center";
    context.fillText(text, positionX, 0);
    context.restore();
  }

  Canvas.prototype.drawLabel = function (text, {posX, posY}) {
    // this.ctx.strokeStyle = '#FF0000';
    this.ctx.strokeText(text, posX - 3, posY - 12);
  }
  // private functions
  // this is private, and we're scope calling it in constructor
  function canUse() {
    if (!this.canvas.getContext) {
      return false;
    }
    return true;
  }

  return Canvas;
} ());
