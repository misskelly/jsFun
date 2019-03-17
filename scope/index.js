const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB 
     
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC 
          
        }
      }

      personC = personA;

      // Log C: personB 
    }

    changePerson();

    // Log D: personC

    const result = [
      { A: 'Ben' },
      { B: 'CardiB' },
      { C: 'CardiB' },
      { D: 'Paul' }
    ];     return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  /////////////////////////////////////////





  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }
      // Log A: number = //75
      function newNumber() {
        number = 64;
        // Log B: number//64
      }
      newNumber();
      // Log C: number//64
    }

    numberFunction();

    // Log D: number//30

    const result = [
      { A: 75 },
      { B: 64 },
      { C: 64 },
      { D: 30 }
    ]; 
    return result;

    // Annotation:
    // 
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';      

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting--1st, Hello

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting--2nd, Hey
      }

      newPhrase();

      // Log C: greeting--3rd, Hey
    }

    greetingFunction();

    // Log D: greeting--4th, Hello

    const result = [
      { A: 'Yo' },
      { B: 'Hey' },
      { C: 'Hey'},
      { D: 'Hello' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting//1st, hi

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting//2nd, welcome
      };

      newGreeting();

      // Log C: greeting//3rd, welcome
    };

    greetingGenerator();

    // Log D: greeting//4th, howdy

    const result = [
      { A: 'hi' },
      { B: 'welcome' },
      { C: 'welcome'},
      { D: 'howdy' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name// Nathaniel
      }

      // Log B: name // Nathaniel
    }

    // Log C: name// Brittany

    sayName();

    // Log D: name//Brittany

    const result = [
      { C: 'Brittany'},
      { A: 'Nathaniel' },
      { B: 'Nathaniel' },
      { D: 'Brittany' }
    ];    return result;
    // Annotation:
    // Write your annotation here as a comment
  },






  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog// 1. Spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog// 2. Spot

        dog = 'Biscuit';

        // Log C: dog// 3. Biscuit

      }

      rollOver();

      // Log D: dog// 4. Biscuit
    }

    petDog();

    // Log E: dog// 5. Biscuit

    const result = [
      { A: 'Spot' },
      { B: 'Spot' },
      { C: 'Biscuit'},
      { D: 'Biscuit' },
      { E: 'Biscuit'}
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },





  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit //1. 'reference error'

          const fruit = 'strawberry';
        }

        // Log B: fruit //2. mango
      }

      // Log C: fruit //3. mango
    }

    eatFruit();

    // Log D: fruit //4. apple

    const result = [
      { A: 'reference error' },
      { B: 'mango' },
      { C: 'mango'},
      { D: 'apple' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },






  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num //1. 4

      if (num < 5) {
        const num = 9;
        fn2(num);

        const newNum = num;

        // Log B: newNum//4. 9
      }

      newNum = num;
      // Log C: newNum//5. 4
    };

    const fn2 = function(num){
      // Log D: num //2. 9

      num = num + 1;
      // Log E: num//3. 10
    };

    fn1();

    const result = [
      { A: 4 },
      { D: 9 },
      { E: 10 },
      { B: 9 },
      { C: 4 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },






  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger//1. 75, 5. 55


      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger//2. 0, 6. 0
      }

      // Log C: hunger// 3. 75, 7. 55

    }

    eatSnack();

    hunger += 5;
    // Log D: hunger//4. 80


    eatSnack();
    // Log E: hunger//8. 55

    const result = [
      { A: 75 },
      { B: 0 },
      { C: 75 },
      { D: 80 },
      { A: 55 },
      { B: 0 },
      { C: 55 },
      { E: 55 },
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },





  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich//1. ketchup sandwich

    const addChipotle = () => {
      // Log B: toppings//3. undefined
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich//4. 'not a mediocre sandwich'
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping//2. gouda

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich//5. 'not a mediocre sandwich'
    // Log F: amandaBynes

    const result = [
      { A: 'ketchup sandwich' },
      { D: 'gouda' },
      { B: undefined },
      { C: 'not a mediocre sandwich' },
      { E: 'not a mediocre sandwich' },
      { F: 'National Treasure' },
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },





  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num 1. 7
    }

    foo();

    // Log B: num 2. 7

    const result = [
      { A: 7},
      { B: 7},
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },








  

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade 1. 95
      }

      addPoints();

      // Log B: grade 2. 90
    }

    losePoints();

    // Log C: grade 3. 90

    const result = [
      { A: 95 },
      { B: 90 },
      { C: 90 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num 1. 5
      num = 6;
      // Log B: num 2. 6
    }
    function second() {
      // Log C: num 3. !! ref error
      // ????????????????????
      let num = 7;
    }

    first();
    second();

    // Log D: num 4. 6

    const result = [
      { A: 5 },
      { B: 6 },
      { C: 'reference error' },
      { D: 6 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor 2. Pam

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor 3. Pam

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor 4. Louisa
      }

      rename();

      // Log D: instructor 5. Louisa

    }

    // Log E: instructor 1. Pam

    changeInstructor();

    // Log F: instructor 6. Louisa

    const result = [
      { E: 'Pam' },
      { A: 'Pam' },
      { B: 'Pam' },
      { C: 'Louisa'},
      { D: 'Louisa' },
      { F: 'Louisa' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe 2. flipflop
      // console.log(shoe)
      var shoe = 'boot';
    }

    // Log B: shoe 1. flipflop !! undefined 
    putOnShoe();
    // Log C: shoe 3. flipflop

    const result = [
      { B: 'flipflop' },
      { A: undefined },
      { C: 'flipflop' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch NEVER RUNS
        let lunch = 'sandwich';
      }
      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch 2. SOUP
    }

    orderLunch();

    // Log C: lunch 3. SOUP

    const result = [
      { B: 'soup' },
      { C: 'soup' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid 1. pandora
      wildKids.push(kid);
      // Log B: wildKids 2. ['Antigone', 'Pandora']
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid 3. Mandy
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid 4. 'Antigone'
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid; 5. Pandora
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      { A: 'Pandora' },
      { B: ['Antigone', 'Pandora'] },
      { C: 'Mandy' },
      { D: 'Antigone' },
      { E: 'Pandora' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName 1. Rody

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName 2. RodyToy

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName 3. tesla
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName RhodyToyDaniels

    const result = [
      { A: 'Rody' },
      { B: 'RodyToy' },
      { C: 'Tesla' },
      { D: 'RodyToyDaniels' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;