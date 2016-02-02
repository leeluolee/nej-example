define(['../src/app.js', 'pro/util', 'util/chain/chainable'], function(App, util, $) {

    describe('just checking', function() {

        it('works for app', function() {
            var el = document.createElement('div');

            var app = new App(el);

            app.render();

            expect(app.appStr).toEqual('app');
            expect(app.tplStr).toEqual('tpl');

            expect(el.innerHTML).toEqual('NEJ up and running');
            expect($(el)._$text()).toEqual('NEJ up and running');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect([1,2,3].length).toEqual(3);
        });

    });

});
