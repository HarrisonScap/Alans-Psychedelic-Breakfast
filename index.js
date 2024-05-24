import * as THREE from 'three';
import {GLTFLoader} from 'GLTFLoad';
import {OrbitControls} from 'Orbit';
//import {EffectComposer} from 'postprocessing'

//import {OBJLoader} from 'OBJLoad';
//import {MTLLoader} from 'MTLLoad';

/* This code was derived from the three.js fundamentals/camera guide
*/




function main() {

	const canvas = document.querySelector( '#c' );
	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );

	const fov = 45;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 200;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.z = 4;

	const controls = new OrbitControls( camera, canvas );
	controls.target.set( 0, 5, 0 );
	controls.update();

    const scene = new THREE.Scene();

	{

		let color2 = 0xfcd49f;
		const intensity2 = 1;
		const light2 = new THREE.AmbientLight(color2, intensity2);
		scene.add(light2);

	}
    

    // instantiate a loader
    const gltfLoader = new GLTFLoader();
    const texLoader = new THREE.TextureLoader();
    const cubeLoader = new THREE.CubeTextureLoader();

	// Load background texture

	//const bgTexture = texLoader.load('./skybox.png');
	//bgTexture.colorSpace = THREE.SRGBColorSpace;
	//scene.background = bgTexture;

	// Load the entire scene //

	const asset_folder = './assets/assets_prepped/';
	gltfLoader.setPath(asset_folder);

	gltfLoader.load(("./1.gltf"), function(gltf){
		const gltfscene = gltf.scene;
		document.addEventListener('keydown', function(event) {
			if (event.key === 'e') {
				gltf.scene.visible = !gltf.scene.visible;
				console.log(music.currentTime)
			}
		});
		
		scene.add(gltfscene);
	});
	gltfLoader.load(("./2.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./3.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./4.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./5.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./6.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./7.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./8.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./9.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./10.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./11.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./12.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./13.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./14.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./15.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./16.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./17.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./18.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./19.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./20.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	gltfLoader.load(("./alan_cook.gltf"), (gltf) => {
		let gltfscene = gltf.scene;
		scene.add(gltfscene);
	});
	
	// ------------------------------ // 

	// Pink Floyd - Alans Psychedelic Breakfast//
	// ALL RIGHTS RESERVED © //
	/*
			/\
      -----/< \======
		  /____\

	*/
	
	var music = new Audio();
	music.src = "./assets/alans_psychedelic_breakfast.mp3"

	// This is pain-staking and possibly not the best way to do this //

	const m_water = [0.36,0.97,1.50,2.40,2.50,3.50,4.30,5.42,6.17,6.96]

	document.getElementById('playbutton').addEventListener('click',function(){
		music.play()
		document.getElementById('playbutton').style.display = "none";
	});


	function render( time ) {

		time *= 0.001; // convert time to seconds

        renderer.setSize(window.innerWidth,window.innerHeight)
		renderer.render( scene, camera );

		requestAnimationFrame( render );

	}

	requestAnimationFrame( render );

}

main();