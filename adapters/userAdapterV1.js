module.exports.buidlLeagaceyPayload = ctx => {
  const name = ctx.request.body.name.split(" ");
  return {
    firstName: name[0],
    lastName: name[1],
    email: ctx.request.body.email,
    password: ctx.request.body.password
  };
};

module.exports.buildLegaceyRespons = user => {
  return {
    name: user.firstName + " " + user.lastName,
    email: user.email,
    id: user.id
  };
};
