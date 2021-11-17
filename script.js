
//stop le chargement des formulaires
let stopPropagationForm = document.getElementsByTagName("form");
for (let i = 0; i < stopPropagationForm.length; i++) {
    let form = stopPropagationForm[i];
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    })
}

//créer un nouvel élément dans la liste en cliquant sur le bouton "Ajouter"
function newElement() {
  let li = document.createElement("li");
  console.log(li)
  let inputValue = document.getElementById("inputItem").value;
  //créer un noeud de texte, enfant de la liste
  let createLi = document.createTextNode(inputValue);
  li.appendChild(createLi);
  if (inputValue === '') {
    alert("Vous devez remplir le champ !");
  } else {
    document.getElementById("listItem").appendChild(li);
  }
  document.getElementById("inputItem").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
document.getElementById("addBtn").addEventListener("click", newElement)

// Créer un bouton "fermer" et l’ajouter à chaque élément de liste
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Cliquez sur un bouton de fermeture pour masquer l’élément de liste actuel
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Ajouter un symbole "coché" en cliquant sur un élément de liste
var list = document.getElementById('listItem');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);

function saveList() {
  let listUl = document.getElementById("listItem").innerHTML;
  localStorage.setItem("listUl", JSON.stringify(listUl))
  console.log(listUl)
}
document.getElementById("validateList").addEventListener("click", saveList)

function recording(key, value) {
  localStorage.setItem(key, value);
}
function save() {
  recording(listItem.id, listItem.checked);
}
function resultSave() {
  let saveInformations = localStorage.getItem("listItem")
  // rappeler que la variable existe et qu'il est vrai
  if (saveInformations!=null) {
      saveInformations = parseInt(saveInformations)
}
saveInformations++

}
document.getElementById("validateList").addEventListener("click", function () {
  save()
  resultSave()
})
resultSave()

//Cacher le Pop In
function hide(){
    wallpaper.style.display="none";
}
//Apparition du formulaire
function formAppeared(){
    formulaire.style.display="block";
}

document.getElementById("create").addEventListener("click", hide);
document.getElementById("createSm").addEventListener("click",hide);
document.getElementById("create").addEventListener("click", formAppeared);
document.getElementById("createSm").addEventListener("click",formAppeared);

//Apparition du menu
function appeared(){
    menu.style.display="block";
}
document.getElementById("appearedMenu").addEventListener("click", appeared);
function disappeared(){
    menu.style.display="none";
}
document.getElementById("closeMenu").addEventListener("click", disappeared);

function saveList() {
    let listUl = document.getElementById("listItem").innerHTML;
    localStorage.setItem("listUl", JSON.stringify(listUl))
    let saveUl = localStorage.getItem("listUl");
    }
    document.getElementById("validateList").addEventListener("click", saveList)
   
    function getValues() {
      let saveUl = localStorage.getItem("listUl"); 
      if (saveUl != null) {
        document.getElementById("listItem").innerHTML = JSON.parse(saveUl)
      }
    }
    getValues()
