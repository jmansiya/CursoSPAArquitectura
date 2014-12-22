/**
 * Created by Jose Mansilla on 22/12/14.
 */
requirejs.config({
    paths:{
        sammy: '../scripts/sammy',
        jquery: '../scripts/jquery-2.0.3.min'
    }
});

define(['./App/router.js'],
    function(router){
        var renderParams = function(params){
            alert("Parametros : " + params.param);
        };

        var greterInitial = function(){
            alert("Saludo inicial");
        }

        router.map({ route: '#:param', action: renderParams});
        router.map({ route: '', action: greterInitial});
        router.activate();
    });