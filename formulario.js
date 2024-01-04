


// ordem alfabetica 
document.addEventListener("DOMContentLoaded", function() {
  var checkboxGeneros = document.querySelector('.checkbox-generos');
  var labels = Array.from(checkboxGeneros.getElementsByTagName('label'));

  // Ordena os labels alfabeticamente com base no texto do label
  labels.sort(function(a, b) {
    var textA = a.textContent.trim().toLowerCase();
    var textB = b.textContent.trim().toLowerCase();
    return textA.localeCompare(textB);
  });

  // Limpa os filhos do contêiner
  checkboxGeneros.innerHTML = '';

  // Adiciona os labels ordenados de volta ao contêiner
  labels.forEach(function(label) {
    checkboxGeneros.appendChild(label);
  });
});



// Gerar código 
function generateHTML() {
  var codeElement = document.querySelector('.code');
  var bodyElement = document.body;

  codeElement.classList.add('gerou');
  bodyElement.classList.add('gerou');
}
function removegerou() {
  var codeElement = document.querySelector('.code');
  var bodyElement = document.body;

  codeElement.classList.remove('gerou');
  bodyElement.classList.remove('gerou');
}



  // copiar 
  function copyToClipboard(elementId) {
    var element = document.getElementById(elementId);
    var range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado!");
  }
  
  
  
//generos 
function adicionarGenero(element) {
  var checkboxLabel = element.parentElement.textContent.trim();
  var h3Element = document.createElement('h3');
  h3Element.textContent = checkboxLabel;

  var divHtmlGerado = document.getElementById('htmlGerado');
  divHtmlGerado.appendChild(h3Element);

  exibirHTMLGerado();
    substituirLink();
}

function removerGenero(element) {
  var checkboxLabel = element.parentElement.textContent.trim();
  var h3Elements = document.querySelectorAll('#htmlGerado h3');

  h3Elements.forEach(function(h3) {
    if (h3.textContent === checkboxLabel) {
      h3.remove();
    }
  });

  exibirHTMLGerado();
    substituirLink();
}

function exibirHTMLGerado() {
  var divHtmlGerado = document.getElementById('htmlGerado');
  var htmlGerado = divHtmlGerado.innerHTML;
  document.getElementById('htmlGeradoText').value = htmlGerado;
}

window.onload = function() {
  var checkboxes = document.querySelectorAll('.checkbox-generos input[type="checkbox"]');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        adicionarGenero(checkbox);
      } else {
        removerGenero(checkbox);
      }
    });
  });
};



  
  // Ano
var ano = '';
document.querySelectorAll('.ano').forEach((anoInput) => {
  anoInput.addEventListener('change', function() {

    substituirLink();
  });
});

// subtitle
var subtitle = '';
document.querySelectorAll('.subtitle').forEach((subtitleInput) => {
  subtitleInput.addEventListener('change', function() {

    substituirLink();
  });
});
//ADM
var upload = '';

        document.addEventListener('DOMContentLoaded', function () {
            // Recupera o valor do localStorage
            var storedUpload = localStorage.getItem('selectedUpload');
            if (storedUpload) {
                upload = storedUpload;

                // Marca o input correspondente
                document.querySelectorAll('input[name="adm"]').forEach((radio) => {
                    if (radio.parentNode.textContent.trim() === upload) {
                        radio.checked = true;
                    }
                });
            }

            // Adiciona eventos de mudança aos inputs
            document.querySelectorAll('input[name="adm"]').forEach((radio) => {
                radio.addEventListener('change', function () {
                    if (this.checked) {
                        upload = this.parentNode.textContent.trim();

                        // Armazena o valor no localStorage
                        localStorage.setItem('selectedUpload', upload);
                    } else {
                        upload = '';
                    }

                    substituirLink();
                });
            });
        });

//Status
var state = '';
document.querySelectorAll('input[name="state"]').forEach((radio) => {
  radio.addEventListener('change', function() {
    if (this.checked) {
      state = this.parentNode.textContent.trim();
    } else {
      state = '';
    }

    substituirLink();
  });
});
//Tipo
var tipo = '';
document.querySelectorAll('input[name="tipo"]').forEach((radio) => {
  radio.addEventListener('change', function() {
    if (this.checked) {
      tipo = this.parentNode.textContent.trim();
    } else {
      tipo = '';
    }

    substituirLink();
  });
});
//Status
var estacao = '';
document.querySelectorAll('input[name="estacao"]').forEach((radio) => {
  radio.addEventListener('change', function() {
    if (this.checked) {
      estacao = this.parentNode.textContent.trim();
    } else {
      estacao = '';
    }

    substituirLink();
  });
});




document.addEventListener('DOMContentLoaded', function() {
  var checkboxes = document.querySelectorAll('.checkbox-generos input[type="checkbox"]');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      adicionarGenero(this);
    });
  });

  function adicionarGenero(checkbox) {
    var genero = checkbox.value;

    if (checkbox.checked) {
      var genesContainer = document.querySelector('.genes');
      var novoH3 = document.createElement('h3');
      novoH3.textContent = genero;
      genesContainer.appendChild(novoH3);
    } else {
      // Se o checkbox for desmarcado, remova o h3 correspondente
      var h3s = document.querySelectorAll('.genes h3');
      h3s.forEach(function(h3) {
        if (h3.textContent === genero) {
          h3.remove();
        }
      });
    }
  }
});




