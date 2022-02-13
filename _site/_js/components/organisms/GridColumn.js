import { css, html, LitElement } from 'lit';

export class GridColumn extends LitElement {
	static styles = [
		css`
      :host {
        height: 100%;
        position: relative;
        padding: 0.5rem 1rem;
        overflow-y: auto;
        scroll-behavior: smooth;
      }

      slot[name='placeholder'] {
        position: absolute;
        top: 50vh;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        color: var(--soft-black-color);
        text-align: center;
        font-size: 1.1rem;
        font-weight: bold;
      }

      slot[name='column-header']::slotted(*) {
        margin: calc(var(--gutter) * 2);
        font-size: 1rem;
        text-align: center;
        font-weight: 500;
        font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
        letter-spacing: 0.5px;
        font-style: italic;
      }
		`
	];

	render() {
		return html`
			<div class='grid-column'>
				<slot name='column-header'></slot>
				<slot></slot>
				<slot name='placeholder'></slot>
			</div>`;
	}
}

window.customElements.define('grid-column', GridColumn);
