# ⚠️ Peringatan (Disclaimer)

Proyek ini adalah submission untuk kelas "Belajar Fundamental Back-End dengan JavaScript" di Dicoding. Repositori ini dibuat hanya untuk tujuan edukasi dan sebagai referensi pribadi.

Sangat tidak disarankan untuk melakukan copy-paste secara langsung pada kode ini untuk menyelesaikan tugas Anda. Setiap submission akan diperiksa oleh sistem plagiarism checker. Tindakan plagiarisme dapat mengakibatkan submission Anda ditolak dan akun Dicoding Anda bisa di-banned.

Segala risiko yang timbul akibat penyalahgunaan repositori ini adalah tanggung jawab Anda sepenuhnya. Mohon gunakan dengan bijak.

# Open Music API

**Open Music API** adalah sebuah proyek RESTful API untuk mengelola data album dan lagu. API ini dibangun menggunakan Node.js dengan framework Hapi dan menggunakan PostgreSQL sebagai database. Proyek ini dibuat sebagai _submission_ untuk kelas "Belajar Fundamental Back-End dengan JavaScript".

## Dokumentasi API

Berikut adalah detail dari setiap _endpoint_ yang tersedia.

### 💿 Albums API

#### `POST /albums`

Menambahkan album baru.

-  **Request Body**:
   ```json
   {
   	"name": "string (required)",
   	"year": "number (required)"
   }
   ```
-  **Success Response (201)**:
   ```json
   {
   	"status": "success",
   	"data": {
   		"albumId": "album-xxxxxxxx"
   	}
   }
   ```
-  **Fail Response (400)**:
   ```json
   {
   	"status": "fail",
   	"message": "Gagal menambahkan album. Mohon isi nama dan tahun album"
   }
   ```

#### `GET /albums/{id}`

Mendapatkan detail album berdasarkan ID, termasuk daftar lagu di dalamnya (Kriteria Opsional).

-  **Success Response (200)**:
   ```json
   {
   	"status": "success",
   	"data": {
   		"album": {
   			"id": "album-Mk8AnmCp210PwT6B",
   			"name": "Viva la Vida",
   			"year": 2008,
   			"songs": [
   				{
   					"id": "song-Qbax5Oy7L8WKf74l",
   					"title": "Life in Technicolor",
   					"performer": "Coldplay"
   				}
   			]
   		}
   	}
   }
   ```
-  **Fail Response (404)**:
   ```json
   {
   	"status": "fail",
   	"message": "Album tidak ditemukan"
   }
   ```

#### `PUT /albums/{id}`

Memperbarui data album berdasarkan ID.

-  **Request Body**:
   ```json
   {
   	"name": "string (required)",
   	"year": "number (required)"
   }
   ```
-  **Success Response (200)**:
   ```json
   {
   	"status": "success",
   	"message": "Album berhasil diperbarui"
   }
   ```
-  **Fail Response (404)**:
   ```json
   {
   	"status": "fail",
   	"message": "Gagal memperbarui album. Id tidak ditemukan"
   }
   ```

#### `DELETE /albums/{id}`

Menghapus album berdasarkan ID.

-  **Success Response (200)**:
   ```json
   {
   	"status": "success",
   	"message": "Album berhasil dihapus"
   }
   ```
-  **Fail Response (404)**:
   ```json
   {
   	"status": "fail",
   	"message": "Album gagal dihapus. Id tidak ditemukan"
   }
   ```

### 🎵 Songs API

#### `POST /songs`

Menambahkan lagu baru.

-  **Request Body**:
   ```json
   {
   	"title": "string (required)",
   	"year": "number (required)",
   	"genre": "string (required)",
   	"performer": "string (required)",
   	"duration": "number (optional)",
   	"albumId": "string (optional)"
   }
   ```
-  **Success Response (201)**:
   ```json
   {
   	"status": "success",
   	"data": {
   		"songId": "song-xxxxxxxx"
   	}
   }
   ```

#### `GET /songs`

Mendapatkan semua lagu. Mendukung pencarian dengan _query parameter_ `title` dan `performer` (Kriteria Opsional).

-  **Query Parameters**:
   -  `?title=...` (opsional)
   -  `?performer=...` (opsional)
-  **Success Response (200)**:
   ```json
   {
   	"status": "success",
   	"data": {
   		"songs": [
   			{
   				"id": "song-Qbax5Oy7L8WKf74l",
   				"title": "Life in Technicolor",
   				"performer": "Coldplay"
   			}
   		]
   	}
   }
   ```

#### `GET /songs/{id}`

Mendapatkan detail lagu berdasarkan ID.

-  **Success Response (200)**:
   ```json
   {
   	"status": "success",
   	"data": {
   		"song": {
   			"id": "song-Qbax5Oy7L8WKf74l",
   			"title": "Life in Technicolor",
   			"year": 2008,
   			"performer": "Coldplay",
   			"genre": "Indie",
   			"duration": 120,
   			"albumId": "album-Mk8AnmCp210PwT6B"
   		}
   	}
   }
   ```
-  **Fail Response (404)**:
   ```json
   {
   	"status": "fail",
   	"message": "Lagu tidak ditemukan"
   }
   ```

#### `PUT /songs/{id}`

Memperbarui data lagu berdasarkan ID.

-  **Request Body**:
   ```json
   {
   	"title": "string (required)",
   	"year": "number (required)",
   	"genre": "string (required)",
   	"performer": "string (required)",
   	"duration": "number (optional)",
   	"albumId": "string (optional)"
   }
   ```
-  **Success Response (200)**:
   ```json
   {
   	"status": "success",
   	"message": "Lagu berhasil diperbarui"
   }
   ```
-  **Fail Response (404)**:
   ```json
   {
   	"status": "fail",
   	"message": "Gagal memperbarui lagu. Id tidak ditemukan"
   }
   ```

#### `DELETE /songs/{id}`

Menghapus lagu berdasarkan ID.

-  **Success Response (200)**:
   ```json
   {
   	"status": "success",
   	"message": "Lagu berhasil dihapus"
   }
   ```
-  **Fail Response (404)**:
   ```json
   {
   	"status": "fail",
   	"message": "Lagu gagal dihapus. Id tidak ditemukan"
   }
   ```
