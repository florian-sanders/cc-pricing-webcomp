import { html, LitElement } from 'lit';

export class OtherComponent extends LitElement {
	render() {
		return html`
			<div class='data-sheet'>
				toto
			</div>`;
	}
}

window.customElements.define('other-component', OtherComponent);