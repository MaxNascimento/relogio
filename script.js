function setarData() {
    let elementoData = document.querySelector(".js-data");
    let data = new Date();
    
    const objData = {
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric'
    };
    
    elementoData.textContent = data.toLocaleDateString('pt-BR',objData);
    
}

function setarHora() {
    let elementoHora = document.querySelector(".js-hora");
    let hora = new Date();
    
    elementoHora.textContent = hora.toLocaleTimeString('pt-BR');
    
}

setInterval(() => {
    setarData();
    setarHora();
},1000);

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  } 
  