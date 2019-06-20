const stream = require('stream');
const fs = require('fs');
const dataGen = require('../database/generattor.js');

const RECORDS = 10000000;
const ALERT_SETTING = 100000;

// const RECORDS = 500;
// const ALERT_SETTING = 100;

const logProgress = (id, worker) => {
  if (id % ALERT_SETTING === 0) {
    console.log(`${worker} pogress: ${Math.floor((id/RECORDS) * 100)}%`);
  }
}




const createCSV = (streamWriter, entries, csvStringifier, worker) => {
  let i = entries;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      logProgress(id, worker);
      let dataStr = csvStringifier(id);
      ok = streamWriter.write(dataStr);
    } while (i > 0 && ok);
    if (i > 0) {
      streamWriter.once('drain', write);
    }
  };
  write();
}