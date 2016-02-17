'use strict';

var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/v2/account', function (req, res) {


        res.render('index', model);


    });

};
