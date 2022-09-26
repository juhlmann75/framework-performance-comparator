# framework-performance-comparator
Tool to compare the performance of various frameworks
## Prerequisites

- [k6](https://k6.io/docs/getting-started/installation)
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install) (optional)

## K6 Installation

**Install dependencies**

```bash
cd k6
yarn install
```

## Running the test

To run a test written in TypeScript, we first have to transpile the TypeScript code into JavaScript and bundle the project

```bash
yarn webpack
```

This command creates the final test files to the `./k6/dist` folder.

Once that is done, we can run our script the same way we usually do, for instance:

```bash
k6 run dist/get-200-status-test.js
```

Run script and output results to a csv file:

```bash
k6 run --out csv=output/test_results.csv dist/get-200-status-test.js
```
Environment variables:

- DURATION=1m
- VUS=10
- ENDPOINT=http://localhost:8080/test

Example of using environment variables:

```bash
k6 run -e VUS=10 -e DURATION=1m -e ENDPOINT=http://localhost:8080/test --out csv=output/test_results.csv dist/get-200-status-test.js
```

## Writing tests

- The test code is located in `tests` folder
- The entry points for the tests need to have "_test_" word in the name to distinguish them from auxiliary files. You can change the entry [here](./webpack.config.js#L8).
- If static files are required then add them to `./assets` folder. Its content gets copied to the destination folder (`dist`) along with compiled scripts.

### Transpiling and Bundling

By default, k6 can only run ES5.1 JavaScript code. To use TypeScript, we have to set up a bundler that converts TypeScript to JavaScript code.

This project uses `Babel` and `Webpack` to bundle the different files - using the configuration of the [`webpack.config.js`](./webpack.config.js) file.

If you want to learn more, check out [Bundling node modules in k6](https://k6.io/docs/using-k6/modules#bundling-node-modules).