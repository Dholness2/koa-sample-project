'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    dateOfBirth: DataTypes.DATE
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
  };
  return Profile;
};