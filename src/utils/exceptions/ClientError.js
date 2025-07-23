class ClientError extends Error {
	constructor(message, statusCode = 400) {
		super(message);
		this._statusCode = statusCode;
		this._name = "ClientError";
	}
}

module.exports = ClientError;
