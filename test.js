class Test {
	constructor() {
		this.camera;
		this.scene;
		this.renderer;
	}

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

		this.renderer = new THREE.WebGLRenderer({ antialias: true});
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);

		let light = new THREE.AmbientLight(0xffffff);
		this.scene.add(light);

		let mesh = new THREE.Mesh(
			new THREE.PlaneBufferGeometry(800, 800),
			new THREE.MeshBasicMaterial({color: 0x0000ff})
		);
		this.scene.add(mesh);

		let sphere = new THREE.Mesh(
			new THREE.SphereGeometry(20, 32, 32),
			new THREE.MeshBasicMaterial({color: 0xff0000})
		);
		this.scene.add(sphere);
	}

	animate() {
		const that = this;

		requestAnimationFrame(function() {
			that.animate.bind(that)();
		});

		this.renderer.render(this.scene, this.camera);
	}
}

let test = new Test();
test.init();
test.animate();
