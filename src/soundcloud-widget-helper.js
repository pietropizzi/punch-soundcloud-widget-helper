module.exports = {

  get: function(basepath, file_extension, options, callback) {
    var self = this;

    return callback(null, { 'block': {} }, {});
  },

  directAccess: function() {
    return { 'block_helpers': {}, 'options': {} };
  }

};
