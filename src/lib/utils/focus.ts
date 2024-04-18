export function focusOnMount(node: HTMLInputElement) {
	setTimeout(() => node.focus(), 0); // Ensuring it focuses after being mounted
	return {
		destroy() {
			// Cleanup if necessary when the element is removed
		}
	};
}
