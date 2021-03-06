import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('data-sheet')
export class DataSheet extends LitElement {
	@property()
	datasets!: Array<{ [key: string]: string | number | boolean }>;

	static styles = [
		css`
			.data-sheet {
				display: flex;
				flex-flow: row wrap;
				align-items: center;
				gap: 1.5rem;
			}
			dl {
				display: grid;
				grid-template-columns: auto 1fr;
				row-gap: calc(var(--gutter) / 1.5);
				align-items: center;
				width: max-content;
				height: max-content;
				font-size: 0.9rem;
			}

			dd {
				margin: 0;
			}

			dd img {
				display: block;
				margin: 0;
				width: 1rem;
				height: 1rem;
			}

			dt {
				margin-right: calc(var(--gutter) / 2);
				color: var(--primary-color);
				text-transform: capitalize;
			}
		`
	];

	getCorrespondingImg(booleanValue: boolean) {
		if (booleanValue) {
			return html`<img src="/assets/img/check-circle.svg" alt="yes" width="16" />`;
		} else {
			return html`<img src="/assets/img/cross-circle.svg" alt="no" width="16" />`;
		}
	}

	render() {
		return html`<div class="data-sheet">
			${this.datasets.map(
				(dataset) => html`<dl>
					${Object.entries(dataset).map(
						([key, value]) => html`
							<dt>${key}</dt>
							<dd>${typeof value === 'boolean' ? this.getCorrespondingImg(value) : value}</dd>
						`
					)}
				</dl>`
			)}
		</div>`;
	}
}
