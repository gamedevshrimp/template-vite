import { BaseScene } from './BaseScene';

export class Preloader extends BaseScene {
	constructor() {
		super('Preloader');
	}

	init() {}

	preload() {
		this.load.spineJson('bee-data', 'assets/spine/fisherman_cat.json');
		this.load.spineAtlas('bee-atlas', 'assets/spine/fisherman_cat.atlas');
	}

	create() {
		this.scene.start('Game');
	}
}
