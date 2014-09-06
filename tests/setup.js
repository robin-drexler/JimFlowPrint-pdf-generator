var spawn = require('child_process').spawn;

exports.setup = {
  start: function (startCallback) {
    this.app = spawn('node', ['index.js'], {
        cwd: __dirname + '/../'
      }
    );

    this.app.stdout.on('data', function (data) {
      console.log('stdout: ',data.toString());

      if (data.toString().indexOf('Server started') !== -1) {
        startCallback();
      }
    });

    this.app.stderr.on('data', function (data) {
      console.log('ERROR: ',data.toString());
    });
  },
  done: function(done) {
    this.app.kill('SIGHUP');
    done();
  }
};