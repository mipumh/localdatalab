---
layout: widepost
title: "Compromís se refugia en el Oeste"
subtitle: "Valverde y El Altet perdieron la confianza en la coalición naranja, que pasó de un 17% del apoyo a un 7% y un 4% respectivamente en las elecciones del 26M"
author: gara 
categories: [ resultados ]
image: assets/images/compromuni.png
---
En 2015, Compromís se ganó el voto del 17% de los ciudadanos en la zona de Valverde y El Altet. Sin embargo, este 2019 el apoyo al partido ha disminuido más de un 10% en estas zonas. No obstante, aunque la implicación en las urnas ilicitanas haya caído en estas elecciones, en la zona Oeste de la ciudad casi han mantenido su porcentaje de votos naranjas, pasando de un 14% con una participación del 57% en 2015, a un 9% con una participación del 50% este 26M.

{% include /maps/elcHCompro.html %}

Compromís ha conseguido su mejor resultado en la sección 16 del distrito 7 (zona de Torrellano), donde el resultado ha sido un 11% de los votos con un 48% de participación. Si lo comparamos con los datos de 2015 (20% de los votos y un 66% de participación) se puede vislumbrar la clara caída del partido pero hay que tener en cuenta que también la participación de los ilicitanos fue bastante mayor ese año que lo que ha sido en este 2019.

Fue en la zona de la Avenida Ausiàs March (distrito 3, sección 23) donde la coalición naranja sacó su peor resultado, solo un 1% de los votantes confiaron en ellos. Cabe destacar que en las elecciones de  2015 fueron un 7% de los ciudadanos los que les dieron su confianza y aquí la participación no influye porque solo descendió de un 53% a un 41%.

<div class="flourish-embed" data-src="visualisation/386195"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Compromís perdió muchísimo apoyo en las elecciones nacionales de manera generalizada. Sin embargo, este 26M los ilicitanos han vuelto a darle una oportunidad, lo que significó una leve recuperación que puede apreciarse en la pendiente ascendente que marca el gráfico en casi todos los distritos. Es curioso el caso del distrito 2 sección 8 donde en las generales el partido solo obtuvo un 1’04% mientras que en las municipales llegó hasta el 5’65%. Por otro lado, si nos fijamos en la sección 23 del distrito 3 podemos observar que el cambio ha sido casi imperceptible pasando de un 0’73% el 28A a un 0’75% el 26M, además fue en esta zona de la ciudad (Avenida Ausiàs March) donde el partido sacó su peor resultado (1% de los votos).

{% include /maps/VariacionesComproMpales.html %}

La coalición no tiene (en líneas generales) un voto asentado ni fiel. El perfil de este partido en cuanto al porcentaje de votos varía mucho dependiendo de la zona y de la participación que ese año haya. Podría deducirse que la alta participación favorece al partido pero tampoco es una ecuación perfecta porque en muchos de los barrios es este mismo factor el que les ha perjudicado. En la misma ciudad hay un par de puntos donde reciben gran acogida, como por ejemplo en la zona nueva de Altabix. Pero lo que sí es ciencia cierta es que la gran parte del apoyo lo encuentran en  las pedanías.

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales de las elecciones municipales de 2015 en la sección 14 del distrito 7 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1KQXKOpb7Vh9nDM5oFVVR9pdp17jLWdkJoz7ND52hhcU/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>