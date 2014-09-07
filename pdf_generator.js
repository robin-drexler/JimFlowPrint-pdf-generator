var phantom = require('phantom');
var tmp = require('tmp');

/**
 *
 * @param html
 * @param url
 * @param renderCb path
 */
exports.renderTicketPdfToTmp = function(html, url, renderCb) {
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.set('paperSize', {
        width: '148mm',
        height: '105mm',
        orientation: 'landscape'
      }, function () {
        page.setContent(html, url, function () {
          tmp.tmpName(function (err, path) {
            if (err) throw err;
            path += '.pdf';

            page.render(path, {format: 'pdf'}, function () {
              ph.exit();
              renderCb(path);
            });
          });
        });
      });
    });
  });
};
