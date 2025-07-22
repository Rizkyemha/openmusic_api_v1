⚠️ Peringatan (Disclaimer)
Proyek ini adalah submission untuk kelas "Belajar Membuat Aplikasi Back-End untuk Pemula" di Dicoding. Repositori ini dibuat hanya untuk tujuan edukasi dan sebagai referensi pribadi.

Sangat tidak disarankan untuk melakukan copy-paste secara langsung pada kode ini untuk menyelesaikan tugas Anda. Setiap submission akan diperiksa oleh sistem plagiarism checker. Tindakan plagiarisme dapat mengakibatkan submission Anda ditolak dan akun Dicoding Anda bisa di-banned.

Segala risiko yang timbul akibat penyalahgunaan repositori ini adalah tanggung jawab Anda sepenuhnya. Mohon gunakan dengan bijak.

# Open Music API

**Open Music API** adalah sebuah proyek RESTful API untuk mengelola data album dan lagu. API ini dibangun menggunakan Node.js dengan framework Hapi dan menggunakan PostgreSQL sebagai database. Proyek ini dibuat sebagai _submission_ untuk kelas "Belajar Membuat Aplikasi Back-End untuk Pemula".

## Fitur & Kriteria

API ini memenuhi semua kriteria yang disyaratkan, antara lain:

### Kriteria Wajib

-  ✅ **Konfigurasi Proyek Node.js**: Aplikasi dapat dijalankan melalui `npm run start` dan menggunakan _environment variable_ `HOST` & `PORT`.
-  ✅ **Pengelolaan Data Album**: Menyediakan _endpoint_ CRUD untuk data album.
-  ✅ **Pengelolaan Data Lagu**: Menyediakan _endpoint_ CRUD untuk data lagu.
-  ✅ **Validasi Data**: Menerapkan validasi pada _request payload_ untuk semua _endpoint_ `POST` dan `PUT`.
-  ✅ **Penanganan Eror**: Mengimplementasikan penanganan eror untuk _Client Error_ (4xx) dan _Server Error_ (5xx) dengan format _response_ yang sesuai.
-  ✅ **Penggunaan Database**:
   -  Menggunakan **PostgreSQL** untuk menyimpan data secara persisten.
   -  Menggunakan `node-pg-migrate` untuk migrasi skema database.
   -  Menggunakan **SQL mentah** (tanpa ORM) untuk operasi database.
   -  Kredensial database dikelola melalui _environment variable_ dan `dotenv`.

### Kriteria Opsional

-  ⭐ **Daftar Lagu di Detail Album**: _Endpoint_ `GET /albums/{id}` menampilkan daftar lagu yang ada di dalam album tersebut.
-  ⭐ **Query Parameter untuk Pencarian Lagu**: _Endpoint_ `GET /songs` mendukung pencarian lagu berdasarkan `title` dan `performer` melalui _query parameter_.

---

## Instalasi & Persiapan

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek secara lokal.

1. **Clone Repositori**

   ```bash
   git clone https://github.com/USERNAME/NAMA-REPOSITORI.git
   cd NAMA-REPOSITORI
   ```

2. **Instal Dependensi**

   ```bash
   npm install
   ```

3. **Konfigurasi Environment Variable**
   Salin berkas `.env.example` menjadi `.env`.

   ```bash
   cp .env.example .env
   ```

   Kemudian, sesuaikan nilai variabel di dalam berkas `.env` sesuai dengan konfigurasi lokal Anda.

   ```env
   # Konfigurasi Server
   HOST=localhost
   PORT=5000

   # Kredensial Database PostgreSQL
   PGUSER=user_database
   PGPASSWORD=password_database
   PGDATABASE=nama_database
   PGHOST=localhost
   PGPORT=5432
   ```

4. **Setup Database**
   Pastikan PostgreSQL server Anda berjalan. Buat _database_ dan _user_ sesuai dengan yang Anda definisikan di berkas `.env`.

5. **Jalankan Migrasi Database**
   Perintah ini akan membuat tabel `albums` dan `songs` di database Anda.

   ```bash
   npm run migrate up
   ```

6. **Jalankan Aplikasi**

   ```bash
   npm run start
   ```

   Server akan berjalan di `http://{HOST}:{PORT}` (contoh: `http://localhost:5000`).

---

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
