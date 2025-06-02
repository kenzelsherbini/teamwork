document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  // Create a separate container for all modals (added once)
  let modalContainer = document.getElementById('modalContainer');
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    document.body.appendChild(modalContainer);
  }

  const render = list => {
    grid.innerHTML = '';
    modalContainer.innerHTML = '';

    list.forEach((p, i) => {
      const fullName = `${p.firstName} ${p.lastName}`;
      const col = document.createElement('div');
      col.className = 'col-6 col-lg-2';

      // Card without modal inside
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${p.photo}" alt="${fullName}" class="card-img-top" />
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${fullName}</h5>
            <div class="badge badge-position badge-pos-${p.position}">${p.position}</div>
            <p class="small text-muted mb-0">Year:<br>${p.age}</p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${i}">
              Click to see their task!
            </button>
          </div>
        </div>
      `;

      grid.appendChild(col);

      // Modal goes into separate container
      modalContainer.innerHTML += `
        <div class="modal fade" id="modal-${i}" tabindex="-1" aria-labelledby="modalLabel-${i}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="modalLabel-${i}">Car info:</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${p.hiddenDetail}
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

  render(players); // Use your BMW data array
});
