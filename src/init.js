export default (plus) => {
	document.getElementById('share').addEventListener('click', () => {
		plus.share.sendWithSystem({
			content: `wangjin's first app`,
			href: 'http://www.baidu.com'
		});
	});
	document.getElementById('camera').addEventListener('click', () => {
		const camera = plus.camera.getCamera(2);
		const resolution = camera.supportedImageResolutions[0];
		const format = camera.supportedImageFormats[0];
		camera.captureImage((path) => {
			console.log(path);
		}, (err) => {
			console.log(err);
		}, {
			resolution,
			format,
		});
	});
	document.getElementById('toast').addEventListener('click', () => {
		plus.nativeUI.toast('haha 这是一个toast信息');
	});
	document.getElementById('pay').addEventListener('click', () => {
		plus.payment.getChannels((channels) => {
			console.log(channels);
		}, (err) => {
			console.log(err);
		});
	});
	document.getElementById('fullscreen').addEventListener('click', () => {
		plus.navigator.setFullscreen(!plus.navigator.isFullscreen());
	});
};
