import { html, LitElement } from 'lit';

export class DemoGreeter extends LitElement {
	render() {
		return html`
			<div class='data-sheet'>
				toto
			</div>`;
	}
}

window.customElements.define('demo-greeter', DemoGreeter);