define([
  'text!./template/app.html',
  'text!pro/template/tpl.html',
  ],function( app, tpl ) {


    var App = function(el) {
        this.el = el;
        this.appStr = app;
        this.tplStr = tpl;
    };

    App.prototype.render = function() {
        this.el.innerHTML = ('NEJ up and running');
    };

    App.prototype.notCoverMethod = function() {
        this.el.innerHTML = ('this method hasn"t been covered')
        if(false){
          console.log('this branch hasn"t been coverd')
        }
    };


    return App;

});
