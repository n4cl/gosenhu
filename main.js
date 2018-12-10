window.onload = function(){
let vexflow = require('vexflow');
vexflow = vexflow.Flow

const treble = document.getElementById('treble');
const base = document.getElementById('base');

const trebleRenderer = new vexflow.Renderer(treble, vexflow.Renderer.Backends.SVG);
const baseRenderer = new vexflow.Renderer(base, vexflow.Renderer.Backends.SVG);

trebleRenderer.resize(500, 150);
baseRenderer.resize(500, 150);

const trebleContext = trebleRenderer.getContext();
const baseContext = baseRenderer.getContext();

const trebleStave = new vexflow.Stave(10, 40, 400);
const baseStave = new vexflow.Stave(10, 40, 400);

trebleStave.addClef("treble").addTimeSignature("4/4");
trebleStave.setContext(trebleContext).draw();

baseStave.addClef("bass").addTimeSignature("4/4");
baseStave.setContext(baseContext).draw();
};