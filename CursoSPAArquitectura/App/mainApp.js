/**
 * Created by Jose Mansilla on 22/12/14.
 */
requirejs.config({
    paths:{
        sammy: '../scripts/sammy',
        jquery: '../scripts/jquery-2.0.3.min',
        handlebars: '../scripts/handlebars.min'
    },

    shim: {
        'handlebars': {
            exports: 'Handlebars'
        }
    }
});

define(['router', 'handlebars', 'jquery'],
    function(router){
  /*      var renderParams = function(params){
            alert("Parametros : " + params.param);
        };

        var greterInitial = function(){
            alert("Saludo inicial");
        }
  EJEMPLO 2
        router.map({ route: '#:param', action: renderParams});
        router.map({ route: '', action: greterInitial});*/

        /*
        Ejercicio 3.
         */
        router.map({ route: '#films', module: 'films', title: 'Buscardor de peliculas', visible: true});
        router.map({ route: '#viewDetailFilms/:title', module: 'viewDetailFilms', title: 'Detail film', visible: true});
        router.map({ route: '#view1/:param/:param2', module: 'view1', title: 'Vista 1', visible: true});
        router.map({ route: '#view2/:param/:param2', module: 'view2', title: 'Vista 2', visible: true });
        router.map({ route: '', module: 'default', title: 'Ejemplo', visible: false });
        router.activate();
    });