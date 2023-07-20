# Cypress-Project

Using Cypress which covers basic and advanced use.

## Features

- Support multi environments config
- Visual testing
- Mochawesome Report
- Docker support
- Please note: some tests may fail, because for this project, more important thing is the structure of a good Cypress framework. Test cases would be different for different projects.

## Run in docker

Use docker compose (normally in CI)

```
docker-compose up e2e-local
```

or use below with customized params

- build image

```
docker image build -t cypress-project:107 .
```

- run container with params

```
docker run -i -v $PWD:/Cypress-Project -t cypress-project:107 yarn run test qa functional
```

- Where `cypress-project:107` is my local image
- Able to change env `qa` to `local` or `dev`
- `functional` means ONLY run e2e functional tests, if want to run visual test, use `visual` instead, or leave blank, which will run all functional and visual tests

## Run from local

### Build

```$xslt
yarn
```

### Functional Test

- Run with test env param

```$xslt
yarn run run:qa
```

or execute with `testRunner.sh` file

```
yarn run test local functional
```

- Run in GUI to debug

```$xslt
yarn run open:local
```

### Visual Test

Visual test cases in `/e2e/visual/` folder, run tests in this folder with above Test commands.

- Run visual test

```$xslt
yarn run test local visual
```

- Update baseline

```$xslt
yarn run update
```

### Reporter

- Generate HTML Report

```$xslt
yarn run merge:report
```

- Clear existing reports before RUN

```$xslt
yarn run clearReports
```

More refers to `package.json` file
