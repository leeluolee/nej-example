
define(['./app.js',  '{pro}/util', 'util/chain/chainable'], function (App, util, $) {
    var app = new App(document.querySelector('body'));
    app.render();
});
