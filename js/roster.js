document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  // Add modal container if not already there
  let modalContainer = document.getElementById('modalContainer');
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    document.body.appendChild(modalContainer);
  }

  const render = list => {
    grid.innerHTML = '';
    modalContainer.innerHTML = '';

    list.forEach((car, i) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-lg-2';

      col.innerHTML = `
        <div class="card h-100 shadow-sm text-center">
          <img src="${car.photo}" alt="${car.firstName} ${car.lastName}" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title mb-1">${car.firstName} ${car.lastName}</h5>
            <div class="badge bg-secondary mb-1">${car.position}</div>
            <p class="small text-muted mb-0">Year: ${car.age}</p>
            <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#modal-${i}">
              More Info
            </button>
          </div>
        </div>
      `;
      grid.appendChild(col);

   
      modalContainer.innerHTML += `
        <div class="modal fade" id="modal-${i}" tabindex="-1" aria-labelledby="modalLabel-${i}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalLabel-${i}">${car.firstName} ${car.lastName} - Details</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${car.hiddenDetail}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  };

  render(players);
});
