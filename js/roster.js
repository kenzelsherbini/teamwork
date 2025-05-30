document.addEventListener("DOMContentLoaded", ()=> {

   const grid = document.getElementById('rosterGrid')

   const render = list => {
        grid.innerHTML = ''
        list.forEach(p => {
            const col = document.createElement('div')
            col.className = 'col-6 col-lg-2'
            col.innerHTML = `
                    <div class="card card-body text-center" style="width: 18rem;">
  <img src"${p.photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <div class='badge badge-position badge-pos-${p.position}'>${p.position}</div>
                    <p class="small text-muted mb-0"> Age ${p.age}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            `
            grid.appendChild(col)
        })

   }
   render(players)
})