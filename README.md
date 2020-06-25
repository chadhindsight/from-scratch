# Creating a react app from scratch

## About 
This is a code along I did with Alejandro Roman's react Workshop about his workflow when using react.

## PROJECT NOTES: 

### DEV Dependencies
Using dev dependencies allows us to not pollute our production environment with excess stuff it won't really need.
Main.js is a minified production build and Webpack by default uses production mode which optimizes for build size, but not build time. Split between webpack dev and webpack production.

When working with diff people of production you never push to the master branch. Instead push to specified remotes: 'git remote add git ssh blah blah ....'. Babel allows your new code to be backwards compatable with older browsers by transpiling down to be universally readable for older browsers. Loaders help bable play nice with your webpack config
Arrow functions good for immutability because of 'this' and also good to prevent confusion that might come up due to hoisting.

### ESLINT & PRETTIER
ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. Helps teams keep the same code formatting. Prettier removes all original styling and ensures that all outputted JavaScript conforms to a consistent style
