---
layout: widepost
title: "Compromís sólo despega en el sur"
subtitle: "La coalición sólo supera el 4% de los votos en algunas zonas de El Pla y El Raval tras concurrir en solitario a las Generales ocho años después"
author: felix 
categories: [ resultados ]
image: assets/images/compromis.png
---
Los pobres resultados de Compromís en su regreso en solitario a las Elecciones generales se explican, sobre todo, por el escaso apoyo generalizado que obtuvieron en amplias zonas del centro, de barrios como Carrús o de las partidas rurales del norte. La coalición mejoró sus resultados en secciones censales del sur, especialmente en calles clave de El Pla y El Raval, pero incluso ahí sus apoyos nunca llegaron al 5%.

{% include /maps/elxHCompromis.html %}

El mapa que Compromís dibujó el 28 de abril en Elche fue sin duda el más modesto y plano de los seis partidos más votados. La lista encabezada por Aitana Joana Mas en la provincia de Alicante sólo despuntó ligeramente en las manzanas que hay frente al Centro de Salud de El Raval (2_18) y en el cruce de las calles Pedro Juan Perpiñán con Hilarión Eslava (6_18). En muchas zonas de Carrús, en cambio, la coalición apenas superó el 1% del total de apoyos.

<div class="flourish-embed" data-src="visualisation/337375"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

### Escasa fidelidad

Ha transcurrido casi una década desde la última vez que Compromís se presentó en solitario a unas Generales y las variaciones son relativas, pero parece evidente que existe una importante volatilidad en el votante de esta formación. La zona que queda al sur del Puente de la Virgen, por ejemplo, en la que en 2011 un 5% de los ilicitanos votaron a la coalición, se situó el 28A sobre la media de apoyos al partido en la ciudad. En la zona de Parque 9 de octubre, donde Compromís obtuvo más de un 3% de apoyos en 2011, este año apenas obtuvo un puñado de votos.

### No importan los años ni el sexo

<div class="flourish-embed" data-src="visualisation/337790"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

La edad y el sexo ejercen escasa influencia en el apoyo a Compromís. La formación tiende a obtener más apoyos en las zonas con más niños y adolescentes y con una población de entre 40 y 59 años, mientras que cotiza a la baja en el resto de franjas. La mayor presencia de mujeres le favorece, pero muy ligeramente.

### Más apoyos en las zonas con menos inmigración

<div class="flourish-embed" data-src="visualisation/337789"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

La variable de la nacionalidad sí parece tener un poco más de repercusión. Compromís tiende a cosechar mejores resultados conforme disminuye el porcentaje de extranjeros en las secciones censales de la ciudad, especialmente de inmigrantes del norte de África.

### A Compromís sí le gusta participar

<div class="flourish-embed" data-src="visualisation/337788"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

A diferencia de lo que sucedió con el bloque de la izquierda el 28A, Compromís se vio favorecido por la participación. Gran parte de sus mejores resultados se registraron en las secciones censales en las que un mayor porcentaje de ilicitanos acudieron a su cita con las urnas. 

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales del 28A en la sección 2 del distrito 5 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1Tde3VYKVakCl2x8WzAm3xa9zMZvSS9LPbvzO9r6_Oco/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>