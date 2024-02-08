// Create a file that combines all our name programs and runs them


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
