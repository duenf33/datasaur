/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function(species, period, carnivore, extinct = false){
  // if(extinct === undefined){
  //   extinct = false;
  // }
  return {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  }
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
  return makeDino(dino.species, dino.period, dino.carnivore, true) 
}

const isCarnivore = function(dino){
  return dino.carnivore;
}

const isHerbivore = function(dino){
  return !dino.isHerbivore;
}

const isExtinct = function(dino){
  return dino.extinct;
}

const isTriassic = function(dino){
  return dino.period === 'Triassic';
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
    newDino.push(truncateSpecies(newD));
  }
  return newDino;
}
const makeAllExtinct = function(dino){
  const newDino = [];
  for(const make of dino){
    if(isExtinct(make) !== true){
    newDino.push(make);
    }
  }

  return newDino;
}
const carnivoresOnly = function(dinos){
  const newDinos = [];
  for(const dino of dinos){
    if(isCarnivore(dino) === true){
      newDinos.push(dino);
    }
  }
  return newDinos;
}

const herbivoresOnly = function(dinos){
  const newDino = [];
  for(const dino of dinos){
    if(isHerbivore(dino) === true){
      newDino.push(dino);
    }
  }
  return newDino;
}

const  extinctOnly = function(dinos){
  const newDinos = [];
  for(const dino of dinos){
    if(isExtinct(dino) === true){
      newDinos.push(dino);
    }
  }
  return newDinos;
}
const  notExtinct = function(dinos){
  const newDinos = [];
  for(const dino of dinos){
    if(isExtinct(dino) !== true){
      newDinos.push(dino);
    }
  }

  return newDinos;
}
const  triassicOnly = function(dinos){
  const newDinos = [];
  for(const dino of dinos){
    if(isTriassic(dino) === true){
      newDinos.push(dino);
    }
  }

  return newDinos;
}

const  notTriassic = function(dinos){
  const newDinos = [];
  for(const dino of dinos){
    if(isTriassic(dino) === false){
      newDinos.push(dino)
    }
  }

  return newDinos;
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
