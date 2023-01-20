# Cypress-Project

Using Cypress which covers basic and advanced use.

## Features

- Support multi environments config
- Visual testing
- Mochawesome Report
- Docker support
- Please note: some tests may fail, because for this project, more important thing is the structure of a good Cypress framework. Test cases would be different for different projects.

## Run in docker

Use

```
docker-compose up e2e-local
```

or

```
docker-compose up e2e-dev
```

Now I only config `visual` test in docker, can change to `functional` or `all`
in docker-compose file

## Run from local

### Build

```$xslt
yarn
```

### Test

- Run in headless mode

```$xslt
yarn run test
```

can add env and suite arguments
e.g. `yarn run test local functional`

- Run in GUI

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
yarn run generateHTMLReport
```

- Clear existing reports before RUN

```$xslt
yarn run clearReports
```

More refers to `package.json` file
