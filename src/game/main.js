import { BaseScene } from './scenes/BaseScene';
import { Game as MainGame } from './scenes/Game';
import { Preloader } from './scenes/Preloader';
import { AUTO, Game } from 'phaser';

import { SpinePlugin } from '@esotericsoftware/spine-phaser';

export const config = {
	type: Phaser.WEBGL,
	width: 1024,
	height: 768,
	fps: {
		target: 60,
		forceSetTimeOut: true,
	},
	parent: 'game-container',
	backgroundColor: '#028af8',
	disableContextMenu: true,
	scale: {
		mode: Phaser.Scale.EXPAND,
	},
	scene: [Preloader, MainGame, BaseScene],
	resolution: 1,
	plugins: {
		scene: [
			{
				key: 'spine.SpinePlugin',
				plugin: spine.SpinePlugin,
				mapping: 'spine',
			},
		],
	},
};

const StartGame = (parent) => {
	return new Game({ ...config, parent });
};

export default StartGame;
