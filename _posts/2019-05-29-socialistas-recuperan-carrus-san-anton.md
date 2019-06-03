---
layout: widepost
title: "Los socialistas recuperan el voto en el barrio de Carrús y San Antón"
subtitle: "El voto al partido socialista en los barrios obreros de Elche, fragmentado en elecciones anteriores entre otras formaciones, ha regresado al partido de Carlos González"
author: enrique 
categories: [ resultados ]
image: assets/images/psoemuni.jpg
---
Los buenos resultados obtenidos por el PSOE en las elecciones municipales, lo que les ha aupado de 8 concejales a 12, les permitirá gobernar con comodidad. Los barrios de clase obrera como Carrús, que es también el más poblado del casco urbano, con alrededor de 70.000 vecinos, o San Antón han dado un giro a estas elecciones con un apoyo mayoritario al partido socialista. En 2015, el partido socialista obtuvo el apoyo de 29.071 ilicitanos y el 29,63% del total del voto y en estas elecciones han sido 37.351 votantes, lo que les supone el 36,79% del total.

{% include /maps/elcHPSOE.html %}

Del total de las secciones censales que constituyen el barrio de Carrús de norte a sur y de este a oeste del mismo, el partido socialista ha conseguido auparse con la mitad de los votos e incluso en 23 de ellas superar esa barrera. Los casos más significativos se encuentran en el distrito 3 sección 21, contiguo al jardín 1 de mayo, donde es la fuerza más votada con el 57% del total, y en el distrito 4 sección 10, frente al jardín de Andalucía, en el que también el 57% del electorado eligió a dicha formación. Otros casos destacables se encuentran en las dos secciones del barrio de San Antón (2-8 y 2-6), donde el partido de Carlos González también supera la mayoría con el 54% y 51% respectivamente. Cabe destacar en esta zona y como dato curioso, que en uno de los baluartes históricos del PSOE como es el barrio de los Palmerales (distrito 2 secciones 10 y 9), este partido no alcanza la mayoría del voto quedándose en el 47% y 45% respectivamente.

Cabe destacar los buenos resultados obtenidos en casi todas las secciones de la zona de Nuevo Altabix, donde el voto a Ciudadanos había ido cogiendo fuerza en los últimos años. En esta zona gana prácticamente en todas las secciones, excepto en la 1-21, zona de la Ciudad Deportiva donde el PP es el partido más votado y en la 2-5, cerca de la plaza de Benidorm, donde existe un empate entre PP y PSOE, algo que también ocurre en la 5-12, a lo largo de la calle Lope de Vega, donde se repite ese empate.

En el caso de las pedanías y sus secciones solo en dos de ellas logra mayoría absoluta. A destacar los buenos resultados en la de Carrús (distrito 7 sección 2) donde obtiene el 35% del total del voto, y en Torrellano donde se alza con el 30% del total del escrutinio.

<div class="flourish-embed" data-src="visualisation/386117"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

En la evolución del voto por secciones el caso más curioso se da en el distrito 4 sección 5, junto al parque de la Aparadora, ya que del 2007 al 2015 sufrio una caida en barrena del 49,16% al 23,05%, pero en estas últimas elecciones vuelve a unos resultados parecidos en  2007 y se posiciona en el 45,88%.

{% include /maps/VariacionesPSOEMpales19.html %}

En 2015 una gran mayoría de las secciones censales de Elche habían ido perdiendo el característico color rojo que es el distintivo del partido socialista. La irrupción de nuevos partidos con marcas nacionales y otros partidos localistas habían roto la rueda del bipartidismo y los socialistas se vieron afectados en su mapa de calor. Pero en estas elecciones y quizás arrastrados por el conocido como efecto Bandwagon, (que es una teoría que sugiere que existe gente que vota por el bando ganador), y dados los buenos resultados del PSOE a nivel nacional, se concretaría en todos aquellos que ven la causa ganadora y triunfalista como la suya propia. Por lo tanto en el mapa de calor de 2019 se aprecia un claro retorno al color rojo en muchas secciones censales perdidas en anteriores elecciones.

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales de las elecciones municipales de 2015 en la sección 14 del distrito 7 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1KQXKOpb7Vh9nDM5oFVVR9pdp17jLWdkJoz7ND52hhcU/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>