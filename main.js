window.onload = function(){
let vexflow = require('vexflow');
vexflow = vexflow.Flow

const div = document.getElementById('container');
const renderer = new vexflow.Renderer(div, vexflow.Renderer.Backends.SVG);
renderer.resize(500, 200);

const context = renderer.getContext();
const stave = new vexflow.Stave(10, 40, 400);

stave.setContext(context).draw();
};