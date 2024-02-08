// A program that runs all of our js files that prints our names

// import { sayHelloToAndrew } from './HelloAndrew.js';
// import { sayHelloToBrennan } from './helloBrennan.js';
// import { sayHelloToCasey } from './helloCasey.js';
// import { sayHelloToPaul } from './helloPaul.js';

// // Call the functions to display their output
// console.log(sayHelloToAndrew);
// helloAndrew();

// console.log(sayHelloToBrennan);
// helloBrennan();

// console.log(sayHelloToCasey);
// helloCasey();

// console.log(sayHelloToPaul);
// helloPaul();



//================================================================================================

// combined.js
import('./HelloAndrew.js').then(({ default: helloAndrew }) => {
    import('./helloBrennan.js').then(({ default: helloBrennan }) => {
      import('./helloCasey.js').then(({ default: helloCasey }) => {
        import('./helloPaul.js').then(({ default: helloPaul }) => {
          // Combine the contents of all files
          const combinedContent =' ';
  
          // Print combined content
          console.log(combinedContent);
        });
      });
    });
  });




