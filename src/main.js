/* Manejo del DOM */
// Llamando la Data Json
fetch("./data/potter.json")
  .then((response) => response.json())
  .then((data) => {
    dataPotter(data);
    pintarData(data);
  });

// Pintando la data
const container = document.getElementById("container");
const pintarData = (data) => {
  container.innerHTML = '';
  data.forEach(paint => {
    container.innerHTML += `<div id="box-paint" class="col-lg-4 col-md-4 col-sm-6 col-sx-6">
    <div class="space">
        <center> <img src=${paint.image} class="img-profile"> <center>
        <p class="name"><strong>${paint.name}</strong></label> 
        <p class="house"><strong>${paint.house}</strong></p>
        <p>Especie:<strong>${paint.species}</strong></p>
        <p>Rol:<strong>${paint.hogwartsStudent ? "Estudiante" : "Staff"}</strong></p>
        <p>Edad 🌈:<strong>${paint.yearOfBirth ? 2019 - paint.yearOfBirth : "---"}</strong></p>
        <p>Actor:<strong>${paint.actor}</strong></p>
     </div>
        </div>`;
  });
};

// Pintado para Ordenar
const dataPotter = (data) => {
  const buttonA = document.getElementById("button-upward");
  const buttonB = document.getElementById("button-falling");

  let newYear = [];
  data.forEach(year => {
    if (typeof year.yearOfBirth === "number") {
      newYear.push(year);
    }
  });
  
  buttonA.addEventListener("click", () => {
    const dataSortUpward = global.sortAge(newYear);
    pintarData(dataSortUpward);
  }); 

  buttonB.addEventListener("click", () => {
    const dataSortFalling = global.sortAge(newYear).reverse();
    pintarData(dataSortFalling);
  });

  // Pintado del filtrado de Género (se reemplaza con change (select) a click)
  const dataGender = document.getElementById("genere");

  dataGender.addEventListener("change", (event) => {
    const dataFilterGender = global.filterGender(data, event.target.value);
    pintarData(dataFilterGender);
  });

  // Pintado del filtrado de Rol
  const dataRole = document.getElementById("role");

  dataRole.addEventListener("change", (event) => {
    let dataFilterRole = [];
    if (event.target.value === "true") {
      dataFilterRole = global.filterStudent(data, true);
    } else {
      dataFilterRole = global.filterStudent(data, false);
    }
    pintarData(dataFilterRole);
  });

  // Pintado del filtrado de Casas
  const dataHouse = document.getElementById("house");
  dataHouse.addEventListener("change", (event) => {
    const dataFilterHouse = global.filterHouse(data, event.target.value);
    pintarData(dataFilterHouse);
  });
};
