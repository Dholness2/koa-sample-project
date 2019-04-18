"use strict";
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define(
    "Like",
    {
      fromUser: DataTypes.INTEGER,
      toUser: DataTypes.INTEGER
    },
    {}
  );
  Like.associate = function(models) {
    // associations can be defined here
  };
  return Like;
};
