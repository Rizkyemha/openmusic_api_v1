const Joy = require("../../utils/joi");
const { nameScema, yearScema } = require("../schemaElement");

const albumsSchema = Joy.object({
	name: nameScema,
	year: yearScema,
});

module.exports = albumsSchema;
