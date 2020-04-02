const THREE = require('./lib/three.js');

class Dot {
	constructor() {
		this.size = 20;
		this.width = 32;
		this.height = 32;
	}

	create() {
		return new THREE.Mesh(
			new THREE.SphereGeometry(this.size, this.width, this.height),
			new THREE.MeshBasicMaterial({ color: 0xff0000 })
		);
	}
}

class Life {
	constructor() {
		this.camera;
		this.scene;
		this.renderer;
	}

	addSphere() {
		let dot = new Dot();
		return dot.create();
	}
	/*
	createGrid(x, y) {
		let size = {
			_x: x,
			_y: y
		};

		let start = {
			_x: -(size.x / 2),
			_y: +(size.y / 2)
		};

		let lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });	//line material
		let lineGroup = new THREE.Group();	//Line group
		let lineGeometry = new THREE.Geometry();

		let container = new THREE.Container();

		for (let i = start._x)


	}
	*/
	init() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0xa0a0a0);

		this.camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			1, 2000
		);
		this.camera.position.set(0, 2, 1000);	//TODO: Tweak this!
		this.camera.lookAt(this.scene.position);

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);

		let light = new THREE.AmbientLight(0xffffff);
		this.scene.add(light);

		let mesh = new THREE.Mesh(
			new THREE.PlaneBufferGeometry(800, 800),
			new THREE.MeshBasicMaterial({ color: 0x0000ff })
		);
		this.scene.add(mesh);

		//this.scene.add(this.createGrid(800, 800));

		this.scene.add(this.addSphere());
	}

	animate() {
		const that = this;

		requestAnimationFrame(function () {
			that.animate.bind(that)();
		});

		this.renderer.render(this.scene, this.camera);
	}
}

let life = new Life();
life.init();
life.animate();
