document.getElementById('toggleForm').addEventListener('click', function(event) {
    event.preventDefault();
    let confirmPasswordContainer = document.getElementById('confirmPasswordContainer');
    let submitButton = document.querySelector('button[type="submit"]');
    if (confirmPasswordContainer.classList.contains('d-none')) {
        confirmPasswordContainer.classList.remove('d-none');
        submitButton.textContent = 'Daftar';
        this.textContent = 'Sudah punya akun? Masuk';
    } else {
        confirmPasswordContainer.classList.add('d-none');
        submitButton.textContent = 'Masuk';
        this.textContent = 'Belum punya akun? Daftar';
    }
});