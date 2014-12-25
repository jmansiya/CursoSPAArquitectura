define(function () {
    
    var view1 = {
        render: function (template, params) {
            return new $.Deferred(function (dfd) {
                dfd.resolve(template(params));
            });
        }
    };
    return view1;
});