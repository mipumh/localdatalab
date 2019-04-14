
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "Black Hole 404Esta página no existe, se la ha tragado el agujero negro.  Por favor, vuelva por la estela que le trajo hasta este rincón de la galaxia o suba a la nave por aquí.  "
    }, {
    "id": 1,
    "url": "http://localhost:4000/equipo",
    "title": "¿Quiénes somos?",
    "body": "  Local Data Lab es un grupo de trabajo compuesto por profesionales, profesores y alumnos de Periodismo de la Universidad Miguel Hernández. Nacimos en febrero de 2019 con el fin de descubrir y poner en práctica el potencial del periodismo de datos en el ámbito local.  Estamos convencidos de que es posible y necesario obtener, analizar y visualizar información de manera rigurosa, relevante y útil en nuestro entorno más cercano. Creemos en la transparencia (ajena y propia), nos encanta trastear con cualquier tecnología, buscamos destapar buenas historias y aspiramos a contarlas de la mejor manera posible. Hemos arrancado con los datos de la maratón electoral de 2019, con el foco en los resultados y la campaña de las elecciones generales y locales en Elche. Pero después seguiremos analizando a fondo cuestiones como la vivienda, el transporte, la seguridad o el medio ambiente. OrganizadoresMáster Periodismo Periodismo UMH      	    Miguel Carvajal:     Profesor en @PeriodismoUMH y director del @mipumh. Leo y escribo sobre innovación y modelos de negocio en el periodismo.          	    Miguel Carvajal:     Estudiante de Periodismo UMH.          	    Miguel Carvajal:     Estudiante de Periodismo UMH.          	    Miguel Carvajal:     Estudiante de Periodismo UMH.          	    Miguel Carvajal:     Estudiante de Periodismo UMH.          	    Miguel Carvajal:     Estudiante de Periodismo UMH.          	    Miguel Carvajal:     Estudiante de Periodismo UMH.    "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categorías",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Inicio",
    "body": "        Así han sido las elecciones en Elche hasta ahora: #histórico, #discurso, #redes y #programas. En #resultados publicaremos los análisis tras las elecciones de 2019: a partir de las generales y autónomicas del 28A y, sobre todo, de las municipales del 26M.     Proyectos:                                                                                                               La izquierda pierde con la edad              :       Los resultados electorales de las últimas cuatro elecciones generales en Elche reflejan la influencia de la edad. Los votos, analizados por secciones censales, constatan que en las zonas con mayor. . . :                                                                                     12 Jun 2018                                                       "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/la-izquierda-pierde-con-la-edad/",
    "title": "La izquierda pierde con la edad",
    "body": "2018/06/12 - Los resultados electorales de las últimas cuatro elecciones generales en Elche reflejan la influencia de la edad. Los votos, analizados por secciones censales, constatan que en las zonas con mayor presencia de jóvenes, PSOE y Podemos obtienen mejores resultados que en las que reside una población con mayor edad. Algo similar sucede en Ciudadanos, donde el año de nacimiento de los ilicitanos ejerce una influencia todavía mayor. En el PP, en cambio, sucede lo contrario: sus resultados mejoran cuando crece la edad de sus electores. 0-19 años: Ciudadanos domina entre los padres con hijos a su cargo: Ciudadanos presenta la tendencia más positiva al tener en cuenta la presencia de menores de 19 años en las secciones censales de Elche. El partido naranja obtiene sus mejores resultados en las zonas en las que estos niños y jóvenes, la inmensa mayoría dependientes económicamente de sus padres, suponen un mayor porcentaje de la población. La línea del PSOE en estas zonas también crece, aunque de manera menos evidente. Este apoyo fue mucho mayor en 2008, cuando la mayor parte de sus mejores resultados se produjeron en las secciones más rejuvenecidas. La tendencia empezó a revertirse en 2011 y cambió definitivamente en 2015, coincidiendo con el surgimiento de los nuevos partidos. Esta variable apenas influye en el voto de Podemos. En el del PP, en cambio, sí se observa un claro descenso de sus resultados en las zonas con menor porcentaje de menores de 19 años, especialmente a partir de 2011. 20-39 años: el PSOE aún seduce a los millenial: 40-59 años: 60-79 años: Más de 79 años: "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});