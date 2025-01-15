/*btn = document.querySelector("#aboutusss");
let newsp = document.querySelector("#about");
let tr=true ;

btn.addEventListener("click",()=>{
    if(tr == true){
    newsp.style.visibility = "visible";
    tr = false ;
    }
    else if(tr == false){
        newsp.style.visibility = "hidden";
        tr = true;
    }
})
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });
  */

  let btn = document.querySelector("#btnas");
  let formname = document.querySelector("#formn");
  let formemail = document.querySelector("#forme");
  let formmessage =document.querySelector("#formm");
  let message = document.querySelector("#response");
  
  
  btn.addEventListener("click",()=>{
      if(formname.value.trim() === ""){
          alert("pls enter your name");
        }else{
          if(formemail.value.trim() === ""){
              alert("pls enter the mail");
          }else{
              if(formmessage.value.trim() ===""){
                  alert("pls enter your feedback");
              }else{
                  message.style.display = 'inline-block';
                  setTimeout(() => {
                      message.style.display = 'none';
                  }, 4000);
              }
          }
        }
  })