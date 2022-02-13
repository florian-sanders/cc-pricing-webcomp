import { html, LitElement } from 'lit';

export class DemoGreeter extends LitElement {
	render() {
		return html`
			<div class='data-sheet'>
				toto
			</div>`;
	}
}

customElements.define('demo-greeter', DemoGreeter);