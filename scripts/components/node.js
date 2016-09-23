var TMCOP = window.TMCOP || {};

TMCOP.Node = (function () {
  function Node({x, y, name, radius = 10, color = 'green'}) {
    this.pos = {
      x: x,
      y: y
    };
    this.name = name;
    this.color = color;
    this.radius = radius;
  }

  return Node;
} ());