/*
Complete the method so that it does the following:
  Removes any duplicate query string parameters from the url (the first occurence should be kept)
  Removes any query string parameters specified within the 2nd argument (optional array)

Examples:
  stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
  stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
  stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'
*/


// Solution

function stripUrlParams(url, paramsToStrip) {
	let domain = url.split('?')[0];
	let query = url.split('?')[1];
	let obj = {};
	let pairKey;
	let pairValue;
	let newQueryStr;

	if (!query) return domain;

	query.split('&').forEach(function(pair) {
		pairKey = pair.split('=')[0];
		pairValue = pair.split('=')[1];
		if (paramsToStrip ? paramsToStrip.some(function(param) {
				return param === pairKey
			}) : null || obj.hasOwnProperty(pairKey)) return;
		obj[pairKey] = pairValue;
	});

	newQueryStr = Object.keys(obj).map(function(key) {
		return key + '=' + obj[key];
	}).join('&');

	return domain + (newQueryStr ? '?' + newQueryStr : '');
}

// or