define(['router'], function (router) {

    var def = {
        render: function (template) {
            return new $.Deferred(function (dfd) {
                dfd.resolve(template(router));
            });
        },
        attachEvents: function () {
            $('.viewLink').on('click', function (e) {
                var param = $('#title').val();

                if (param){
                   $(this).attr('href', function () {
                       var referencia = this.href;
                       referencia = referencia.replace(':title', param);

                       return referencia;
                   });
                } else {
                    alert("Debe introducir el título de la pelicula a buscar, por favor.");
                    e.preventDefault();
                }
            });
        }
    };
    return def;
});