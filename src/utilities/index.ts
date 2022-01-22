/**
 * Function used to format RAM information
 * @param {number} mem memory in megabytes
 * @returns {string} formatted RAM in MiB or GiB
 */
 export const getFormattedRam = (mem: number): string =>
 mem < 1000 ? `${mem} MiB` : `${Math.floor(mem / 1000).toFixed(0)} GiB`;

/**
* Function used to compute actual price in €
* @param {number} price provided by API
* @returns {string} API price multiplied by 41.904 and fixed to 2 decimals
*/
export const getFormattedPrice = (price: number): string => (price * 41.904).toFixed(2);

/**
* Function return a word with an s if it should be plural or without s if singular 
* @param {number} dependency number determining wether the word should be plural or singular.
* For instance: 1 product - 1 is the dependency which makes product singular.
* @returns {string} singular or plural word
*/
export const pluralize = (dependency: number, singularWord: string): string => dependency > 1 ? `${singularWord}s` : singularWord; 