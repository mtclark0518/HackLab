import JWT from './jwt';

export default function requestAPI(controller, route, method = 'GET', body) {
	// builds out url 
	const url = `/${controller}/${route}`;
	// builds basic headers
	const headers = {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	};
	const jsonBody = JSON.stringify(body);

	// checks if there is a user
	if ( JWT.loggedIn() ) {
		// if we have a valid token we set it as an authorization header
		headers['Authorization'] = `JWT ${JWT.getToken()}`;
	}

	return fetch( url, {
		method: method,
		headers: headers,
		body: jsonBody
	})
	.then(response => 
		response.json()
		.then(json => ({
			json, response}
		))
	)
	.then( ({json, response}) => {
		if (!response.ok) {
			return Promise.reject(json);
		}
		return json;
	})
	.catch((error) => {
		console.error(error);
	});
}