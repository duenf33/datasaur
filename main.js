/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function(species, period, carnivore, extinct = false){
  const newDino = {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  }
  return newDino;
}
const makeSingular = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  let dinoSpecies = dino.species;
  if(dinoSpecies.endsWith('us') === true){
    newDino.species = dinoSpecies.slice(0,-2);
  }
  return newDino;
}

const truncateSpecies = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  let dinoSpecies = dino.species;
  if(dinoSpecies.length >= 10){
    newDino.species = dinoSpecies.slice(0, 7)+'...';
  }
  return newDino;
}

/***********************
 * ITERATION FUNCTIONS *
 **********************/
const defaultNotExtinct = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, extinct = false);

  return newDino;
}

const makeExtinct = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, extinct = true)

  return newDino;
}

const isCarnivore = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  return newDino.carnivore;
}

const isExtinct = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  return newDino.extinct;
}

const isTriassic = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  return newDino.period == 'Triassic';
}

const isJurassic = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  return newDino.period == 'Jurassic';
}

const isCretaceous = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);

  return newDino.period == 'Cretaceous';
}

const singularizeDinos = function(dino){
  const singularDin = [];
  for(const singular of dino){
    singularDin.push(makeSingular(singular))
    } 
    return singularDin;
}

const truncateDinos = function(dino){
  const newDino = [];
  for(const newD of dino){
    newDino.push = truncateSpecies(newD);
  }
  return newDino;
}
const makeAllExtinct = function(dino){
  const newDino = [];
  for(make of dino){
    newDino.push = isExtinct(make);
  }

  return newDino;
}
const carnivoresOnly = function(dino){
  const newDino = [];
  for(const only of dino){
    newDino.push(isCarnivore(dino));
  }
  return newDino;
}
const  herbivoresOnly = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)

  return newDino;
}
const  extinctOnly = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)

  return newDino;
}
const  notExtinct = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)

  return newDino;
}
const  triassicOnly = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)

  return newDino;
}
const  notTriassic = function(dino){
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)

  return newDino;
}


/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isNotExtinct === 'undefined') {
    isNotExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isNotExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
}
