define(function () {
    var container = $("#container");
    var compiledViews = {};
    var viewEngine = {
        render: function (moduleName, params) {
            require(['modules/' + moduleName], function (module) {
                var template = compiledViews[moduleName];
                if (!template) {
                    template = Handlebars.compile($("#" + moduleName).html());
                    compiledViews[moduleName] = template;
                }
                module.render(template, params).then(function (html) {
                    container.html('');
                    container.append(html);
                    if (module.attachEvents)
                        module.attachEvents();
                });
            });

        }
    };
    return viewEngine;
});