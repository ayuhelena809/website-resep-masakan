
// ===============================
// JAVASCRIPT DAPUR NUSANTARA
// PENCARIAN DAN FILTER RESEP
// ===============================

let kategoriAktif = "semua";

// Fungsi untuk mencari dan menampilkan resep
function tampilkanResep() {
    const input = document.getElementById("cariResep");
    const daftarResep = document.querySelectorAll(".resep-item");
    const pesanKosong = document.getElementById("pesanKosong");

    // Jika elemen pencarian tidak ada, hentikan fungsi
    if (!input) return;

    const kataKunci = input.value.toLowerCase().trim();
    let jumlahTampil = 0;

    daftarResep.forEach(function(resep) {
        const judul = resep.querySelector("h3");
        const nama = judul ? judul.textContent.toLowerCase() : "";
        const kategori = resep.dataset.kategori;

        const cocokNama = nama.includes(kataKunci);
        const cocokKategori =
            kategoriAktif === "semua" ||
            kategori === kategoriAktif;

        if (cocokNama && cocokKategori) {
            resep.style.display = "";
            jumlahTampil++;
        } else {
            resep.style.display = "none";
        }
    });

    // Tampilkan pesan jika resep tidak ditemukan
    if (pesanKosong) {
        pesanKosong.style.display =
            jumlahTampil === 0 ? "block" : "none";
    }
}

// Fungsi pencarian
function cariResep() {
    tampilkanResep();
}

// Fungsi filter kategori
function filterKategori(kategori, tombol) {
    kategoriAktif = kategori;

    // Menghapus tanda aktif dari semua tombol
    document.querySelectorAll(".kategori-btn").forEach(function(btn) {
        btn.classList.remove("aktif");
    });

    // Memberikan tanda aktif pada tombol yang dipilih
    if (tombol) {
        tombol.classList.add("aktif");
    }

    tampilkanResep();
}

// Menjalankan pencarian saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("cariResep");

    if (input) {
        input.addEventListener("input", tampilkanResep);
    }

    tampilkanResep();
});
