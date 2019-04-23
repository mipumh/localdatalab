---
layout: post
title: "La inmigración se desplaza a la izquierda"
subtitle: "Los resultados electorales de PP y Ciudadanos mejoran cuanto mayor es el porcentaje de nacidos en España. Las zonas con mayor inmigración tienden a decantarse por Podemos y, sobre todo, por el PSOE"
author: felix 
categories: [ historico ]
image: assets/images/nacionalidad.png
---
El respaldo a los partidos que, en teoría, ponen más límites a la inmigración disminuye en las zonas de Elche con menor número de nacidos en España. Los datos deben analizarse con cautela, pero teniendo en cuenta que la mayor parte de los extracomunitarios no tienen derecho a voto en las elecciones generales, parece evidente que el rechazo a los inmigrantes no es mayoritario en sus vecindarios.

### Pocos inmigrantes y votos progresistas

<div class="flourish-embed" data-src="visualisation/297182"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Los resultados del PP mejoran cuanto mayor es el número de nacidos en España en las secciones censales ilicitanas. Lo mismo sucede en Ciudadanos, cuyos mejores resultados se producen en varias de las zonas con menor porcentaje de extranjeros de la ciudad. Con Podemos pasa lo contrario, y esta tendencia se acentúa en los resultados del PSOE, especialmente en las últimas elecciones generales.

### Ciudadanos fuera de la UE

<div class="flourish-embed" data-src="visualisation/297185"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Ciudadanos es el único partido cuyos apoyos tienden a reducirse conforme aumenta el porcentaje de residentes del resto de la Unión Europea. En el resto de formaciones, la tendencia es la contraria, aunque con especial énfasis en el PSOE.

### África no vira a la derecha 

<div class="flourish-embed" data-src="visualisation/297192"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Los mayores contrastes se encuentran al tener en cuenta la población del continente africano, especialmente del Magreb. En las secciones censales con mayor presencia de estos inmigrantes, el PP obtiene muchos de sus peores resultados. Sucede prácticamente lo opuesto al tener en cuenta la distribución del voto del PSOE, que conserva algunos de sus graneros de votos en diversas zonas como las de Carrús. Algo similar sucede al comparar a Ciudadanos y Podemos, cuyos resultados tienden a bajar y ascender respectivamente en estas zonas, aunque con curvas menos pronunciadas.

### Sudamérica conserva sus votos

<div class="flourish-embed" data-src="visualisation/297194"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

La influencia del porcentaje de nacidos en el continente americanos, casi siempre del sur, es menos trascendente en los votos registrados en las cuatro últimas elecciones generales en Elche. Aun así, el aumento de la presencia de este tipo de inmigrantes tiende a mejorar los resultados de los partidos de la izquierda y a empeorar los de la derecha. No obstante, esta influencia apenas se aprecia en los votos del PP y Podemos y, en cambio, se acentúa en Ciudadanos y el PSOE. El voto de estas zonas, por lo tanto, se hace fuerte en los partidos más tradicionales.     

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>.</p> 
  <p>Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1Tde3VYKVakCl2x8WzAm3xa9zMZvSS9LPbvzO9r6_Oco/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>