// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

//const { queryDb } = require('../support/utils/query');

let Client = require('ssh2-sftp-client');
let sftp = new Client();

const config = {
  host: '0.0.0.0',
  port: '22',
  username: 'foo',
  password: 'pass',
};
let rootPath = process.cwd();
// TODO: taskEvent[event] CANNOT handle undefined return, need to upgrade new version which fix this bug in the future
// TODO: Refer to: https://github.com/cypress-io/cypress/issues/2553

const uploadFileToRemote = (filePath, remoteFile) => {
  return sftp.connect(config).then(() => {
    return sftp.fastPut(rootPath + filePath, remoteFile, 'utf8');
  });
};

const deleteFileFromRemote = (remoteFile) => {
  return sftp.connect(config).then(() => {
    return sftp.delete(remoteFile).then(() => {
      return null;
    });
  });
};

const deleteRemoteDir = (remoteDir) => {
  return sftp.connect(config).then(() => {
    return sftp.rmdir(remoteDir, true).then(() => {
      return null;
    });
  });
};

const fs = require('fs-extra');
const path = require('path');
const fetchConfigurationByFile = (file) => {
  // const pathToConfigFile = path.resolve(process.cwd(), 'cypress/config', `${file}.json`);

  // return fs.readJson(pathToConfigFile);
  const pathOfConfigurationFile = `config/${file}.json`;
  return (
    file && fs.readJson(path.join(__dirname, '../', pathOfConfigurationFile))
  );
};

module.exports = (on, config) => {
  //on('file:preprocessor', cypressEslint());

  on('task', {
    uploadFile: (Obj) => {
      console.log('rootPath:', rootPath);
      console.log('Start upload file: ', Obj.localPath);
      return uploadFileToRemote(Obj.localPath, Obj.remotePath);
    },
    deleteRemoteFile: (remoteFile) => {
      console.log('start delete file from remote');
      return deleteFileFromRemote(remoteFile);
    },
    removeRemoteDir: (remoteDir) => {
      console.log('remove remote dir from remote');
      return deleteRemoteDir(remoteDir);
    },
    'db:query': (query) => {
      return queryDb(query);
    },
    chance: require("chance"),
  });

  const environment = config.env.configFile || 'local';
  const configurationForEnvironment = fetchConfigurationByFile(environment);
  return configurationForEnvironment || config;
};
