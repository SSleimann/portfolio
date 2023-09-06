import * as THREE from "three";

const container = document.querySelector("#threejs-container");
const containerStyle = getComputedStyle(container,null);

let width = parseInt(containerStyle.width);
let height = parseInt(containerStyle.height)

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(241, 245, 249)");

// camera
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
camera.position.set(0, 0, 10);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// rendering the scene
container.append(renderer.domElement);

// torusKnot
const geometry = new THREE.TorusKnotGeometry(5, 0.4, 300, 16);
const pointMaterial = new THREE.PointsMaterial({
    color: "black",
    wireframe: true,
    opacity: 0.08,
    transparent: true,
    size: 0.06
})
const torusKnot = new THREE.Points(geometry, pointMaterial);
scene.add(torusKnot);

// responsiveness
window.addEventListener("resize", () => {
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.render(scene, camera);
});

window.addEventListener("mousemove", (e) => {
    let scale = 0.001
    torusKnot.rotateY( e.movementX * scale );
    torusKnot.rotateX( e.movementY * scale ); 
})

// animation
function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.001
  torusKnot.rotation.y += 0.001
  renderer.render(scene, camera);
}

animate();
