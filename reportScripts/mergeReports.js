const path = require('path');
const uuidv1 = require('uuid/v1');
const rimraf = require('rimraf');
const shell = require('shelljs');
const combine = require('./combine.js');

// generate mochawesome report
const data = combine.combineMochaAwesomeReports();
const uuid = uuidv1();

const reportname = 'report';
const reportdir= 'test-report';

combine.writeReport(data, uuid);
rimraf(path.join(__dirname, '..', 'reports'), () => { });
shell.exec(`./node_modules/.bin/marge ${uuid}.json  --reportDir ${reportdir}`, (code, stdout, stderr) => {
  if (stderr) throw stderr;
  rimraf(path.join(__dirname, '..', 'reports'), () => { });
  rimraf(path.join(__dirname, '..', `${uuid}.json`), () => { });
  shell.exec(`mv ./${reportdir}/${uuid}.html ./${reportdir}/${reportname}.html`);
});
