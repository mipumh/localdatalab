---
layout: widepost
title: "Ciudadanos cede el terreno conquistado en las Generales de abril"
subtitle: "El partido de Rivera, que sorpassó al PP el 28A, no gana en ninguna sección estas elecciones. Pasa de los 25.569 votos de hace un mes a casi 9.000. La zona nueva de Altabix funde a rojo a excepción de Mesalina, que pasa a manos populares"
author: veronica 
categories: [ resultados ]
image: assets/images/ciumuni.png
---
Ciudadanos no ha tenido unos buenos resultados en estas elecciones. La polémica salida de dos concejales a pocas fechas de los comicios trajo la búsqueda contrarreloj de un cabeza de lista y esto, junto a la bajada de la marca a nivel nacional, les ha afectado profundamente. Si bien en las Municipales de 2015 no obtuvo la victoria en ninguna sección, el 28A fue la fuerza más votada en 11 de las 173 secciones ilicitanas. La zona nueva de Altabix, La Torreta y parte de Torrellano se tiñeron de naranja 28 días atrás para perder esa ventaja principalmente en favor de los populares y la abstención.

{% include /maps/elcHCiudadanos.html %}

Si en 2015 C’s irrumpe por primera vez en las municipales obteniendo el 9,64% y 10.694 votos, en esta reciente convocatoria, y tras la espectacular subida el 28A, los resultados no han sido los esperados, bajando al 8,82% con algo más de 8.900 votos, muy lejos del 20,09% con 26.569 sufragios del pasado abril.

Se trata de un voto bastante disperso por toda la ciudad y que oscila entre el 15% obtenido en las secciones 7-16 y 7-25 en Torrellano y el apenas 3% de las 2-9, 2-10 y 2-11, situadas en el barrio de Los Palmerales. Otra vez la parte nueva de Altabix, 1-17, 1-18, 1-19 y 1-20, y las 2-21, 2-22 y 2-24, cerca del Estadio Martínez Valero acaparan votantes naranjas, aunque con unos porcentajes de entre un 10% y un 13%, muy alejados de los de 2015.

<div class="flourish-embed" data-src="visualisation/337342"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Los naranjas han obtenido en estas elecciones un 8,82% del total, cerca del 9,64% de las municipales de 2015. La evolución del voto ha sido cuanto menos curiosa. C’s casi triplicó el número de votos tan solo un mes atrás, en las generales del 28 de abril, pero exactamente en 28 días cayó marcando su suelo electoral en su corta vida como partido de corte nacional. Un candidato poco conocido, la elevada abstención y el regreso a casa de los votos conservadores pueden explicar este descenso. El gráfico, en clara forma de V invertida así lo muestra visualmente.

{% include /maps/VariacionesCSMpales.html %}

Entre las secciones en que ha mejorado su porcentaje de voto en relación a las municipales de 2015 destacan la 7-4 en Torrellano, que pasa del 9% al 13% y la 1-1 en el centro, a espaldas del Ayuntamiento, de un 8% a un 12%. Con una subida de un 3%, la 7-15 en Matola, del 10% al 13% y con el mismo incremento la 3-31, en pleno Carrús, feudo socialista, del 8% al 11%

Por el contrario, donde más votos pierden los de Rivera, es en la sección 7-17, con un -9%, la 7-6, -6% y 7-24 con un retroceso del -4%, todas ellas en El Altet, pedanía en la que ha triunfado El Altet Decide, partido que defiende la segregación. En el casco urbano, la 1-21, en la zona de Mesalina, y la 2-14, alrededor del antiguo cine Alcázar, pierden un 4% de los sufragios.

Mirando el mapa de las variaciones de C’s entre las dos elecciones municipales, se ve claramente cómo, en general, han bajado en el centro, feudo de los populares, y han subido en las zonas de tradición socialista. En las pedanías hay alternancia en los resultados.
<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales de las elecciones municipales de 2015 en la sección 14 del distrito 7 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1KQXKOpb7Vh9nDM5oFVVR9pdp17jLWdkJoz7ND52hhcU/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>