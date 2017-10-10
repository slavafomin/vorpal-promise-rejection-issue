
const vorpal = require('vorpal')();

vorpal
  .command('test-callback')
  .action((args, callback) =>
    setTimeout(() =>
      callback(new Error('Something bad happened...')), 500
    )
  )
;

vorpal
  .command('test-promise')
  .action(args =>
    new Promise((resolve, reject) =>
      setTimeout(() =>
        reject(new Error('Something bad happened...')), 500
      )
    )
  )
;

// vorpal.parse(['', '', 'test-callback']);

vorpal.parse(['', '', 'test-promise']);
