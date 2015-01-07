define(function () {
    
    var view2 = {
        render: function (template, params) {
            debugger;
            return new $.Deferred(function (dfd) {
                dfd.resolve(template(params));
            });
        }
    };
    return view2;
});