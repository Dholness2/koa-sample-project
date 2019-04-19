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
  return Like;
};
