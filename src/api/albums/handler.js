const { createAlbumId } = require("../../utils/nanoId");

class AlbumsHandler {
	constructor(service, validator) {
		this._service = service;
		//this._validator = validator;

		this.addAlbumHandler = this.addAlbumHandler.bind(this);
		this.getAlbumByIdHandler = this.getAlbumByIdHandler.bind(this);
		this.editAlbumByIdHandler = this.editAlbumByIdHandler.bind(this);
		this.deleteAlbumByIdHandler = this.deleteAlbumByIdHandler.bind(this);
	}

	async addAlbumHandler(request, h) {
		const { name, year } = request.payload;

		const response = h.response({
			status: "success",
			data: {
				albumId: createAlbumId(),
			},
		});

		response.code(201);
		return response;
	}

	async getAlbumByIdHandler(request) {
		const { id } = request.params;

		return {
			status: "success",
			data: {
				album: {
					id,
					name: "example album name",
					year: "example album year",
				},
			},
		};
	}

	async editAlbumByIdHandler(request, h) {
		const { id } = request.params;
		const { name, year } = request.payload;

		return {
			status: "success",
			message: "Album berhasil diperbarui",
		};
	}

	async deleteAlbumByIdHandler(request, h) {
		const { id } = request.params;

		return {
			status: "success",
			message: "Album berhasil dihapus",
		};
	}
}

module.exports = AlbumsHandler;
