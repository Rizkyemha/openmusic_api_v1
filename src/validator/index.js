const AlbumsScema = require("./albums/schema");
const SongsScema = require("./songs/schema");
const InvariantError = require("../utils/exceptions/InvariantError");

const validatePayload = {
	validateAlbumsPayload: (payload) => {
		const validationResult = AlbumsScema.validate(payload);
		if (validationResult.error) {
			throw new InvariantError(validationResult.error.message);
		}
	},
	validateSongsPayload: (payload) => {
		const validationResult = SongsScema.validate(payload);
		if (validationResult.error) {
			throw new InvariantError(validationResult.error.message);
		}
	},
};

module.exports = validatePayload;
