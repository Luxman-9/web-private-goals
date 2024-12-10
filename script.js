// Variabel untuk menyimpan jumlah uang terkumpul
let currentAmount = 0;
let targetAmount = 0;
let targetName = '';
let targetImage = '';

// Fungsi untuk memformat angka ke format Rupiah
function formatRupiah(amount) {
    return 'Rp ' + amount.toLocaleString('id-ID'); // Format sebagai 'Rp' dan pisahkan dengan titik
}

// Fungsi untuk memperbarui progress
function updateProgress() {
    const progressBar = document.getElementById('progress-bar-inner');
    const progressAmount = document.getElementById('current-amount');

    const progressPercentage = Math.min((currentAmount / targetAmount) * 100, 100);
    progressBar.style.width = progressPercentage + '%';
    progressAmount.textContent = formatRupiah(currentAmount);
}

// Fungsi untuk memuat data target dari localStorage
function loadTargetData() {
    const targetData = localStorage.getItem('targetData');
    if (targetData) {
        const parsedData = JSON.parse(targetData);
        targetAmount = parsedData.price;
        targetName = parsedData.name;
        targetImage = parsedData.image;

        document.getElementById('target-name').textContent = targetName;
        document.getElementById('target-amount').textContent = formatRupiah(targetAmount);
        document.getElementById('target-image').src = targetImage;
    }
}

// Panggil fungsi loadTargetData saat halaman dimuat
window.onload = function () {
    loadTargetData();
    updateProgress();
};

// Tambahkan event listener untuk form keuangan
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('finance-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const inputAmount = parseInt(document.getElementById('input-amount').value);
        if (isNaN(inputAmount) || inputAmount <= 0) {
            alert('Nominal tidak valid!');
            return;
        }

        currentAmount += inputAmount;
        updateProgress();
        document.getElementById('input-amount').value = ''; // Reset input
    });

    document.getElementById('reset-button').addEventListener('click', function () {
        currentAmount = 0;
        updateProgress();
    });
});
