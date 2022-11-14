const router = require('express').Router();
const pizaRoutes = require('./pizza-routes');



//add prefix of `/pizzas` to routes created in `pizza-routes.js`

router.use('/pizzas', pizaRoutes);


module.exports = router;