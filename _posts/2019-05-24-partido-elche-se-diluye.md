---
layout: widepost
title: "El Partido de Elche se diluye en toda la ciudad"
subtitle: "La formación liderada por Jesús Pareja no consigue mantener ni mejorar resultados prácticamente en ninguna sección censal"
author: enrique 
categories: [ resultados ]
image: assets/images/partimuni.jpg
---
Los malos resultados cosechados en las elecciones municipales, solo el 2,84% del electorado con 2887 votos apostaron por esta formación, hace que el Partido de Elche pierda a su único concejal y se quede sin representación en el Ayuntamiento. En las pedanías, el descenso estrepitoso le lleva a no superar el 4% del voto en ninguna de ellas. Incluso en alguna de las pedanías como Algoda, Matola, El altet o los Arenales el voto a esta formación no va más allá del 1% del total. En el casco urbano, la situación es similar, ya que en casi todas las secciones de la ciudad su descenso es claro desde las últimas elecciones municipales. 

{% include /maps/elcHPdElx.html %}

El descenso más pronunciado en cuanto a la evolución del voto se da en el distrito 6 sección 16, en la zona donde está ubicado el INSS. En 2007 y siendo un partido de reciente creación en aquella época, consiguió el 7,49% del voto, ya en 2011 se aupó hasta el 12,74%, en 2015 repite resultados con una leve caída que le supuso el 12,18%, pero en estas últimas elecciones el descenso en caída libre le llevó a alcanzar apenas el 1,67% del total del voto en dicha sección.

<div class="flourish-embed" data-src="visualisation/386080"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Cabe destacar, casi a modo anecdótico, las cuatro únicas secciones, todas ellas en el casco urbano, donde el Partido de Elche sí ha mejorado resultados respecto de las elecciones anteriores. En la tres primeras situadas en el barrio de los Palmerales (2-9, 2-10 y 2-11), el Partido de Elche consigue no solo no perder votos, sino además ampliar su número de votantes, el caso más destacado de las tres secciones ocurre en la 2-11 donde consigue más del doble de votos que en las pasadas elecciones, 5,02% en 2105 y 12,59% en las actuales. Posiblemente este aumento de votos hacia el Partido de Elche en el barrio de los Palmerales, haya supuesto que el PSOE no obtenga mayoría absoluta en un barrio donde los socialistas eran fuerza hegemónica.

El otro caso a recalcar de los cuatro sucede en el distrito 6 sección 6, en la Plaza de Crevillent, donde consigue 2,10 puntos mas de 2015 a 2019. El resto tal y como se puede apreciar en el mapa es una continua y sangrante pérdida de votos.

{% include /maps/VariacionesPdeElxMpales19.html %}

El Partido de Elche se presentó por primera vez a unas elecciones municipales en 2007, aunque en aquella ocasión el resultado obtenido fue casi anecdótico. En 2011 volvió a presentar su candidatura y en esa ocasión obtuvo 5.977 papeletas y superó el umbral del 5% (5,27%) lo que le supuso conseguir el único concejal fuera de los partidos tradicionales. Pero con la mayoría absoluta del Partido Popular, Jesús Pareja tuvo que hacer cuatro años de oposición sin concejalía. En 2015 mejora levemente sus resultados alcanzando el 5,85% del voto y 6.487 papeletas, repitiendo concejal y oposición al principio de la legislatura, y entrando en el equipo de gobierno cuando Cristina Martínez, de Ilicitanos por Elche rompe su acuerdo con el gobierno en coalición de PSOE, Compromís y el propio Ilicitanos, lo que permitió a Pareja entrar a gobernar junto a Compromís y PSOE y obteniendo por primera vez concejalía, en este caso la de Deportes. 

En estas últimas elecciones y como se apuntaba anteriormente, la formación de la palmera en su logo, cae estrepitosamente perdiendo 3.600 votos y a su único concejal. La pregunta, en relación a esta formación, para los próximos cuatro años es si podrá soportar el “invierno democrático” que se le avecina sin representación en el consistorio.

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales de las elecciones municipales de 2015 en la sección 14 del distrito 7 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1KQXKOpb7Vh9nDM5oFVVR9pdp17jLWdkJoz7ND52hhcU/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>