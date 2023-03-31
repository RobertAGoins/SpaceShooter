
import { Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder, Mesh} from "babylonjs";

let canvas = document.getElementById('renderCanvas') as HTMLCanvasElement ;
let engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

let createScene = () =>  {
  let scene = new Scene(engine);
let camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
camera.setTarget(Vector3.Zero());
camera.attachControl(canvas, false);
let light = new HemisphericLight('light1', new Vector3(0,1,0), scene);
let sphere = MeshBuilder.CreateSphere('sphere1', { segments: 16, diameter: 2, sideOrientation: Mesh.FRONTSIDE}, scene);
let ground = MeshBuilder.CreateGround("ground1", { width: 6, height: 6, subdivisions: 2, updatable: false }, scene);

return scene;
}

let scene = createScene();

engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener('resize', () => {
  engine.resize();
})
