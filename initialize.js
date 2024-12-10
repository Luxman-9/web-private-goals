function initialize() {
    // Ambil nilai dari elemen input di HTML
    const itemName = document.getElementById('target-name').textContent; // Ambil nama barang dari elemen dengan id 'target-name'
    const itemPrice = document.getElementById('target-amount').textContent; // Ambil harga dari elemen dengan id 'target-amount'

    // Menampilkan nilai itemName dan itemPrice di konsol
    console.log(itemName, itemPrice);
}

// Panggil fungsi initialize() saat halaman dimuat
window.onload = initialize;
