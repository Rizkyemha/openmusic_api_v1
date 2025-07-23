const Joy = require("../utils/joi");

const idScema = Joy.string().required();
const nameScema = Joy.string().required();
const yearScema = Joy.number().required();
const titleScema = Joy.string().required();
const genreScema = Joy.string().required();
const performerScema = Joy.string().required();
const durationScema = Joy.number().optional();
const albumIdScema = Joy.string().optional();

module.exports = {
	idScema,
	nameScema,
	yearScema,
	titleScema,
	genreScema,
	performerScema,
	durationScema,
	albumIdScema,
};
