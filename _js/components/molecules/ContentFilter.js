import { css, html, LitElement } from 'lit';
import { pluralize } from '../../utilities';

export class ContentFilter extends LitElement {
	static styles = [
		css`
      summary {
        margin-bottom: var(--gutter);
      }

      input {
        display: block;
        width: 95%;
        padding: calc(var(--gutter) / 1.5);
        margin-top: calc(var(--gutter) / 2);
        border-radius: 0 var(--border-radius) var(--border-radius) var(--border-radius);
        box-shadow: var(--shadow-elevation-low);
      }

      .announcer {
        margin: var(--gutter) 0;
      }
		`
	];

	static get properties() {
		return {
			label: { type: String },
			isLoading: { type: Boolean },
			resultsCount: { type: Number }
		};
	}

	constructor() {
		super();
		this.label = '';
		this.isLoading = false;
		this.resultsCount = 0;
	}

	get _input() {
		return this.renderRoot?.querySelector('input') ?? null;
	}

	_handleOnChange() {
		this.dispatchEvent(new CustomEvent('filterValue', { detail: this._input.value.trim() }));
	}

	private _dispatchFilter() {
		const filterCriterion = this._input.value.trim();
		const options = {
			detail: { filterCriterion },
			bubbles: true,
			composed: true
		};
		console.log('dispatching');
		this.dispatchEvent(new CustomEvent('filterValue', options));
	}

	render() {
		const message = this.isLoading
			? html`<strong>Chargement en cours</strong>`
			: html`<strong>${this.resultsCount} ${pluralize(this.resultsCount, 'result')}</strong>
			available`;

		return html`
			<details>
				<summary>Filter</summary>
				<div class='filter'>
					<label for='variant-filter'>${this.label}</label>
					<input id='variant-filter' type='text' @input='${this._dispatchFilter}' />
				</div>
			</details>

			<p class='announcer' aria-live='polite' aria-atomic='true'>${message}</p>`;
	}
}

window.customElements.define('content-filter', ContentFilter);