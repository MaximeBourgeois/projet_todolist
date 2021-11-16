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
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
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

