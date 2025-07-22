require("dotenv").config();
const Hapi = require("@hapi/hapi");
const pool = require("./utils/database");
const albums = require("./api/albums");
const AlbumsService = require("./services/postgres/albumsService");
const songs = require("./api/songs");
const SongsService = require("./services/postgres/songsService");

const init = async () => {
	const albumsService = new AlbumsService(pool);
	const songsService = new SongsService(pool);

	const server = Hapi.server({
		port: process.env.PORT,
		host: process.env.HOST,
		routes: {
			cors: {
				origin: ["*"],
			},
		},
	});

	await server.register([
		{
			plugin: albums,
			options: {
				service: albumsService,
			},
		},
		{
			plugin: songs,
			options: {
				service: songsService,
			},
		},
	]);

	// onPreResponse

	await server.start();
	console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
