var url = require('url');

exports.port = process.env.PORT || 3000;
exports.hostname = process.env.HOSTNAME || 'localhost';
exports.protocol = process.env.PROTOCOL || 'http';


exports.base_url = url.format({
  port: exports.port,
  hostname: exports.hostname,
  protocol: exports.protocol
});