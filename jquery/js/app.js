$(document).ready(function(){
  console.log("ready!");
  //1 - Afficher les ingrédients de la pizza au survol de leurs nom
  $(".radio").click(function(){
    console.log("select pizza type radio button");
    //if($(this).children("input:checked")){
      //console.log($( "input:checked" ).val() + " is checked!" );
    $(this).children(".description.no-display").show(500);
    //}
  });

  //2 - Afficher visuellement le nombre de parts et le nombre de pizzas approprié en dessous du champs « Nombre de parts »
  $(".type.nb-parts").children("input").keyup(function(){
    console.log("input pizza number:"+$(this).val());
  });


  //3 - Afficher le formulaire de saise d'adresse au clic sur le bouton "Etape suivante". Masquer ce même bouton
  $(".btn.btn-success.next-step").click(function(){
    console.log("click ES button");
    $(this).hide(1000);
    $(".infos-client.no-display").show(1000);
  });

  //4 - Ajouter un ligne de champ d'adresse lorsque l'on clique sur le bouton "Ajouter un autre ligne d'adresse"
  $(".btn.btn-default.add").click(function(){
    console.log("add one address line ");
    $(this).parent().after(" <div class='type'> <span class='text-note'></span> <input type='text'/> </div>");

  });

});

