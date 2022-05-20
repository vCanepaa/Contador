const contador = document.querySelector('.contador');
const btnIncrementa = document.querySelector('.incrementa');
const btnDecrementa = document.querySelector('.decrementa');
const btnReseta = document.querySelector('.reseta')


document.addEventListener('click', function(el){
  const elemento = el.target;
 
  if(elemento.classList.contains('incrementa')){
      incrementa();
      return;
  }  
  if(elemento.classList.contains('decrementa')){
      decrementa();
      return;
  }
  if(elemento.classList.contains('reseta')){
      reseta();
      return;
  }

})

function atualizaCor(){
    const valor = Number(contador.innerText);
    if(valor > 0){
      if(contador.classList.contains("negativo")){
            contador.classList.replace("negativo", "positivo")
        }
      if(contador.classList.contains("nulo")){
            contador.classList.replace("nulo", "positivo")
        }
       contador.classList.add("positivo");
       return;
    }
    if(valor < 0){
        if(contador.classList.contains("positivo")){
            contador.classList.replace("positivo", "negativo")
           }
        if(contador.classList.contains("nulo")){
            contador.classList.replace("nulo", "negativo")
        }
           
        contador.classList.add("negativo");
        return
    }
    if(contador.classList.contains("negativo")){
        contador.classList.remove("negativo");   
    }
    if(contador.classList.contains("positivo")){
        contador.classList.remove("positivo");
    }
    contador.classList.add("nulo");
    }
    



function incrementa(){
    let valor = Number(contador.innerText);
    valor++;
    contador.innerText = valor;
    atualizaCor();
    console.log(contador)
    return;
}


function reseta(){
    let valor = 0;
    contador.innerText = valor;
    atualizaCor();
    return;
}

function decrementa(){
    let valor = Number(contador.innerText);
    valor--;
    contador.innerText = valor;
    atualizaCor();
    return;
}