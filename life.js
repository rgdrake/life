class Cell {
	constructor(x, z) {
		this.x = x;
		this.z = z;
		this.geometry = new THREE.SphereGeometry(2, 32, 32);
		this.material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		this.mesh = new THREE.Mesh(geometry, material);
	}
}

class Life {
	constructor() {
		this.cell = new Cell(1, 1);
	}
}