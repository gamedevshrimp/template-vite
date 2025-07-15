import { Scene } from 'phaser';

export class BaseScene extends Scene {
	constructor(...config) {
		super(...config);

		const originalInit = this.init?.bind(this);
		this.init = (...args) => {
			this.scale.on('resize', this.callbackResize, this);

			this.events.once('shutdown', () => {
				this.scale.off('resize', this.callbackResize, this);
			});

			originalInit?.(...args);
		};

		const originalCreate = this.create?.bind(this);
		this.create = (...args) => {
			this.setCameraCenter();

			originalCreate?.();

			this.children.list.forEach((child) => {
				child.resize?.();
			});

			this.resize?.();
		};

		const originalUpdate = this.update?.bind(this);
		this.update = (time, deltaTime) => {
			this.children.list.forEach((child) => {
				child.update?.(time, deltaTime);
			});

			originalUpdate?.();
		};
	}
	callbackResize() {
		this.setCameraCenter();
		this.children.list.forEach((child) => {
			child.resize?.();
		});

		this.resize?.();
	}

	updateBounds() {
		this.width = this.scale.gameSize.width;
		this.height = this.scale.gameSize.height;
		this.left = this.cameras.main.scrollX;
		this.top = this.cameras.main.scrollY;
		this.right = this.cameras.main.scrollX + this.width;
		this.bottom = this.cameras.main.scrollY + this.height;
	}

	setCameraCenter() {
		if (this.cameras.main) {
			this.cameras.main.scrollX = -this.scale.gameSize.width / 2 + this.game.config.width / 2;
			this.cameras.main.scrollY = -this.scale.gameSize.height / 2 + this.game.config.height / 2;
			this.updateBounds();
		}
	}
}
