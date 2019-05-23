---
layout: widepost
title: "El bipartidismo se refugia en el extrarradio y la edad"
subtitle: "El voto a PP y PSOE desciende especialmente en las pedanías y en las zonas con menor presencia de mayores de 60 años, pero resiste en las secciones con mayor inmigración y menor participación"
author: felix 
categories: [ resultados ]
image: assets/images/bipartidismo.png
---
La suma de los dos partidos con mayor tradición democrática, PP y PSOE, tocó suelo el 28 de abril en Elche tras un leve repunte en 2016. La subida del PSOE en las elecciones generales no compensó el fuerte descenso del PP, especialmente en zonas como las pedanías y en las secciones censales con una población más envejecida. La mayor participación y la menor presencia de extranjeros tendió a favorecer a los nuevos partidos.

<div class="flourish-embed" data-src="visualisation/339037"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

La suma de los dos partidos con mayor tradición democrática, PP y PSOE, tocó suelo el 28 de abril en Elche tras un leve repunte en 2016. La subida del PSOE en las elecciones generales no compensó el fuerte descenso del PP, especialmente en zonas como las pedanías y en las secciones censales con una población más envejecida. La mayor participación y la menor presencia de extranjeros tendió a favorecer a los nuevos partidos.

El bipartidismo se resintió considerablemente en todos los rincones de Elche, pero con diferente intensidad. En el barrio de Los Palmerales (2_10 y 2_11), gracias sobre todo al apoyo al PSOE, el descenso de los partidos convencionales fue reducido. Algo similar sucedió en las manzanas que rodean el parque 1 de Mayo (3_17). Las principales caídas, en cambio, se registraron en gran parte de las partidas rurales. Es especialmente notable el caso de la Algoda (7_23), que hasta 2011 estaba entre las zonas con mayor apoyo a los partidos convencionales. El castigo también fue considerable en zonas como las de la Ciudad Deportiva (1_17) o el Huerto de Travalón (2_24). 

<div class="flourish-embed" data-src="story/40035"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

### La juventud huye del convencionalismo

La edad parece ejercer una influencia considerable en el apoyo a PP y PSOE. Los mejores resultados de los dos partidos más tradicionales se registran en las zonas con mayor presencia de ilicianos con más de 60 años. Estos apoyos también tienden a mejorar en las zonas con mayor presencia de inmigrantes. La curva más clara se obtiene al tener en cuenta la participación: las secciones censales en las que más ilicitanos fueron a las urnas prestaron menor apoyo a PP y PSOE.

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales del 28A en la sección 2 del distrito 5 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1Tde3VYKVakCl2x8WzAm3xa9zMZvSS9LPbvzO9r6_Oco/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>