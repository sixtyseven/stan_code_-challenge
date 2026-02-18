import '@testing-library/jest-dom';

// jsdom doesn't implement element scrolling helpers — provide a lightweight polyfill
// so code that calls `element.scrollBy` during tests won't throw.
if (typeof window !== 'undefined' && !(window as any).HTMLElement.prototype.scrollBy) {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	(window as any).HTMLElement.prototype.scrollBy = function (options: any) {
		if (typeof options === 'object' && options !== null) {
			if (typeof options.left === 'number' || typeof options.top === 'number') {
				// No-op: jsdom doesn't render / scroll, but keep the call side-effect free.
				return;
			}
		}
		// handle numeric args: scrollBy(x, y)
		return;
	};
}
