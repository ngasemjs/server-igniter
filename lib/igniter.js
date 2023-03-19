const fs = require('fs');
const path = require('path');
const core = require('@ngasemjs/server-core');
const Database = require('@hamjs/query-builder');

function Igniter () {
  let location;

  this.database = (config) => {
    const database = new Database(config);
    core.inject('database', database);
    return this;
  };

  this.register = (loc) => {
    if (!location) {
      location = loc;
    }

    const pDirPath = path.join(location, 'procedures');
    let files = fs.readdirSync(pDirPath);

    files.forEach((file) => {
      const pFilesPath = path.join(location, 'procedures', file);
      const procedures = require(proceduresPath);
      Object.keys(procedures).forEach((name) => {
        core.def(name, procedures[name]);
      });
    });

    return this;
  };

  this.listen = async (callback) => {
    try {
      core.listen(8080, callback);
    } catch (error) {
      return error;
    }
  };

  this.getLocation = () => {
    console.log(location);
  };

  return this;
}

module.exports = Igniter();
