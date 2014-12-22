/**
 * Created by Jose Mansilla on 22/12/14.
 */

define(['sammy'], function (Sammy) {
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
                    debugger;
                    sammy.get(route.route, function () {
                        if (route.action)
                            route.action(this.params);
                    });
                });
            });
            app.run();
        }
    };
    return router;
});