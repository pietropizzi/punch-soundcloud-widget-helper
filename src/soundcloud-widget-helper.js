
var soundCloudHelper,
    _           = require('underscore'),
    helperUtils = require('punch').Utils.Helper,
    request     = require('request'),

    blockHelpers = {
      soundcloud: function() {
        return helperUtils.checkArgs(arguments, function(text) {
          var splitText, url, options = {},
              apiResponse;

          console.info('soundcloud-widget-helper.js: %o', text);

          if (!text) {
            return '';
          }

          splitText = text.split(' ');
          url = splitText.shift();
          _.each(splitText, function(textOption) {
            var split = textOption.split('=');
            options[split[0]] = split[1];
          });

          request('https://api.soundcloud.com/resolve.json?client_id=YOUR_CLIENT_ID&url=' + url, function(error, response, body) {
            console.info('soundcloud-widget-helper.js: %o', body);
          });
        });
      }
    };

soundCloudHelper = module.exports = {

  directAccess: function() {
    return { 'block_helpers': blockHelpers, 'options': {} };
  },

  get: function(basepath, fileExtension, options, callback) {
    return callback(null, { 'block': blockHelpers }, {});
  }
};
