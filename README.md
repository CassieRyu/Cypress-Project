# Cypress-Project
Using Cypress which covers basic and advanced use.

### Features
* Support multi environments
* Visual testing
* Mochawesome Report
* Docker support
* Eslint

### Run in docker
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

### Run from local
#### Build
```$xslt
npm install
```
#### Test
* Run in headless mode
```$xslt
npm run test
```
can add env and suite arguments
e.g. `npm run test local functional`

* Run in GUI
```$xslt
npm run open:local
``` 
More refers to `package.json` file

