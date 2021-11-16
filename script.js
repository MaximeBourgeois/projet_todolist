//stop le chargement des formulaires
let stopPropagationForm = document.getElementsByTagName("form");
for (let i = 0; i < stopPropagationForm.length; i++) {
    let form = stopPropagationForm[i];
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    })
}

