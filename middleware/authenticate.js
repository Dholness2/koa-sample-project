module.exports = () => {
  return async (ctx, next) => {
    const { user } = ctx.session;
    if (user) await next();
    else ctx.throw(401, "Unauthorized Login required");
  };
};
