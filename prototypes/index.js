

const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const orangeKitties = kitties.filter(kitty => kitty.color === 'orange');
    const result = orangeKitties.map(kitty => kitty.name);
    return result;

    // Annotation:
    // I knew both filter and map would return a new array, which is what I needed, but kitties.filter returned the entire object of the orange kitty and wouldn't recognize kitty.name, and kitties.map returned an array with 4 items, two of which were kitties' names and two undefined.  Also unhelpful.  So I ended up having to use both.
  },

  sortByAge() {
    // Sort the kitties by their age
    const result = kitties.sort((kittyA, kittyB) => {
      return  kittyB.age - kittyA.age;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map(kitty => {
      kitty.age = kitty.age + 2;
      return kitty;
    });
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    //***************** */
    //**** check for truthy values rather than falsy */
    // array--What am I given?
    // obj-- What do I want back?
    // reduce-- what prototype methods can I reach for to do this?

    //** */reverse conditional to make it easier to read
    //** PSEUDO CODE FIRST work in repl, instructor driving */

    //* 1 : 1 dataset, 1 prototype
    //* 2 : 1 dataset, 2 prototypes
    //* 3 : 2 / 1
    //* 4 : 2 / multiple prototypes




    const result = clubs.reduce((addMembers, club) => {
      club.members.find(member => {
        if(!addMembers[member]) {
          addMembers[member] = [];
        }
        if (addMembers[member]){
          addMembers[member].push(club.club);
        }
      });
      return addMembers;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]
    //* 
    //*
    //*
    //*
    //*result const , if you want more than one parameter for your callback function
    //*
    //************************************ */



    const result = mods.map((module) => {
      let newModElem = {};
      newModElem.mod = module.mod;
      newModElem.studentsPerInstructor = module.students / module.instructors;
      return newModElem;
    });








    // const result = mods.reduce((modRatios, module) => {
    //   const studentRatio =  module.students / module.instructors;
    //   const modRatio = {
    //     mod: module.mod,
    //     studentsPerInstructor: studentRatio
    //   };
    //   modRatios.push(modRatio);
    //   return modRatios;
    // }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    //Iterate through cakes array with .map
    //callback for map cake => 
    // for each cake, return a new object
    //object properties will be flavor: cake.cakeFlavor,
    // inStock: cake.inStock;


    const result = cakes.map(cake => {
      return {
        flavor: cake.cakeFlavor,
        inStock: cake.inStock
      };
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    // use .filter
    // callback fn cake =>
    // create conditional -- if the number is stock is anything other than 0 (cake.inStock !== 0)
    // should return array of cake objs without white chiffon and honey cakes

    const result = cakes.filter( cake => cake.inStock !== 0 );
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59
    // use .reduce on onlyInStock(?) to return a single value
    // accumulator = inventory (beginning at 0), curEl = cake
    // inventory += cake.inStock;
    // return inventory
    //
    // const cakesInStock = this.onlyInStock();
    const result = this.onlyInStock().reduce((inventory, cake) => {
      inventory += cake.inStock;
      return inventory;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    // iterate through cakes using reduce
    // accumulator = toppingsNeeded (begin with []), currentEl = cake
    // iterate through cake.toppings with forEach
    // callback topping =>
    // if toppingsNeeded array doesn't contain topping,(!toppingsNeeded[topping]) 
    // add topping to toppingsNeeded (toppingsNeeded += topping)
    //return toppingsNeeded;


    const result = cakes.reduce((toppingsNeeded, cake) => {
      cake.toppings.forEach(topping => {
        if (!toppingsNeeded.includes(topping)) {
          toppingsNeeded.push(topping);
        }
      });
      return toppingsNeeded;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    // iterate through this.allToppings with reduce
    // accumulator = list(begin with {}), currentElement = topping
    // on each iteration, add topping as key with 0 value
    // (list[topping]= 0)
    // iterate through cakes using find
    // callback cake => 
    // ////////////////////
    // same as all toppings except
    // in for Each topping, conditional is 
    //if list does not contain topping (!list[topping]) 
    // create key for topping and assign to 0(list[topping]= 0)
    // outside conditional, increase value by one (list[topping]++)

    const result = cakes.reduce((list, cake) => {
      cake.toppings.forEach(topping => {
        if (!list[topping]) {
          list[topping] = 0;
        }
        list[topping]++;
      });
      return list;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    //     // Create an array of just the front-end classrooms. e.g.
    //     // [
    //     //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //     //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //     //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //     //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    //     // ]

    //     // iterate using filter
    //     // callback => room
    //     // condition room.program === 'FE'

    const result = classrooms.filter(room => room.program === 'FE');
    return result;

    //     // Annotation:
    //     // Write your annotation here as a comment
  },

  totalCapacities() {
    //     // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    // ***************************************
    //  classrooms.reduce((capacities, room) {
    // let roomCap = room.program === 'FE' ? 'feCapacity' : 'beCapacity';
    // capacities[roomCapacity] += room.capacity;
    // }, { feCapacity: 0, beCapacity: 0 });

    //    if (room.program === 'FE) {
    // capacities.feCapacity += room.capacity;
    // } else {
    // capacities.beCapacity += room.capacity;
    // }
    // }, { feCapacity: 0, beCapacity: 0 });
    // **
    // **
    // **
    // **
    // **
    // **
    // **

    // reduce classrooms to return object
    // acc = capacity, current el = room
    // create variables feCapacity and beCapacity, assign to 0
    // conditional, if room.program is FE, add room.capacity to feCapacity(feCapacity = feCapacity + room.capacity) 
    // otherwise, add room.capacity to beCapacity
    //  🤬

    //   const result = classrooms.reduce((capacity, room) => {
    //     let feCapacityNum;
    //     let beCapacityNum;
    //     const feCap = classrooms.filter(room => room.program === 'FE').forEach((room) => {
    //       feCapacityNum += room.capacity;
    //     });
    //     const beCap = classrooms.filter(room => room.program === 'BE').reduce((capacity, room) => {
    //       capacity += room.capacity;
    //       return capacity;
    //     }, 0);
    //     capacity.feCapacity = feCap;
    //     capacity.beCapacity = beCap;
    //     // clean your keys to be returned in the proper format here
    //     // capacity = { feCapacity: feCapacityNum} maybe something like this
    //     return capacity;
    //   }, {});
    // ***********
    const result = classrooms.reduce((capacities, room) => {
      let roomCap = room.program === 'FE' ? 'feCapacity' : 'beCapacity';
      capacities[roomCap] += room.capacity;
      return capacities;
    }, { feCapacity: 0, beCapacity: 0 });
    return result;
    //   // Annotation:
    //   // Write your annotation here as a comment
  },

  sortByCapacity() {
    //   // Return the array of classrooms sorted by their capacity (least capacity to greatest)
    //   // 

    const result = classrooms.sort((roomA, roomB) => {
      return roomA.capacity - roomB.capacity;
    });
     
    return result;

    //   // Annotation:
    //   // Write your annotation here as a comment
  }
}; 







// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    // iterate throu breweries with reduce
    // acc = beerCount, currentEl = brewery

    const result = breweries.reduce((beerCount, brewery) => beerCount += brewery.beers.length, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    // iterate with reduce
    // acc  = breweryBeerCounts, current el = brewery
    // create beer count variable (let numbersOfBeers = brewery.beers.length)
    // add brewery object to breweryBeerCounts[]
    // return brewery beercounts
    // 

    const result = breweries.reduce((breweryBeerCounts, brewery) => {
      // const numberOfBeers = brewery.beers.length;
      breweryBeerCounts.push({
        name: brewery.name,
        beerCount: brewery.beers.length
      }); 
      return breweryBeerCounts;
    }, []);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    
    const result = breweries.reduce((mostAbvBeer, brewery) => {
      const currentHighest = brewery.beers.sort((beerA, beerB) => beerB.abv - beerA.abv)[0];
      let newHighest;
      if (newHighest === undefined || currentHighest.abv > newHighest.abv) {
        newHighest = currentHighest;
      }
      mostAbvBeer = newHighest;
      return mostAbvBeer;
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  
  
  
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]
    const result = instructors.map((instructor) => {
      let match = cohorts.find(cohort => instructor.module === cohort.module);
      console.log('this iteration: ', match)
    });
      
//
      
      
      
      

    
    return result;


  },


    // const result = instructors.forEach(instructor => {
    //   let match = instructors.find(instructor => instructor.module === cohort.module);
    //   console.log(match);
    // });
    // Annotation:
    // Write your annotation here as a comment
 

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    //  **** RYAN'S PRACTICE
    cohorts.reduce((acc, currentCohort) => {
      acc[`cohort${currentCohort.cohort}`] = 0;
      let instructorCount = instructor.filter((instructor) => {
        return instructor.module === currentCohort.module;
      }).length;
      acc[`cohort${currentCohort.cohort}`] = currentCohort.studentCount / instructorCount;
      return acc;
    }, {});

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra", 
    //    "Canis Minor", 
    //    "The Plow", 
    //    "Orion", 
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the 
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      { 
        'Steven Spielberg': 
          { 
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37 
          },
        'Joe Johnston': 
          { 
            'Jurassic Park III': 44 
          },
        'Colin Trevorrow': 
          { 
            'Jurassic World': 56
           },
        'J. A. Bayona': 
          { 
            'Jurassic World: Fallen Kingdom': 59 
          } 
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      }, 
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  dinosaurPrompts
};