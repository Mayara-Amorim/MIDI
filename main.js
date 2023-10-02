function tocaSom(idElemento){
const elemento = document.querySelector(idElemento);
 
if(elemento != null && elemento.localName === audio){
    console.log(elemento)
    elemento.play();
}else{
     console.log('Elemento não encontrado')
}

}

//.querySelector('.tecla_pom').onclick = tocaSomPom;
const listaTecla = document.querySelectorAll('.tecla'); //busca todas as classes que sejam tecla

for (let i = 0; i < listaTecla.length; i++) {
    const tecla = listaTecla[i] //
    const instrumeto = tecla.classList[1];
    const audio = `#som_${instrumeto}`;

    tecla.onclick = function(){
        tocaSom(audio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === "Space"|| evento.code === "Enter"){
            tecla.classList.add("ativa");
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove("ativa");
    }

    
}

