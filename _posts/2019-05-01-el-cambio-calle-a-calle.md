---
layout: widepost
title: "El cambio del voto de los ilicitanos, calle a calle"
subtitle: "El apoyo al bloque de la izquierda creció en todas las zonas de Elche, pero a costa de un retroceso de Podemos y Compromís frente al auge del PSOE. En la derecha, el descenso de PP contrastó con el empuje de Ciudadanos y Vox en gran parte del territorio ilicitano"
author: red 
categories: [ resultados ]
image: assets/images/image1.png
---
El 28 de abril se produjo un vuelco en la tendencia del voto en gran parte de las secciones censales de Elche. 

{% include /maps/Ganador.html %}

{% include /maps/Ganador_2.html %}

El crecimiento de las formaciones de derecha (Ciudadanos, PP y Vox) en las últimas citas con las urnas, especialmente en el centro y los barrios del oeste, se transformó en un despegue generalizado del bloque de izquierdas (Unidas Podemos, Compromís y PSOE). Pero los datos que se desprenden de los resultados las distintas formaciones reflejan importantes matices. En esta nueva entrega del Local Data Lab, analizamos y visualizamos la evolución de los votos y el cruce con las variables demográficas.

{% include /maps/VariacionesBqsComparada.html %}

### La izquierda gana terreno, pero se queda en el extrarradio

[El estudio del comportamiento de los bloques](https://localdatalab.umh.es/brecha-izquierda-derecha-elche/) refleja la mejora de la izquierda, pero también la brecha demográfica que todavía existe entre ambos lados del espectro ideológico y el bastión que todavía conserva la derecha en el centro de la ciudad.

<div class="flourish-embed" data-src="visualisation/339037"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

### El bipartidismo sólo pervive en la periferia y entre la población más envejecida

[El voto a PP y PSOE](https://localdatalab.umh.es/bipartidismo-en-el-extrarradio/) desciende especialmente en las pedanías y en las zonas con menor presencia de mayores de 60 años, pero resiste en las secciones con mayor inmigración y menor participación

<div class="flourish-embed" data-src="visualisation/333917"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

### El Congreso ilicitano sería de derechas

El Congreso de los Diputados, [solo con los votos de Elche volvería a ser conservador](https://localdatalab.umh.es/parlamento-ilicitano-28A/). Albert Rivera, líder de Ciudadanos, podría ser investido con por una coalición de derechas con una amplia mayoría en las bancadas del hemiciclo.

{% include /maps/VariacionesPSOE.html %}

### El cinturón rojo se abrocha en Elche

El centro y gran parte de [las pedanías se le siguen resistiendo al PSOE](https://localdatalab.umh.es/PSOE-periferia-de-rojo/), pero el fuerte apoyo de la mayor parte de los barrios periféricos otorgan una victoria holgada al partido socialista.

{% include /maps/VariacionesCS.html %}

### Ciudadanos por todas partes, pero sobre todo en las zonas jóvenes

El [partido de Albert Rivera recupera su fuerza](https://localdatalab.umh.es/ciudadanos-zonas-nuevas/) en secciones como Nuevo Altabix y cobra fuerza en las pedanías de Torrellano y la Hoya, donde consigue ser la fuerza más votada.

{% include /maps/VariacionesPP.html %}

### El PP se aferra al centro

La [caída generalizada de los votos al Partido Popular en Elche](https://localdatalab.umh.es/PP-solo-queda-centro-elche/) implican que el partido liderado por Pablo Casado sólo mantenga parte de su antiguo vigor en las manzanas más próximas a la Basílica de Santa María.

{% include /maps/VariacionesPodemos.html %}

### Podemos se queda en las afueras

El [caso de Unidas Podemos](https://localdatalab.umh.es/podemos-se-va-al-extrarradio/) es el opuesto al del PP. El descenso no es tan importante, pero sí notable. El partido morado sólo conserva parte de su fuerza en algunas de las zonas más alejadas del centro.

{% include /maps/VariacionesVox.html %}

### Vox asoma por el campo

La [irrupción de Vox](https://localdatalab.umh.es/vox-germina-campo-elche/), cuyos resultados fueron muy modestos en las pasadas elecciones, se notó en todas las zonas de la ciudad. Pero fue en algunas de las pedanías donde mayor apoyo registró la formación verde.

{% include /maps/VariacionesCompromis.html %}

### Los votos de Compromís sólo cambian de lugar

Compromís apenas mejoró los resultados globales que alcanzó en 2011, cuando se presentó por última vez en solitario a unas Generales. [La coalición mejoró en algunas zonas del sur](https://localdatalab.umh.es/compromis-solo-despega-sur/), especialmente de El Pla y El Raval, pero empeoró en secciones del norte como las de Carrús.

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales del 28A en la sección 2 del distrito 5 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1Tde3VYKVakCl2x8WzAm3xa9zMZvSS9LPbvzO9r6_Oco/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>




