import log from 'node-pretty-log';

function logger(type, info) {
  log(type, info);

  if (type === 'error') {
    process.exit(1);
  }
}

export default logger;
