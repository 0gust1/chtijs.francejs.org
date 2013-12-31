module.exports = function(grunt) {

  var defaults = config = {
    
    'gh-pages': {
      publish: {
        base: 'dist',
        src: ['**']
      }
    },

    'cname': {
      publish: {
        options: {
          base: 'dist',
          domain: 'chtijs.francejs.org'
        }
      }
    }
  };

  return config;

};
