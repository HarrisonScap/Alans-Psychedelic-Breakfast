import * as THREE from 'three';
import {GLTFLoader} from 'GLTFLoad';
import {OrbitControls} from 'Orbit';
//import {EffectComposer} from 'postprocessing'
//import {OBJLoader} from 'OBJLoad';
//import {MTLLoader} from 'MTLLoad';

/* This code was partially derived from the various three.js guides
*/

function main() {

	const canvas = document.querySelector( '#c' );
	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );

	// Importing GLTF Assets //

    // instantiate a GLTF loader
    const gltfLoader = new GLTFLoader();

	const asset_folder = './assets/assets_prepped/';
	gltfLoader.setPath(asset_folder);

	function loadStaticAssets(start){

		gltfLoader.load(("./1.gltf"), function(gltf){
			const gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./2.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./3.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./4.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./5.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./6.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./7.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./8.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./9.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./10.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./11.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./12.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./13.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./14.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./15.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./16.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./17.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./18.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./19.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./20.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./breakfast.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
		gltfLoader.load(("./blinds.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(start){
				gltfscene.visible = true;
			}else{
				gltfscene.visible = false;
			}
			scene.add(gltfscene);
		});
	};

	// Helper functions //

	// Converts Milliseconds to Seconds and rounds to third decimal.
	function secToMil(time){
		if(typeof time === "number"){
			time = (time/1000).toFixed(1);
			return time;
		}else{
			for(var i=0;i<time.length;i++){
				time[i] = (time[i]/1000).toFixed(1);
			}
			return time;
		}
	}

	// Adds an offset to an array of numbers
	function addOffset(array,offset){
		for(var i; i<array.length;i++){
			array[i] = array[i] + offset;
		}
	}


	// Camera //

	const fov = 30;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 500;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.x = 2;
	camera.position.y = 5.7+1000;
	camera.position.z = -3;
	camera.rotation.set(0,2.5,1);
	//camera.rotation.y = 2.5;
	//camera.rotation.z = 1;


	//const controls = new OrbitControls( camera, canvas );
	//controls.target.set( 0, 5, 0 );
	//controls.update();

	// Scene Controller //


	let ambientColor = 0xfcd49f; // Ambient Color
	const intensity = 1;
	const ambientLight = new THREE.AmbientLight(ambientColor, .01);
	const pointLight1 = new THREE.PointLight(0xeea700,1)
	const pointLight2 = new THREE.PointLight(0xffd49f,0)
	pointLight1.position.y = 6;
	//pointLight1.position.x = .1
	pointLight2.position.set(.7,6+1000,0);
    const scene = new THREE.Scene();
	{
		scene.add(ambientLight);
		//scene.add(pointLight1);
		scene.add(pointLight2);
		
	}

	// Audio Stuff //

	// Pink Floyd - Alans Psychedelic Breakfast//
	// ALL RIGHTS RESERVED © //
	/*
	*		/\
    * -----/< \======
	*	  /____\
	*
	*/
	
	var music = new Audio();
	music.src = "./assets/alans_psychedelic_breakfast_croppedver.mp3"

	document.addEventListener('keydown', function(event) {
		if (event.key === 'e') {
			console.log(music.currentTime)
		}
	});

	loadStaticAssets(true);
	scene1_Match(1);

	let startTime;
	// Start music after button element is pressed.
	document.getElementById('playbutton').addEventListener('click',function(){
		startTime = Date.now();
		music.play();
		scene1_Match(2);
		/* TEMPORARY */
		//music.currentTime = 25;
		//loadStaticAssets(true);
		//scene2_Kitchen();


		document.getElementById('playbutton').style.display = "none";
	});

	//--------------------------------------//

	// (A) - RISE_AND_SHINE //
	/*
	* MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. 
	* MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. 
	* MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. MARMALADE, I LIKE MARMALADE. 
	*/

	var sceneTracker = 1;

	// Scene I: Intro //

	var init = false;
	var animTarget = 0;
	var offset = 1000;

	const panLight = new THREE.PointLight(0x00b500,3);
	panLight.position.set(0,9+offset,3)
	scene.add(panLight);

	const coffeeLight = new THREE.PointLight(0xed0000,3);
	coffeeLight.position.set(3,5+offset,-2)
	scene.add(coffeeLight);

	const ashLight = new THREE.PointLight(0xe0ce00,2);
	ashLight.position.set(0,5.5+offset,-4.1)
	scene.add(ashLight);

	const bottleLight = new THREE.PointLight(0x060075,3);
	bottleLight.position.set(3.7,2.8+offset,-3)
	scene.add(bottleLight);

	// Intro match sequence.

	function scene1_Match(start){

		console.log(start);

		var time_match = [7.4,13.4,18.7,21.1,23.3,24.7,100]
		
		gltfLoader.load(("./matchbox.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			gltfscene.position.set(0,5+1000,0)
			if(start > 0){
				gltfscene.visible = true;
				scene.add(gltfscene);
			}else{
				gltfscene.visible = false;
				scene.remove(gltfscene);
			}
			scene.add(gltfscene);
		});

		gltfLoader.load(("./pan_with_breakfast.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			gltfscene.position.set(-2,8+offset,3)
			gltfscene.rotation.set(5,6,-1);
			if(start > 0){
				gltfscene.visible = true;
				scene.add(gltfscene);
			}else{
				scene.remove(gltfscene);
			}
			scene.add(gltfscene);
		});

		gltfLoader.load(("./coffee_machine_intro.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			gltfscene.position.set(3,5+offset,0)
			gltfscene.rotation.set(6,-5,-2.5);
			if(start > 0){
				gltfscene.visible = true;
				scene.add(gltfscene);
			}else{
				scene.remove(gltfscene);
			}
			scene.add(gltfscene);
		});

		gltfLoader.load(("./ashtray_intro.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			gltfscene.position.set(0,5+offset,-4)
			gltfscene.rotation.set(-13,0,0);
			if(start > 0){
				gltfscene.visible = true;
				scene.add(gltfscene);
			}else{
				scene.remove(gltfscene);
			}
			scene.add(gltfscene);
		});

		gltfLoader.load(("./bottle.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			gltfscene.position.set(3.5,2.8+offset,-5)
			if(start > 0){
				gltfscene.visible = true;
				scene.add(gltfscene);
			}else{
				scene.remove(gltfscene);
			}
			scene.add(gltfscene);
		});

		gltfLoader.load(("./stove_intro.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			gltfscene.position.set(5.2,-.5+offset,0)
			gltfscene.rotation.set(0,2,0);
			if(start > 0){
				gltfscene.visible = true;
				scene.add(gltfscene);
			}else{
				scene.remove(gltfscene);
			}
			scene.add(gltfscene);
		});

		gltfLoader.load(("./fridge_intro.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			gltfscene.position.set(-2,9+offset,-5)
			gltfscene.rotation.set(0,0,-1);
			if(start > 0){
				gltfscene.visible = true;
				scene.add(gltfscene);
			}else{
				scene.remove(gltfscene);
			}
			scene.add(gltfscene);
		});


		gltfLoader.load(("./match_anim.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			gltfscene.position.set(0,5+offset,0)
			if(start == 2){
				gltfscene.visible = true;
				scene.add(gltfscene);
			}else{
				console.log(start);
				gltfscene.visible = false;
				scene.add(gltfscene);
			}
			
			if(start == 2){

				const animation = gltf.animations[0];              // Get the first (only) animation
				const mixer = new THREE.AnimationMixer(gltfscene); // Instantiate a mixer
				const action = mixer.clipAction(animation);        // Assign the action
				action.timeScale = 2.5;
				action.loop = THREE.LoopOnce;
				var elapsedTime;
				
				var intervalID = setInterval(function(){
					
					const currentTime = Date.now();
					elapsedTime = secToMil(currentTime - startTime);
					console.log(elapsedTime);

					const moveCamera = new THREE.Vector3(0,0,.05);
					moveCamera.applyQuaternion(camera.quaternion);
					

					if(!init){
						init = true;
						action.play();
						setTimeout(function(){pointLight2.intensity = 2;},1000);
						
					}else if(time_match[animTarget] <= elapsedTime && time_match[animTarget+1] > elapsedTime){
						console.log();
						if(animTarget != time_match.length-1) animTarget += 1;
						mixer.stopAllAction();
						mixer.setTime(0)
						mixer.update(0);
						ambientLight.intensity = .01;
						action.play();
						//setTimeout(function(){pointLight2.intensity = 0; ambientLight.intensity = 0;},1000);
					}

					if(elapsedTime > 25 && sceneTracker == 1){
						sceneTracker += 1;
						clearInterval(intervalID);
						console.log("Loading Kitchen...")
						loadStaticAssets(true);
						scene2_Kitchen();
					}

					camera.position.add(moveCamera)

				},100);

				const animClock = new THREE.Clock();
				
				function animate(){

					mixer.update(animClock.getDelta());

				}
				
				renderer.setAnimationLoop(animate); // Start animation loop
			};
		});

	};


	// Scene II: Kitchen //

	var init2 = false;
	// Camera Positions for the start:
	const sc2_cam1_pos = [3.6,4.1,-7]
	const sc2_cam1_rot = [0,3.14159,0] 

	const sc2_cam2_pos = [-1,6,-2.1]
	const sc2_cam2_rot = [-.7,0,0] 

	const sc2_cam3_pos = [5.8,3.5,4.2]
	const sc2_cam3_rot = [0,-4.71239,0] 

	const sc2_cam4_pos = [3.6,1,-4]
	const sc2_cam4_rot = [0,-.15,0] 

	const sc2_cam5_pos = [-3,4,-8]
	const sc2_cam5_rot = [0,3.14159,0] 

	var sc2_camera_pos_array = [sc2_cam1_pos,sc2_cam2_pos,sc2_cam3_pos,sc2_cam4_pos,sc2_cam5_pos]
	var sc2_camera_rot_array = [sc2_cam1_rot,sc2_cam2_rot,sc2_cam3_rot,sc2_cam4_rot,sc2_cam5_rot]

	var sc2_camera_num = 1;

	function scene2_Kitchen() {
		
		var start = false;
		var end = false;

		var target_time = [40,59];

		const gltfModels = {}; // Object to store loaded GLTF models
		
		const loadGLTF = (url) => {
			return new Promise((resolve, reject) => {
				gltfLoader.load(url, (gltf) => {
					const gltfscene = gltf.scene;
					resolve(gltfscene);
				}, undefined, reject);
			});
		};
	
		const loadAndAddScene = async (url, targetPose,visible) => {
			const gltfscene = await loadGLTF(url);
			gltfscene.visible = visible; // Initially hide the scene
			scene.add(gltfscene);
			gltfModels[targetPose] = gltfscene; // Store the GLTF scene in the object
		};

		if(!init2){
			console.log("Kitchen Loaded...")
			camera.position.set(...sc2_cam1_pos);
			camera.rotation.set(...sc2_cam1_rot);
			ambientLight.intensity = 1;
			init2 = true;

		};

		let pose = 0; // Initialize pose
	
		// Load ceiling
		gltfLoader.load(("./ceiling.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			gltfscene.visible = true;
			scene.add(gltfscene);
		});

		loadAndAddScene("./alan_cook.gltf", 0,true);

		var intervalID = setInterval(function(){
			camera.position.set(...sc2_camera_pos_array[sc2_camera_num]);
			camera.rotation.set(...sc2_camera_rot_array[sc2_camera_num]);
			sc2_camera_num += 1;
		},5000);


		// I did have help from ChatGPT here, I was trying to use the function that I wrote (at the bottom of code) but it for some odd reason didn't function
		// properly -- some random Promise and async bullshit
		function alanTimelapse(start){
		
			// Load GLTF scenes
			loadAndAddScene("./alan_sink.gltf", 1,false);
			loadAndAddScene("./alan_chair.gltf", 2,false);
			loadAndAddScene("./alan_cabinet.gltf", 3,false);
		
			// Function to update visibility based on pose
			const updateVisibility = () => {
				for (const key in gltfModels) {
					if (gltfModels.hasOwnProperty(key)) {
						const gltfscene = gltfModels[key];
						gltfscene.visible = parseInt(key) === pose;
					}
				}
				pose = (pose + 1) % 4; // Increment pose (looping from 0 to 3)
			};
		
			// Update visibility every 1000 milliseconds (1 second)
			const intervalId = setInterval(updateVisibility, 750);
		}
	}

	function render( time ) {

		time *= 0.001; // convert time to seconds

		renderer.setSize(window.innerWidth,window.innerHeight)
		renderer.render( scene, camera );

		requestAnimationFrame( render );

	}

	requestAnimationFrame( render );
}


main();


// Not working code graveyard
/*    __________
*	 /          \
*	|  0      0  |
*	|\   o-o    /|
*	\_|        |_/
*     |_|_|_|_|
*/      

	/*
	function alanKitchen(){

		pose += 1;

		gltfLoader.load(("./alan_cook.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(pose == 0){
				gltfscene.visible = !gltfscene.visible;
				scene.add(gltfscene);
			}
			scene.add(gltfscene);
		});

		gltfLoader.load(("./alan_sink.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(pose == 1){
				gltfscene.visible = !gltfscene.visible;
			}
			scene.add(gltfscene);
		});

		gltfLoader.load(("./alan_chair.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(pose == 2){
				gltfscene.visible = !gltfscene.visible;
			}
			scene.add(gltfscene);
		});

		gltfLoader.load(("./alan_cabinet.gltf"), (gltf) => {
			let gltfscene = gltf.scene;
			if(pose === 3){
				gltfscene.visible = !gltfscene.visible;
			}
			scene.add(gltfscene);
		});

		if(pose > 3){
			pose = 0;
		}
	}*/