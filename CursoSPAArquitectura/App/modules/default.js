define(['router'], function (router) {

    var def = {
        render: function (template) {
            return new $.Deferred(function (dfd) {
                dfd.resolve(template(router));
            });
        },
        attachEvents: function () {
            $('.viewLink').on('click', function (e) {
                var param = $('#paramIn').val();
                var param2 = $('#parametro2').val();

                if ((param) && (param2)){
                   $(this).attr('href', function () {
                       var referencia = this.href;
                       referencia = referencia.replace(':param', param);
                       referencia = referencia.replace(':param2', param2);

                       return referencia;
                   });
                } else {
                    alert("Debe introducir los dos parámetros por favor.");
                    e.preventDefault();
                }
            });
        }
    };
    return def;
});