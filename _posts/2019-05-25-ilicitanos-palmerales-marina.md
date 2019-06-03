---
layout: widepost
title: "Ilicitanos sólo en Los Palmerales y La Marina"
subtitle: "El único paracaídas en la caída libre del partido de Cristina Martínez se encuentra en el barrio con mayor índice de pobreza y en la pedanía más meridional de la ciudad"
author: enrique 
categories: [ resultados ]
image: assets/images/ilicimuni.jpg
---
El descenso del partido de Cristina Martínez es generalizado en todas las secciones censales del casco urbano y el Campo de Elche. El partido, creado en 2015 como una “escisión” del Partido Popular, y que en aquella ocasión obtuvo magníficos resultados con 7.267 papeletas y el 6,55% del total de votos, lo que le condujo a entrar en el consistorio con dos concejales, en 2019 se hunde sin remedio, acompañando en su caída al Partido de Elche. Los resultados de esta formación en las últimas elecciones municipales suponen un descalabro para la formación que solo obtiene la confianza de 3.039 ilicitanos y el 2,99% del total de votos.

{% include /maps/elcHIlicitanos.html %}

En el anecdotario de esta formación en 2019 cabe destacar el distrito 2 sección 10, en el barrio de los Palmerales junto al Palacio de Justicia, que es el único lugar donde consigue superar la barrera de los dos dígitos en cuanto a intención de voto y obtiene el 19,35% del mismo, perdiendo tres puntos respecto a 2015, un sector donde la participación fue extremadamente baja y solo votaron el 36% del censo electoral. En esta sección censal es el único lugar donde los dos partidos localistas (Partido de Elche e Ilicitanos por Elche) consiguen arrebatar la mayoría absoluta al PSOE en un feudo históricamente socialista.

En el barrio de Carrús, donde en general obtuvo buenos resultados en 2015, en este 2019 su mejor resultado es en el distrito 3 sección 20, Alrededor del Centro de Salud Carrús Este, donde obtiene el 8% del voto, aunque se deja 9 puntos respecto a 2015. En el resto de secciones de este barrio es difícil encontrar lugares donde supere el 5% del voto.

En las pedanías, la situación es incluso más dolorosa, si cabe, para esta formación. La caída del voto de unas elecciones a otras les deja con resultados tan ínfimos que en lugares como el Altet apenas supera el 1% del voto. La única pedanía donde aguanta el tipo e incluso sube un punto respecto a 2015 es en la Marina, donde pasa del 6% al 7%. En el resto, no supera el 5% del voto en ninguna de ellas.

<div class="flourish-embed" data-src="visualisation/386342"></div><script src="https://public.flourish.studio/resources/embed.js"></script>

Si se analiza el gráfico de variaciones se puede observar que la mayor caída sufrida por Ilicitanos por Elche se da en el distrito 3 sección 8, frente al parque de las Chimeneas, ya que en 2015 obtuvo el 10,34% del voto y en estas últimas su resultado es del 0,0%, por lo que prácticamente ningún vecino de dicha sección apostó por esta formación.
Y como apuntábamos anteriormente en las pedanías sólo consigue una variación al alza en el distrito 7 sección 12, la Marina, donde pasa del 5,58% en 2015 al 6,84% del total del voto en 2019, en todas las restantes la merma de votos es constante.

Debido a los malos resultados obtenidos y sobre todo a la pérdida de su dos concejales, la situación de Ilicitanos por Elche respecto a su futuro es un caso parecido al del Partido de Elche. El partido de Cristina Martínez consiguió representación en las primeras elecciones a las que se presentó, con todo lo que eso supone para una formación. Pero los próximos cuatro años sin concejal en el consistorio serán duros y ahora toca ver si aguantaran haciendo política desde fuera, replegaran velas para volver a la carga en las próximas elecciones o en cambio se disolverán como el sueño de una noche de verano.

<div class="alert alert-secondary" role="alert">
  <h4 class="alert-heading">Nota metodológica</h4>
  <p>Los datos sobre resultados electorales distribuidos por secciones censales, empleados en este análisis, proceden del archivo histórico electoral de <a href="http://www.argos.gva.es/ahe/val/buscaEleccionesV.html">Argos</a>, el portal de información de la Direcció d'Anàlisi i Polítiques Públiques de la Presidència de la Generalitat, y del Ayuntamiento de Elche. Los datos sobre la composición demográfica, también separados por secciones censales, se encuentran disponibles en el <a href="http://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177012&menu=resultados&idp=1254734710990">Padrón Continuo</a> del Instituto Nacional de Estadística (INE).</p>
  <p>En ambos casos, la información se descargó por separado, de manera automatizada, y se agrupó en un dataset conjunto en el que se cruzaron los datos a partir del año de referencia (proceso electoral y padrón). Se creó un modelo de regresión sencillo con controles por sección entre la edad, el sexo, el país de nacimiento y el voto para comprobar que la relación entre estas variables es estadísticamente significativa. Es importante mencionar que los datos del padrón de 2008 no hacen referencia al país de nacimiento, sino a la nacionalidad, porque los primeros no estaban disponibles en el INE. Se comprobó que los datos variaban ligeramente, pero que la diferencia no era relevante para las comparaciones establecidas aquí.
</p>
  <p>El análisis de los datos se realizó con Excel, Google Spreadsheet, SPSS y Tableau. Para simplificar el tratamiento de los datos de la edad, se agruparon en horquillas de 20 años en lugar de los 5 que proporcionaba el INE. Además, se seleccionaron aquellas variables, tanto de población (nacionalidad…) y resultados electorales (partidos más votados…) en los que había más datos disponibles y se podían obtener conclusiones más consistentes.</p>
  <p>Las visualizaciones de gráficos interactivos se materializaron con <a href="https://flourish.studio/">Flourish</a>, mientras que las de mapas se desarrollaron a partir de la librería de Python <a href="https://bokeh.pydata.org/en/latest/">Bokeh</a>. Conviene señalar aquí que el eje X no siempre comienza en el 0, sino que se adapta a los datos sobre población, para que la visualización se entienda mejor.</p> 
  <p>Un posible error detectado en los resultados electorales de las elecciones municipales de 2015 en la sección 14 del distrito 7 supuso que no se tuvieran en cuenta estos datos en los análisis. Todos los datos empleados se pueden descargar en <a href="https://docs.google.com/spreadsheets/d/1KQXKOpb7Vh9nDM5oFVVR9pdp17jLWdkJoz7ND52hhcU/edit?usp=sharing">esta hoja de cálculo</a>.</p>
</div>