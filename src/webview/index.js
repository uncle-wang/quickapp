// 已打开的webview，最多同时打开3个
let opened = [];
// 判断是否已打开
const isOpened = url => {
	for (let i = 0; i < opened.length; i ++) {
		const webviewInfo = opened[i];
		if (webviewInfo.url === url) {
			return webviewInfo.webview;
		}
	}
	return false;
};
// 缓存webview
const cacheWebview = (url, webview) => {
	if (opened.length >= 3) {
		opened.splice(0, 1);
	}
	opened.push({url, webview});
};
// 打开一个webview窗口
const open = (url) => {
	let wb;
	const cachedWebview = isOpened(url);
	if (openedWebview) {
		cachedWebview.show();
	}
	else {
		wb = plus.webview.create(url);
		wb.addEventListener('loading', () => {
			plus.nativeUI.showWaiting();
		});
		wb.addEventListener('loaded', () => {
			plus.nativeUI.closeWaiting();
			wb.show();
			cacheWebview(url, wb);
		});
		wb.addEventListener('error', () => {
			plus.nativeUI.closeWaiting();
			plus.nativeUI.toast('加载失败，请检查您的网络');
		});
	}
};
export default {open};
