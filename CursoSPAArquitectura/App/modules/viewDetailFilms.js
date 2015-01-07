define(['../../data/dataService'], function (dataService) {
    
    var viewDetailFilms = {
        render: function (template, params) {
            return new $.Deferred(function (dfd) {
                dataService.getMovie(params.title).then(function (res) {
                    if(res.Poster != 'N/A') {
                        res.hasMoviePic = true;
                    }
                    dfd.resolve(template(res));
                });
            }).promise();
        }
    };
    return viewDetailFilms;
});