var TMCOP = window.TMCOP || {};

TMCOP.NodeList = (function () {
  function NodeList() {
    this.list = [];
    this.graphMap = {};
  }

  NodeList.prototype.add = function (node) {
    if (!node) {
      return;
    }
    this.list.push(node);
  };

  NodeList.prototype.addDistance = function (index, target, distance) {
    if(!this.graphMap[index]) this.graphMap[index] = {};
    this.graphMap[index][target] = distance;
  };

  return NodeList;
} ());