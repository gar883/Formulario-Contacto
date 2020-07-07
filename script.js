
document.addEventListener("DOMContentLoaded", function(event) {

    // CAMPOS DEL FORMULARIO
    var nombre = document.getElementById('name');
    
    
    // DIV Error    
    var errorDiv = document.getElementById('errorDiv');
    errorDiv.style.cursor = 'pointer';

    nombre.addEventListener('blur', function(){
      if(this.value == ''){
           errorDiv.style.opacity = '1';
           nombre.focus();
           this.style.borderBottom = '2px solid red';
      }
      });
      nombre.addEventListener('blur',function(){
        if(this.value != ''){
          this.style.borderBottom = '2px solid #e1e1e1';
        }
      })
    nombre.addEventListener('keydown',function(){
      errorDiv.style.opacity = '0';
    })

    errorDiv.addEventListener('click', function(){
      errorDiv.style.opacity = '0';
      errorDiv.style.zIndex = '-3';
      
    });



    
});
