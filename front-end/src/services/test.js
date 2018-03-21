
export default function requestACCESS(route, method = 'GET', body) {
	let url = `/${route}`
	return fetch(url, {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body)
	})
	.then(response => response.json().then(
		json => ({json, response}))
	)
	.then(({json, response}) => {
		if (!response.ok) {
			return Promise.reject(json)
		}
		return json
	})
	.catch((error) => {
		console.error(error)
	})
}