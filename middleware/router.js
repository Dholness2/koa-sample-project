const KoaRouter = require('koa-router');

const  router = new KoaRouter();
router.get('/', ctx => (ctx.body = "hellp world,foo buzz"));

module.exports = router;

