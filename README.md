# COVID-19 Tracker

Aplikasi frontend yang menampilkan data COVID-19 dari seluruh dunia menggunakan API dari [disease.sh](https://disease.sh/v3/covid-19/countries). Dibangun dengan React.js untuk seleksi Front-End Engineer di Lacak.io.

## Fitur

1.  **Beranda**: Menampilkan daftar, tabel, atau kisi data COVID-19 untuk semua negara.
2.  **Filter & Sortir**: Fitur pencarian, penyaringan, dan pengurutan data tanpa menggunakan algoritma bawaan UI library.
3.  **Detail Negara**: Menampilkan informasi detail tentang negara yang dipilih.
4.  **Simpan Data**: Menyimpan data negara yang dipilih dengan catatan tambahan.
5.  **Halaman Catatan**: Menampilkan daftar negara yang telah disimpan.
6.  **Edit Catatan**: Mengedit catatan yang telah disimpan.
7.  **Hapus Catatan**: Menghapus catatan yang telah disimpan.
8.  **Penyimpanan Data**: Data disimpan secara lokal di browser atau menggunakan Firebase.

## Teknologi yang Digunakan

-   **React.js** (Frontend utama)
-   **DaisyUI** (Komponen UI inti)
-   **React Context API** (Manajemen status)
-   **React Router Dom** (Routing)
-   **Firebase (opsional)** (Penyimpanan data)

## Instalasi dan Menjalankan Aplikasi

1.  **Clone repository**
    
    ```sh
    git clone https://github.com/BimaBizz/lacakCovid.git
    cd lacakCovid
    
    ```
    
2.  **Install dependencies**
    
    ```sh
    npm install
    
    ```
    
3.  **Jalankan aplikasi tahap development**
    
    ```sh
    npm run dev
    
    ```
    

## Struktur Proyek

```
├── src
│   ├── component  # Komponen UI
|   ├── lib         # Kumpulan fungsi-fungsi
|   ├── route       # Halaman routes
│   ├── App.js      # Entry point
│   ├── index.js    # Root file

```

## Kontribusi

1.  Fork repositori ini.
2.  Buat branch baru (`feature-nama-fitur`).
3.  Commit perubahan (`git commit -m "Menambahkan fitur baru"`).
4.  Push ke branch (`git push origin feature-nama-fitur`).
5.  Buat Pull Request.
