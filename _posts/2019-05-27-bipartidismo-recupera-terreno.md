---
layout: widepost
title: "El bipartidismo recupera terreno"
subtitle: "El auge del PSOE en la periferia, especialmente en Carrús, y el aguante del PP en el centro y las pedanías vuelve a teñir Elche de rojo y azul tras el 26M"
author: felix 
categories: [ histórico ]
image: assets/images/municipales.jpg
---
Los resultados electorales de las Elecciones Municipales del 26 de mayo han puesto de manifiesto el poder que aún conservan los partidos tradicionales en Elche. EL PSOE ha recuperado gran parte de la fuerza perdida en los últimos años en barrios como Carrús. Pero además aumenta sus apoyos en zonas como El Pla, a costa del Partido de Elche, Altabix o las pedanías de Torrellano y El Altet, principalmente a expensas de Ciudadanos. El PP consolida su hegemonía en el casco histórico y en gran parte de las partidas rurales, donde recoge una parte importante de los apoyos que Vox cosechó en las recientes Generales del 28 de abril.

### La derecha bebe del Vinalopó

{% include /maps/GanaMpales.html %}

El voto al bloque de derechas, especialmente al Partido Popular, cada vez se agrupa con mayor claridad en las zonas que bordean el río Vinalopó. La formación liderada en Elche por Pablo Ruz obtuvo sus mejores resultados en los aledaños de la basílica de Santa María, La Glorieta y en la avenida de la Comunidad Valenciana. Sus dominios se extendieron por el oeste hasta la iglesia del Corazón de Jesús y el Paseo Germanías, y por el este hasta el Centro de Congresos y la Plaza de Benidorm. Más allá de ahí, el PP conservó el respaldo mayoritario de dos zonas nuevas: la de la Policía Local y la de La Torreta.

El PSOE, por su parte, consolidó sus caladeros lejos del Vinalopó. Además de consolidar su apoyo en Carrús y Los Palmerales, el partido de Carlos González se acercó a los resultados de 2007 en zonas como El Pla o las manzanas tradicionales de Altabix.

### Los años del bicolor todavía quedan lejos

<div class="flourish-embed" data-src="visualisation/385184"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

La dinámica es evidente, sobre todo si se tienen en cuenta los resultados de las Elecciones Generales y Autonómicas de 2015, 2016 y 2019. Pero los partidos tradicionales todavía están lejos de las cifras que ambos alcanzaban hasta 2011. El 64,21% que PP y PSOE sumaron el 26M aún queda lejos del 81,47% que lograron hace ocho años o del 88,28% que cosecharon en 2003.

<div class="flourish-embed" data-src="visualisation/384019"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

La curva ascendente del bipartidismo se observa más claramente al incluir los datos de todas las convocatorias a las urnas desde 2003. Sobre todo, si se compara con la tendencia de formaciones como Ciudadanos, que ha obtenido sus peores resultados en Elche tras su humilde debut en las Europeas de 2014. Lo mismo sucede con Podemos e incluso Vox, cuyos resultados han empeorado claramente desde las Generales de Abril. Y algo similar se observa en Compromís, Partido de Elche e Ilicitanos por Elche, cuyos apoyos se han reducido a la mitad con respecto a las últimas Municipales de 2015.

### Mínimo histórico en la participación

<div class="flourish-embed" data-src="visualisation/383741"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Una de las claves del resultado electoral del 26M se encuentra, sin duda, en el descenso de la participación, que se sitúa estos comicios a la cola en todo el registro histórico de la ciudad (sin tener en cuenta las Europeas). Por eso es importante analizar esta tendencia, especialmente [en las distintas secciones de la ciudad](https://localdatalab.umh.es/participacion-bajo-minimos-periferia/).

### El Sistema d’Hondt premia a Vox, pero no afecta a la izquierda

<div class="flourish-embed" data-src="visualisation/387738"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Un análisis pormenorizado de cómo afecta [el Sistema d’Hondt a la distribución de los concejales](https://localdatalab.umh.es/confluencias-izquierda-alcaldia/) arroja luz sobre el valor de los votos de cada partido y sobre la influencia de las posibles confluencias de partidos a las urnas en el resultado final. Sólo las coaliciones más rocambolescas afectarían al cambio de la Alcaldía, a pesar de las diferencias entre cómo trata este mecanismo a los diferentes partidos.

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales de las elecciones municipales de 2015 en la sección 14 del distrito 7 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos sobre secciones censales se pueden descargar en esta hoja de cálculo. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1rR8YZJtD5yN11xedxczi_aAvJLXHoAdv1PZeBS0HZTc/edit?usp=sharing">esta hoja de cálculo</a>. Los datos generales con todo el histórico de elecciones en Elche están en <a href="https://docs.google.com/spreadsheets/d/1AyRBdCBjdV_C54y3GooL_nlmASRciUALSRh3qUo-KTg/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>