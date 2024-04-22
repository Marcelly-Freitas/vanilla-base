import { authenticationService } from "@/services/authentication.service";

export const useAuthentication = () => {
	async function sigIn(username, password) {
		try {
			const response = await authenticationService.sigIn(username, password);

			localStorage.setItem('userData', JSON.stringify(response.data));
		} catch (error) {
			console.error(error);
			localStorage.removeItem('userData');
		}
	}

	function sigOut() {
		localStorage.removeItem('userData');
	}

	function getUSerData() {
		const userDataJSON = localStorage.getItem('userData');
		return userDataJSON ? JSON.parse(userDataJSON) : {};
	}

	function isAuthenticated() {
		const userDataJSON = localStorage.getItem('userData');
		return userDataJSON ? true : false;
	}
	return {
		isAuthenticated,
		getUSerData,
		sigOut,
		sigIn,
	};
};
