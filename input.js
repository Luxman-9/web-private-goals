document.getElementById('input-target-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Ambil nilai input
    const targetName = document.getElementById('target-name').value;
    const targetPriceString = document.getElementById('target-price').value;
    const targetImageFile = document.getElementById('target-image').files[0]; // Ambil file gambar

    // Menghapus simbol 'Rp' dan titik untuk konversi ke angka
    const targetPrice = parseInt(targetPriceString.replace(/[^0-9]/g, ''));

    if (isNaN(targetPrice)) {
        alert('Harga barang tidak valid!');
        return;
    }

    // Membaca file gambar dan mengubahnya menjadi format base64
    const reader = new FileReader();
    reader.onloadend = () => {
        const targetData = {
            name: targetName,
            price: targetPrice,
            image: reader.result // Menyimpan gambar dalam format base64
        };

        // Simpan data ke localStorage
        localStorage.setItem('targetData', JSON.stringify(targetData));

        // Pindah ke halaman utama (index.html)
        window.location.href = 'index.html';
    };
    if (targetImageFile) {
        reader.readAsDataURL(targetImageFile); // Mengubah file gambar menjadi base64
    }
});
