const { rimraf } = require('rimraf');

const catchAsync = require('../helpers/catchAsync');

const path = require('path');
const fs = require('fs');

const portfolio = catchAsync(async(req, res) => {
    res.render('index', {
        title: 'Portfolio',
   }); 
 });

 module.exports = {
    portfolio,
};