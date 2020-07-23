

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Install Yarn](https://yarnpkg.com/en/docs/install)
- [Docker](https://www.docker.com/)
- [MongoDbCommunityServer](https://www.mongodb.com/download-center/community)

## ▶️ Setup & run

- `git clone repo`

### Without Docker

- be sure to `yarn install` on the server and client dir
- `cd client && yarn dev`

### With Docker

- `./run.sh`

## 📁 Project file structure

### Root files

- `index.html` root html file
- `index.js` code entry point, this is where everything begins
- `index.less` root less file
- `reducers.js` root reducer
- `routes.js` all routes are in here
- `store.js` code that creates the redux store

### Module structure

#### src/modules/{folder}

##### src/modules/home

### Other Structure

##### src/{folder}/assets

Images, videos etc.

##### src/{folder}/hocs

React higher order components.

##### src/{folder}/lib

Internal libraries, helpers, utils etc.

##### src/{folder}/state

Actions, reducers.

##### src/{folder}/static

Any kind of data that's defined client-side.

##### src/{folder}/styles

LESS styles..

# Code Styleguide

AirBnb Styleguide [link](https://github.com/airbnb/javascript/tree/master/react)

# Component Library

Ant Design [link](https://ant.design/docs/react/introduce)

### Code style

Code style is checked and enforced by [Prettier](https://prettier.io/)

Basic static analysis is done by [ESLint](https://eslint.org/)
