/**
 * Created by Jose Mansilla on 25/12/14.
 */
define(function(){
    var dataServices = {
        getMovie: function(title){
            return new $.Deferred(function(dfd){
                var cacheMovie = localStorage.getItem(title);
                if(cacheMovie){
                    dfd.resolve(JSON.parse(cacheMovie));
                }else{
                    $.getJSON('http://www.omdbapi.com', { t: title }).then(function(res){
                            localStorage.setItem(title, JSON.stringify(res));
                            dfd.resolve(res);
                        });
                }
            }).promise();
        }
    }

    return dataServices;
});