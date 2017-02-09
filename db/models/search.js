'use strict';
module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define('Search', {
    user_id: DataTypes.INTEGER,
    user_search: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Search;
};