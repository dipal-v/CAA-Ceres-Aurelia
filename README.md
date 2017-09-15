# CAA-Ceres-Aurelia (typescript)

Based on aurelia-skeleton-navigation-webpack (typescript)


# Original Readme:


## Running The App

Before you start, make sure you have a recent version of [NodeJS](http://nodejs.org/) environment *>=6.0* with NPM 3 or Yarn.

From the project folder, execute the following commands:

```shell
npm install # or: yarn install
```

This will install all required dependencies, including a local version of Webpack that is going to
build and bundle the app. There is no need to install Webpack globally. 

To run the app execute the following command:

```shell
npm start # or: yarn start
```

### for development

Open another shell

```shell
$ ./node_modules/.bin/json-server dummy.json
```

Then in your current shell

```shell
$ source environment-test.sh
$ npm start
```

For ppwetest01, please put this one:

export PUBLIC_PATH='/caa-ceres-aurelia/'

This command starts the webpack development server that serves the build bundles.
You can now browse the skeleton app at http://localhost:8080 (or the next available port, notice the output of the command). Changes in the code
will automatically build and reload the app.

### Running with Hot Module Reload

If you wish to try out the experimental Hot Module Reload, you may run your application with the following command:

```shell
npm start -- webpack.server.hmr
```

## Feature configuration

Most of the configuration will happen in the `webpack.config.js` file.
There, you may configure advanced loader features or add direct SASS or LESS loading support.

## Bundling

To build an optimized, minified production bundle (output to /dist) execute:

```shell
npm start -- build
```

For development

npm start -- webpack.build.development

To build 

To test either the development or production build execute:

```shell
npm start -- serve
```

The production bundle includes all files that are required for deployment.

## Documentation

```shell
npm start -- doc
```

And the `documentation` folder will have all you need.

And if you do

```shell
npm start -- doc.watch
```

## Running The Tests

This skeleton provides three frameworks for running tests.

You can choose one or two and remove the other, or even use all of them for different types of tests.

By default, both Jest and Karma are configured to run the same tests with Jest's matchers (see Jest documentation for more information).

If you wish to only run certain tests under one of the runners, wrap them in an `if`, like this:

```js
if (jest) {
  // since only jest supports creating snapshot:
  it('should render correctly', () => {
    expect(document.body.outerHTML).toMatchSnapshot();
  });
}
```

### Jest + Jasmine 2

Jest is a powerful unit testing runner and framework.
It runs really fast, however the tests are run under NodeJS, not the browser.
This means there might be some cases where something you'd expect works in reality, but fails in a test. One of those things will be SVG, which isn't supported under NodeJS. However, the framework is perfect for doing unit tests of pure functions, and works pretty well in combination with `aurelia-testing`.

To create new Jest tests, create files with the extension `.spec.ts`, either in the `src` directory or in the `test/unit` directory.

To run the Jest unit tests, run:

```shell
npm test
```

To run the Jest watcher (re-runs tests on changes), run:

```shell
npm start -- test.jest.watch
```


### Protractor (E2E / integration tests)

Integration tests can be performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e``` and name them with the extension `.e2e.ts`.

2. Run the tests by invoking

```shell
$ source environment-test.sh
$ npm start -- e2e
```

## Generate an new app

```
npm install -g gulp
```

the gulp task is:

```shell
gulp
```

And then cd `ceres-generator` and issue:

```shell
npm link
```

Then leave `ceres-generator` folder and go somewhere else to create your project folder.
Then issue: 

```shell
$ yo
? 'Allo Chenfu! What would you like to do? (Use arrow keys)
  Run a generator
❯ Aurelia Ceres 
  ──────────────
  Update your generators 
  Install a generator 
  Find some help 
  Get me out of here! 
(Move up and down to reveal more choices)
```

And choose 'Aurelia Ceres'


# The following items need re-work

## Exporting bundled production version

<<missing>>

## Run it inside a Docker container

Please go through installing docker page here: https://docs.docker.com/get-started/

Then come back to run these commands:

   ```shell
      sudo docker build -t ceres .
   ```

Above command builds the container. And then run it :)

   ```shell
      sudo docker run -p 9000:80 ceres
   ```

Then refresh your local browser. You would see it in action. What's more, you will
also see access log at your console output.

#### Configuration
The configuration is done by ```bundles.js``` file.
In addition, ```export.js``` file is available for including individual files.


# Docker
## Docker command

After building the app with

```shell
npm start -- build
```

you can build a container image and run it with the following commands:

```shell
docker build -t caaaurelia:dockerfile
docker run -p 9000:9000 -d caaaurelia:dockerfile 
```
This creates a container with the default dockerfile (which runs the app on NGINX)

then you can reach your app by opening http://<<DOCKER_MACHINE_IP>>:9000/

## Docker Compose

With docker-compose you can run the following command to run the app:

```shell
docker-compose up -d
```
The ```-d``` option runs the container in the background, omit to see the output written to your console window.

You can stop the app container with the following command:

```shell
docker-compose down
```

