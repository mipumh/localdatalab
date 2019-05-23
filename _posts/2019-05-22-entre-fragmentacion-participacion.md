---
layout: widepost
title: "Entre la fragmentación y la participación"
subtitle: "32 años después de las primeras votaciones en Elche, la tendencia alcista de la movilización electoral es casi tan clara como la caída del bipartidismo"
author: felix 
categories: [ histórico ]
image: assets/images/municipales.jpg
---
Los resultados de las diez Elecciones Municipales celebradas en Elche reflejan la caída de los partidos con mayor tradición democrática (PP y PSOE) y el auge de diversas opciones hasta hace poco inexistentes o muy minoritarias. Los datos de las últimas Generales y Autonómicas acentúan aún más esta tendencia. El 26 de mayo se sabrá si esta curva se mantiene o si los ilicitanos dan otra oportunidad al bipartidismo. Una de las claves estará en la participación, que ha crecido en los últimos años, pero que presenta unos resultados muy desiguales en función de la sección censal de la ciudad. La otra, en el comportamiento de los bloques de izquierda y derecha.

### El bipartidismo no suma

<div class="flourish-embed" data-src="visualisation/369466"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

La suma de votos de PP y PSOE se situó en las Municipales de 2015, por primera vez en las últimas tres décadas, en el umbral del 50%. Los populares descendieron hasta niveles de 1991 y los socialistas cosecharon casi 14 puntos menos que su peor resultado en el histórico, en 1979, en las primeras elecciones locales. El auge de hasta cuatro partidos lo explica. El Partido de Elche superó el 5% de votos de 2011, pero a esta formación local se le sumó Ilicitanos por Elche, que incluso le adelantó hasta rozar el 6% de apoyos. Ciudadanos surgió de la nada hasta acercarse al 9%, pero la mayor irrupción fue la de Compromís, que durante años había estado presente con diferentes siglas, pero que en 2015 alcanzó el 12,5% de las papeletas.

<div class="flourish-embed" data-src="visualisation/360222"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

La tendencia incluso se acentúa al tener en cuenta todas las elecciones celebradas en Elche. Las últimas Generales y Autonómicas fueron las del sorpasso de Ciudadanos sobre PP. El descenso de Compromís, con respecto a las Municipales, se explica sobre todo por la entrada en liza de Podemos. Está por ver este 26M si el PSOE continúa con el cambio positivo de tendencia, tras más de una década de descenso, y si el PP ha tocado suelo o aún puede alcanzar los niveles de los años ochenta.

### Lo importante es participar 

<div class="flourish-embed" data-src="visualisation/372028"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

La participación será uno de los factores determinantes de los resultados del 26M. También una de las incógnitas. La tendencia ligeramente alcista de las últimas Elecciones Generales y, sobre todo, Autonómicas invita a pensar en una alta asistencia a las urnas en las locales. Es difícil estimar cómo influirá en la participación la coincidencia con las Europeas, tradicionalmente con menor movilización, pero que en 1999, el último año en el que coincidieron con las Municipales, alcanzaron uno de sus mejores resultados.

<div class="flourish-embed" data-src="visualisation/369427"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

El factor clave de la participación en Elche siempre es la sección censal. En el histórico global, la asistencia a las urnas es más bajo en las Elecciones Municipales que en el resto. Pero la diferencia siempre es mucho mayor si se comparan las distintas zonas de la ciudad. Entre las secciones con mayor participación, destaca la situada alrededor del Centro de Congresos (2_23, con un 78,4% en el conjunto en las municipales). Entre las que registran un balance más negativo, resaltan las manzanas situadas al sur del Parque 1 de Mayo (3_22, con un 50,71%), por debajo incluso que zonas como las del barrio de Los Palmerales (2_11).

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales de las elecciones municipales de 2015 en la sección 14 del distrito 7 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1KQXKOpb7Vh9nDM5oFVVR9pdp17jLWdkJoz7ND52hhcU/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>