"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      state: DataTypes.STRING,
      city: DataTypes.STRING,
      zip: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE
    },
    {}
  );
  Profile.associate = function(models) {
    Profile.belongsTo(models.User);
  };
  return Profile;
};
