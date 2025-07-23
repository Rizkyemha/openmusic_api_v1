const Joy = require("../../utils/joi");
const {
	titleScema,
	yearScema,
	genreScema,
	performerScema,
	durationScema,
	albumIdScema,
} = require("../schemaElement");

const SongsScema = Joy.object({
	title: titleScema,
	year: yearScema,
	genre: genreScema,
	performer: performerScema,
	durationScema: durationScema,
	albumId: albumIdScema,
});

module.exports = SongsScema;
