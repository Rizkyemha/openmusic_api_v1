const { createSongId } = require("../../utils/nanoId");

class SongsHandler {
	constructor(service, validator) {
		this._service = service;
		// this._validator = validator;

		this.addSongHandler = this.addSongHandler.bind(this);
		this.getSongsHandler = this.getSongsHandler.bind(this);
		this.getSongByIdHandler = this.getSongByIdHandler.bind(this);
		this.editSongByIdHandler = this.editSongByIdHandler.bind(this);
		this.deleteSongByIdHandler = this.deleteSongByIdHandler.bind(this);
	}

	addSongHandler(request, h) {
		const id = createSongId();

		const response = h.response({
			status: "success",
			data: {
				songId: id,
			},
		});

		response.code(201);
		return response;
	}

	getSongsHandler() {
		return {
			status: "success",
			data: {
				songs: [
					{
						id: "song-1",
						title: "title",
						performer: "performer",
					},
					{
						id: "song-2",
						title: "title",
						performer: "performer",
					},
					{
						id: "song-3",
						title: "title",
						performer: "performer",
					},
				],
			},
		};
	}

	getSongByIdHandler(request) {
		const { id } = request.params;

		const song = {
			id,
			title: "title",
			year: "year",
			performer: "performer",
			genre: "genre",
			duration: "duration",
			albumId: "album-1",
		};

		return {
			status: "success",
			data: {
				song: song,
			},
		};
	}

	editSongByIdHandler(request) {
		return {
			status: "success",
			message: "Song berhasil diperbarui",
		};
	}

	deleteSongByIdHandler(request) {
		return {
			status: "success",
			message: "Song berhasil dihapus",
		};
	}
}

module.exports = SongsHandler;
