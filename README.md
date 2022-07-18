## React 18 project with Vite, Jest and React Testing Library

### Create a react based on vite project
``` sh
yarn create vite
```

### Install Jest
 ``` sh 
 yarn add --dev jest
 ```
 
Add to scripts section in package.json:
 ``` js
{ "test": "jest" --watchAll } 
 ```

### Add Jest types
```sh
yarn add --dev @types/jest
 ```
 
### Jest Babel configuration
```sh
yarn add --dev babel-jest @babel/core @babel/preset-env
```

### Configure Babel to target your current version of Node
Create a **babel.config.cjs** file in the root of your project
Add:
```js
  module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };
```

### Install react Testing Library

### Update packages
```sh
yarn
 ```
 
### Run project
```sh
yarn run dev
 ```