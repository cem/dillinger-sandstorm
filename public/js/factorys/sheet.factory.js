
'use strict';

module.exports =
  angular
  .module('diDocuments.sheet', [])
  .factory('Sheet', function() {

  return function(sheetData) {

    angular.extend(this, {
      id: new Date().getTime(),
      title: 'Untitled Document.md',
      body: ''
    });

    return angular.extend(this, sheetData);
  };

});
