/*selectin du formulaire*/

var form = document.getElementById("myform");

/*ajouter un ecouteur d'evenemnt sur la soumission du formulaire*/
    form.addEventListener("submit", function(event){
        /*empecher lecomportement par défaut du formulaire lorsqu'il est soumis*/
        event.preventDefault();
        
        /*recuperer la valeur (value) du champ de saisie(input)*/
        var name = document.getElementById('name').value
        /* console.log("la valeur de name ", name);
        alert(name); */


        document.getElementById("message").innerHTML = "bonjour " + name + " !";

    })
