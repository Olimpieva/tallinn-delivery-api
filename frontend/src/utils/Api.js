import { MAIN_URL } from "./constants";

class MainApi {
    constructor(options) {
        this._url = options.url;
    }

    async _sendRequest(path, requestOptions) {

        try {
            const response = await fetch(`${this._url}/${path}`, {
                ...requestOptions,
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw response;
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        };
    };

    checkToken() {

        return this._sendRequest(`users/me`, {
            method: 'GET'
        });
    };

    login({ username, password }) {

        return this._sendRequest(`signin`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
            })
        });
    };

    logout() {

        return this._sendRequest(`signout`, {});
    };

    getAllOrders() {

        return this._sendRequest(`orders`, {
            method: 'GET',
        });
    };

    createOrder({ name, phone, comment }) {

        return this._sendRequest(`orders`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                phone,
                comment,
            }),
        });
    };

    getOrderById({ orderId }) {

        return this._sendRequest(`orders/${orderId}`, {
            method: 'GET',
        });
    };
};

const api = new MainApi({ url: MAIN_URL });

export default api;