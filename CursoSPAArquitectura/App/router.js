/**
 * Created by Jose Mansilla on 22/12/14.
 */

define(['sammy', 'viewEngine'], function (Sammy, viewEngine) {
    var router = {
        routes: [],
        map: function (route) {
            this.routes.push(route);
        },
        activate: function () {
            var self = this;
            var app = Sammy(function () {
                var sammy = this;
                $.each(self.routes, function (ind, route) {

                    sammy.get(route.route, function () {
                        if (route.action)
                            route.action(this.params);
                        else
                            viewEngine.render(route.module, this.params);
                    });
                });
            });
            app.run();
        }
    };
    return router;
});