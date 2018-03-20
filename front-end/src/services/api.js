export const API_URL = '/api'

export default function requestAPI(route, method = 'GET', body) {
	let url = `${API_URL}/${route}`

	return fetch(url, {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
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