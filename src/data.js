/* Manejo de data */

// Ordenar data de forma Ascendente y Descendente
const sortAge = (data) => {
  let age = data.sort((aa, bb) => {
    aa = aa.yearOfBirth;
    bb = bb.yearOfBirth;
    if (aa > bb) {
      return -1;
    } else if (aa < bb) {
      return 1;
    } else {
      return 0;
    }
  });
  return age;  
};
// Filtrado por Género
const filterGender = (data, value) => {
  let newData = data.filter(object => object.gender === value);
  return newData;
};
// Filtrado por Casas
const filterHouse = (data, home) => {
  let newData = data.filter(object => object.house === home);
  return newData;
};
// Filtrado por Rol "Estudiante"
const filterStudent = (data, value) => {
  let newData = data.filter(object => object.hogwartsStudent === value);
  return newData;
};

window.global = { 
  sortAge,
  filterGender,
  filterHouse,
  filterStudent
};    
