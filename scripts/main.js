var TMCOP = TMCOP || {};

(function () {
  'use strict';
  var canvasDom = document.getElementById("canvas");
  var nodes = new TMCOP.NodeList();
  var canvas = new TMCOP.Canvas(canvasDom);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var i;
    for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateNodes(nr) {
    var i = 0;
    var node;
    for (i; i < nr; i++) {
      node = new TMCOP.Node({ x: Math.floor(Math.random() * 950 + 10), y: Math.floor(Math.random() * 520 + 10), color: getRandomColor(), name: i });
      nodes.add(node);
    }
  }

  function drawNodes() {
    nodes.list.forEach((node) => {
      canvas.drawNode(node);
      canvas.drawLabel(node.name, { posX: node.pos.x, posY: node.pos.y });
    });
  }

  function drawLines() {
    for (var i = 0; i < nodes.list.length; i++) {
      for (var j = 0; j < nodes.list.length; j++) {
        if (i === j) continue;
        canvas.drawLine(nodes.list[i], nodes.list[j]);
        nodes.addDistance(i, j, getDistance(nodes.list[i], nodes.list[j]));
      }
    }
    console.log(nodes)
  }

  function getDistance(nodeA, nodeB) {
    //pitagora
    return Math.sqrt((nodeA.pos.x - nodeB.pos.x) * (nodeA.pos.x - nodeB.pos.x) + (nodeA.pos.y - nodeB.pos.y) * (nodeA.pos.y - nodeB.pos.y));
  }

  function init() {
    var graph;

    generateNodes(8);
    drawLines();
    drawNodes();
    graph = new TMCOP.Dijkstra(nodes.graphMap);

    console.log(graph.findShortestPath('0', '4'));

    // bindEvents();
  }

  function bindEvents() { }

  init();
} ());
