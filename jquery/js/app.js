$(document).ready(function(){
  console.log("ready!");
  //1 - Afficher les ingrédients de la pizza au survol de leurs nom
  $(".radio").hover(function(){
    console.log("mouse move at pizza type radio button");
      $(this).children(".description.no-display").show(300);
    },function(){
      $(this).children(".description.no-display").hide();
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
    $(this).parent().after(" <div class='type'> <span class='text-note'></span> <input type='text'/> </div>")
  });

  //5 - Au clic sur le bouton de validation, supprimer tous les éléments de la page, et afficher un message de remerciement.
  $(".btn.btn-primary.btn-large.btn-block").click(function(){
    console.log("clicked Validation button ");
    $(".row.typography-row.main").remove();
    $(".stick-right").remove();
    $("small").after("<span class='text-center'>Remerciment !</span>")
  });

  //6 - Actualiser le prix en fonction des éléments choisis grâce à l'attribut data-price
  $(".btn.btn-success.done").click(function(){
    var pricePizzaType = 0, priceNbParts = 0, pricePate= 0, priceExtra=0;

    $(".type.nb-parts").data('prix');
      $("div").data('prix');
      $("div").data('prix');

    var priceTotal = pricePizzaType + priceNbParts + pricePate +  priceExtra;
    $(".tile").children("p").html("<p>"+ priceTotal + " €</p>")

  });

});

