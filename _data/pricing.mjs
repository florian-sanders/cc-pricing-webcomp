import fetch from 'node-fetch';

module.exports = async function() {
	console.log( "Fetching variants info…" );

	return fetch("https://api.clever-cloud.com/v2/products/instances")
		.then(res => res.json()) // node-fetch option to transform to json
		.then(json => {
			console.log('Formatting variants data...');

			const variants = data
				.sort((a, b) => {
					if (a.name > b.name) return 1;
					if (a.name < b.name) return -1;
					return 0;
				})
				.map((variant) => ({
					id: variant.variant.id,
					language: variant.type,
					imgPath: variant.variant.logo,
					name: variant.name,
					deployments: variant.deployments,
					flavors: variant.flavors
				}));

			return variants;
		});
}