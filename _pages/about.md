---
layout: page
title: ¿Quiénes somos?
permalink: /equipo
comments: true
---

<div class="row justify-content-between">
  <div class="col-md-8">    
  <p>Local Data Lab es un grupo de trabajo compuesto por profesionales, profesores y alumnos de Periodismo de la Universidad Miguel Hernández. Nacimos en febrero de 2019 con el fin de descubrir y poner en práctica el potencial del periodismo de datos en el ámbito local.</p> 

  <p>Estamos convencidos de que es posible y necesario obtener, analizar y visualizar información de manera rigurosa, relevante y útil en nuestro entorno más cercano. Creemos en la transparencia (ajena y propia), nos encanta trastear con cualquier tecnología, buscamos destapar buenas historias y aspiramos a contarlas de la mejor manera posible.</p>

  <p>Hemos arrancado con los datos de la maratón electoral de 2019, con el foco en los resultados y la campaña de las elecciones generales y locales en Elche. Pero después seguiremos analizando a fondo cuestiones como la vivienda, el transporte, la seguridad o el medio ambiente.</p>
  </div>

  <div class="col-md-4">
    <div class="sticky-top sticky-top-80">
      <h5>Organizadores</h5>
      <ul class="list-unstyled">
        <li class="media">
          <img src="{{ site.baseurl }}/assets/images/periodismo.jpg" class="mr-3" alt="...">
          <div class="media-body">
            <p class="mt-0 mb-1">Periodismo UMH</p>
          </div>
        </li>
        <li class="media my-4">
          <img src="{{ site.baseurl }}/assets/images/mip.jpg" class="mr-3" alt="...">
          <div class="media-body">
            <p class="mt-0 mb-1">Máster Innovación en Periodismo</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="container marketing mt-5">
<!-- Three columns of text below the carousel -->
<div class="row">
{% for journos in site.data.journos %}
  <div class="col-lg-3">
      	<a target="_blank" href="{{ journos.link }}" role="button"><img src="{{ journos.pic }}" alt="{{ journos.name }}" width="140" height="140" class="bd-placeholder-img rounded-circle"></a>
        <h3>{{ journos.name }}</h3>
        <span class="badge badge-dark">{{ journos.rol }}</span><p>{{ journos.bio }}</p>
  </div><!-- /.col-lg-4 -->
{% endfor %}
</div><!-- /.row -->
</div>
