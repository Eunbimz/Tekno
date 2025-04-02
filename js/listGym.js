const gymData = {
    Jakarta: [
        { name: 'MuscleCamp Kemayoran', description: 'Gym dekat SMPN 78 Jakarta', image: '../project/image/musclecamp.jpg', mapsLink: 'https://maps.app.goo.gl/yEJd9wNDfZthRs7CA', customerService: 'https://wa.me/62895384862552' }
    ],
    Depok: [
        { name: 'Transform Gym', description: 'Gym dekat dengan UPN', image: '../project/image/transform_gym.jpg', mapsLink: 'https://maps.app.goo.gl/EZDNNBaRsUfZ6L2g7', customerService: 'https://wa.me/62895384862552' }
    ]
};

// Event listener untuk memilih daerah dengan card
document.getElementById('jakartaCard').addEventListener('click', function() {
    displayGyms('Jakarta');
});

document.getElementById('bogorCard').addEventListener('click', function() {
    displayGyms('Bogor');
});

document.getElementById('depokCard').addEventListener('click', function() {
    displayGyms('Depok');
});

document.getElementById('tangerangCard').addEventListener('click', function() {
    displayGyms('tangerang');
});

document.getElementById('bekasiCard').addEventListener('click', function() {
    displayGyms('Bekasi');
});

function displayGyms(region) {
    const gymCardsContainer = document.getElementById('gymCards');
    gymCardsContainer.innerHTML = ''; 

    if (region && gymData[region]) {
        gymData[region].forEach(gym => {
            const gymCard = document.createElement('div');
            gymCard.classList.add('col-md-4');
            gymCard.classList.add('gym-card');
            gymCard.innerHTML = `
                <div class="card">
                    <img src="${gym.image}" class="card-img-top" alt="${gym.name}">
                    <div class="card-body">
                        <h5 class="card-title">${gym.name}</h5>
                        <p class="card-text">${gym.description}</p>
                        <div class="button-container">
                            <a href="${gym.mapsLink}" class="btn btn-primary" target="_blank">Lihat di Maps</a>
                            <a href="${gym.customerService}" class="btn btn-secondary" target="_blank">Customer Service</a>
                        </div>
                    </div>
                </div>
            `;
            gymCardsContainer.appendChild(gymCard);
        });
    } else {
        gymCardsContainer.innerHTML = '<p class="text-center">Belum ada gym terdaftar di daerah ini.</p>';
    }
}
