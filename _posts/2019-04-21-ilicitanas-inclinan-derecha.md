---
layout: post
title: "Las ilicitanas se inclinan hacia la derecha"
subtitle: "El PP obtiene mejores resultados cuando crece el predominio de mujeres en las secciones censales. Sucede lo contrario en PSOE y Podemos, que registran un mayor porcentaje de votos en las zonas con mayor presencia de hombres"
author: felix 
categories: [ histórico ]
image: assets/images/sexo.png
---
El género ejerce una influencia reducida, pero patente en los resultados de las cuatro elecciones generales en Elche. Los partidos de derecha o centroderecha se ven favorecidos por la mayor presencia de mujeres, mientras que esta variable perjudica a los de izquierda o centroizquierda.

<div class="flourish-embed" data-src="visualisation/297173"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Las secciones censales en las que el PP alcanzó un mayor porcentaje de votos se caracterizan por una mayor presencia de mujeres. Esta tendencia se observa en todos los comicios analizados sin variaciones aparentes. La línea de este cruce de variables es prácticamente imperceptible en Ciudadanos.

Esta relación se invierte en el caso de Podemos, donde a mayor presencia de mujeres, el porcentaje de votos obtenidos se reduce. Pero sobre todo se acentúa en el PSOE, que registra sus mejores resultados en las zonas de Elche con mayor porcentaje de hombres. Esta tendencia se observa en los cuatro comicios electorales, pero todavía más en las generales de 2016.

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>.</p> 
  <p>Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1Tde3VYKVakCl2x8WzAm3xa9zMZvSS9LPbvzO9r6_Oco/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>