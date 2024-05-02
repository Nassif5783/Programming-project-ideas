const show=document.getElementById("show");
const submit=document.getElementById("submit");
const ideaslist=document.getElementById("ideaslist");


submit.onclick=submitideas;
show.onclick=showideas;

function submitideas(){

  const ideas=document.getElementById("ideas").value;

  const ideastorage=JSON.parse(localStorage.getItem("ideastorage")) || [];
  ideastorage.push(ideas);
  localStorage.setItem("ideastorage",JSON.stringify(ideastorage));

}

function showideas(){
  const ideasdisplay=JSON.parse(localStorage.getItem("ideastorage"));
 ideaslist.innerHTML = ideasdisplay;
  


}