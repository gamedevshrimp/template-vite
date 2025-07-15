import { BaseScene } from './BaseScene';

export class Preloader extends BaseScene {
	constructor() {
		super('Preloader');
	}

	init() {}

	preload() {}

	create() {
		this.scene.start('Game');
	}
}
