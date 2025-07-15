import { config } from '../main';
import { BaseScene } from './BaseScene';

export class Game extends BaseScene {
	constructor() {
		super('Game');
	}
	preload() {}

	create() {
		const spineBee = this.add.spine(
			this.game.config.width / 2,
			this.game.config.height / 2,
			'bee-data',
			'bee-atlas',
		);

		spineBee.animationState.setAnimation(0, 'happy', true);
	}
}