function substituirLink() {
  console.log("Link substituído:", upload);
  
  
  ano = document.querySelector('.ano').value;
  subtitle = document.querySelector('.subtitle').value;
  
  var inputCapa = document.getElementById("Capa");
  var inputCapamobile = document.getElementById("Capamobile");
  var sinopse = document.getElementById("sinopse");
  var totaleps = document.getElementById("totaleps");
  var nota = document.getElementById("nota");
  var temporadaAtual = document.getElementById("temporadaAtual");
  var linkAnterior = document.getElementById("linkAnterior");
  var linkProximo = document.getElementById("linkProximo");
  var listaeps = document.getElementById("listaeps");
  var duration = document.getElementById("duration");
  var ova = document.getElementById("ova");
  var filmes = document.getElementById("filmes");
  var estudio = document.getElementById("estudio");
  var pais = document.getElementById("pais");
  var autor = document.getElementById("autor");
  var linkembed = document.getElementById("linkembed");
  var htmlGeradoText = document.getElementById("htmlGeradoText");
  
  
  
  
  var generatedCode = document.getElementById("generatedCode");
  
 
  


  // Obtém o valor do input
  /*main2*/
  var capa = inputCapa.value;
  var capamobile = inputCapamobile.value;
  var sinopse = sinopse.value;
  var totaleps = totaleps.value;
  /*main1*/
  var nota = nota.value;
  var temporadaAtual = temporadaAtual.value;
  var linkAnterior = linkAnterior.value;
  var linkProximo = linkProximo.value;
/*main3*/
  var listaeps = listaeps.value;
  var duration = duration.value;
  var ova = ova.value;
  var filmes = filmes.value;
  var estudio = estudio.value;
  var pais = pais.value;
  var autor = autor.value;
  var linkembed = linkembed.value;
  var htmlGeradoText = htmlGeradoText.value;
  
  var codigoHTML = `
  <section>
    <div id="fundopa" style="background-image: url('${capamobile}');">
    </div>
    <div class="divcapamore">
      <span id="capa">
        <img src="${capa}" />
      </span>
    </div>
    <div class="caixa1">
      <main class="main2">
        <div>
          <h8 id="sinopse">${sinopse}</h8>
        </div>
        <ul>
          <li id="ano" class="ano">${ano}</li>
          <li id="totalEps">${totaleps}</li>
          <li id="tipo">${tipo}</li>
          <li id="status">${state}</li>
        </ul>
      </main>
    <main class="main1">
      <h8 class="subtitle">${subtitle}</h8>
      <h2 id="tititpm"></h2>
      <div>
        <h2 class="topSs">${nota}</h2>
        <h4>HD</h4>
        <main>
          <h8>${estacao}</h8>
          <h8><h8 class="nT">${temporadaAtual}</h8> Temporada</h8>
        </main>
        <div class="temporada">
          <span>
            <h3 class="gen1"></h3>
            <h3 class="gen2"></h3>
            <h3 class="gen3"></h3>
            <button id="nextT"></button>
          </span>
          <span class="buttonTemp">
            <a data-text="Anterior" href="${linkAnterior}"></a>
            <a data-text="Próxima Temporada" href="${linkProximo}"></a>
          </span>
        </div>
       </div>
    </main>
    </div>
  </section>
      <main class="main3">
        <ul>
          <li class="attsection" onclick="atsection(this,'episodios')">Assistir</li>
          <li onclick="atsection(this,'ficha')">Ficha Técnica</li>
          <li onclick="atsection(this,'cast')">Cast</li>
        </ul>
      </main>
  
      <section id="episodios" class="content attsection">
        <iframe src="${listaeps}" frameborder="0" class="resizeable-iframe"></iframe>
  
      </section>
      <section id="ficha" class="content">
        <ul>
          <li>
            <p>Título Alternativo</p>
            <span>
              <h3 class="subtitle">${subtitle}</h3>
            </span>
          </li>
          <li>
            <p>Gêneros</p>
            <span class="genes">
            ${htmlGeradoText}</span>
          </li>
          <li>
            <p>Duração média</p>
            <span>
              <h3>${duration}</h3>
            </span>
          </li>
          <li>
            <p>OVAs</p>
            <span>
              <h3>${ova}</h3>
            </span>
          </li>
          <li>
            <p>Filmes</p>
            <span>
              <h3>${filmes}</h3>
            </span>
          </li>
          <li>
            <p>Estúdio </p>
            <span>
              <h3>${estudio}</h3>
            </span>
          </li>
          <li>
            <p>Ano de Estreia</p>
            <span>
              <h3 class="ano">${ano}</h3>
            </span>
          </li>
          <li>
            <p>País</p>
            <span>
              <h3>${pais}</h3>
            </span>
          </li>
          <li>
            <p>Autor</p>
            <span>
              <h3>${autor}</h3>
            </span>
          </li>
          <li>
            <p>Upload por</p>
            <span>
            <h3>${upload}</h3>
            </span>
          </li>
    <iframe id="youtubePlayer" src="${linkembed}" frameborder="0" allowfullscreen></iframe>
        </ul>
      </section>
      <section id="cast" class="content">
        <ul>
        </ul>
      </section>
  
 
  
  `;

var capaInput = document.getElementById('Capa');
var imagem = document.querySelector('.lab1 img');
imagem.src = capaInput.value;
  generatedCode.textContent = codigoHTML;

}


function gerarEmbed() {
  var inputLink = document.getElementById('youtubeLink').value;
  var embedLink = "https://www.youtube.com/embed/" + extrairID(inputLink);
  document.getElementById('linkembed').value = embedLink;

  // Atualiza a div com a iframe do vídeo
  document.getElementById('resultadoIframe').innerHTML = '<iframe src="' + embedLink + '" frameborder="0" allowfullscreen></iframe>';
}

function extrairID(link) {
  // Extrai o ID do vídeo do link do YouTube
  var match = link.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : '';
}
