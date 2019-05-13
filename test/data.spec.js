require("../src/data");
require("./data.spec.js");
const data = [
  {
    "name": "Cedric Diggory",
    "yearOfBirth": 1977
  },
  {
    "name": "Harry Potter",
    "yearOfBirth": 1980  
  },
  { 
    "name": "Severus Snape",
    "yearOfBirth": 1960
  }];
const dataSort = [
  {
    "name": "Harry Potter",
    "yearOfBirth": 1980 
  },
  {
    "name": "Cedric Diggory",
    "yearOfBirth": 1977
  },
  { 
    "name": "Severus Snape",
    "yearOfBirth": 1960
  }];

describe("sortAge", () => {
  it("Debería ser una función", () => {
    expect(typeof window.global.sortAge).toBe("function");
  });
  it("Debería ordenar la data Ascendente", () => {
    expect(window.global.sortAge(data)).toEqual(dataSort);
  });
});

const dataFilter = [{
  "name": "Severus Snape",
  "gender": "male"
},
{
  "name": "Cho Chang",
  "gender": "female"
}];

const dataFilterMale = [{
  "name": "Severus Snape",
  "gender": "male"
}];
const dataFilterFemale = [{
  "name": "Cho Chang",
  "gender": "female"
}];

describe("filterGenere", () => {
  it("Debería ser una función", () => {
    expect(typeof window.global.filterGender).toBe("function");
  });
  it("Debería filtrar Male", () => {
    expect(window.global.filterGender(dataFilter, "male")).toEqual(dataFilterMale);
  });
  it("Debería filtrar Female", () => {
    expect(window.global.filterGender(dataFilter, "female")).toEqual(dataFilterFemale);
  });
});

const dataFilterHou = [{
  "name": "Cho Chang",
  "house": "Ravenclaw"
},
{
  "name": "Cedric Diggory",
  "house": "Hufflepuff"
}];
const dataFilteredHou = [{
  "name": "Cho Chang",
  "house": "Ravenclaw"
}];

describe("filterHouse", () => {
  it("Debería ser una función", () => {
    expect(typeof window.global.filterHouse).toBe("function");
  });
  it("Debería filtrar Ravenclaw", () => {
    expect(window.global.filterHouse(dataFilterHou, "Ravenclaw")).toEqual(dataFilteredHou);
  });
});

const dataFilterStud = [{
  "name": "Harry Potter",
  "hogwartsStudent": true
},
{ 
  "name": "Minerva McGonagall",
  "hogwartsStudent": false
}];

const dataFilteredStud = [{
  "name": "Harry Potter",
  "hogwartsStudent": true
}];

describe("filterStudent", () => {
  it("Debería ser una función", () => {
    expect(typeof window.global.filterStudent).toBe("function");
  });
  it("Debería filtrar Male", () => {
    expect(window.global.filterStudent(dataFilterStud, true)).toEqual(dataFilteredStud);
  });
});