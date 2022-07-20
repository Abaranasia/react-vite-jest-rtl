## React 18 project with Vite, Jest and React Testing Library
Simple React v18 project setup with Vite, Jest and React Testing Library. It contains a few helpers and a simple component with their corresponding tests to ensure everything works fine.

### Create a react based on vite project
``` sh
yarn create vite
```

### Install Jest
 ``` sh 
 yarn add --dev jest
 ```
 
Add to scripts section in ***package.json***:
 ``` js
{ "test": "jest" --watchAll } 
 ```

#### Add Jest types
```sh
yarn add --dev @types/jest
 ```
 
#### Jest Babel configuration
```sh
yarn add --dev babel-jest @babel/core @babel/preset-env
```

#### Configure Babel to target your current version of Node
Create a **babel.config.json** file in the root of your project
Add:
```json
{
  "presets": [
    [
      "@babel/preset-env",
      { "targets": { "node": "current" } }
    ]
  ]
}
```

#### Instal whatwg-fetch and setting jest polyfill
We need a fetch function for testing and a polyfill for it
```sh
yarn add -D whatwg-fetch
```

Create ***jest.config.cjs*** and add:
```sh
module.exports = {
  setupFiles: ['./jest.setup.js']
}
```

Create ***jest.setup.js*** and add:
```sh
import 'whatwg-fetch';
```

### Install React Testing Library
```sh
yarn add -D @testing-library/react
```

#### Install jest-environment-jsdom
```sh
yarn add -D jest-environment-jsdom
```

#### Install @babel/preset-react
```sh
yarn add -D @babel/preset-react
```

#### Config Jest and Babel to use RTL
Add to ***jest.config.js***:

```js
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js']
}
```

Add to ***babel.config.json***:

```json
{
  "presets": [
      // "@babel/preset-env", { "targets": { "node": "current" } },
      ["@babel/preset-env", { "targets": { "esmodules": true } }],
      ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```

### Update packages
```sh
yarn
 ```
 
### Run project
```sh
yarn run dev
 ```
