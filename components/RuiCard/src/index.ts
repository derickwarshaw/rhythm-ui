/**
* Copyright Deloitte Digital 2019
*
* This source code is licensed under the BSD-3-Clause license found in the
* LICENSE file in the root directory of this source tree.
*/

/**
* Register the Web Component with customElements
* @param tag - The HTML tag to use
*/
export const register = (tag: string = 'rui-card') => {
	// Register the new element with the browser.
	if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
		import('./RuiCard').then(module => {
			customElements.define(tag, module.RuiCard);
		});
	}
};

if (process.env.RUI_NO_DEFAULT_REGISTER !== 'true') {
	register();
}
