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

    let files = fs.readdirSync(path.join(location, 'procedures'));

    files.forEach((file) => {
      const procedures = require(path.join(location, 'procedures', file));
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
