function insertMew(front_shiny, back_shiny, front_default, back_default, type, weight, height, ability){

    return (   `<div class="row">
                    <div class="three columns">
                        <div class="text-center">
                            <img src="`+ front_default +`">
                        </div>
                        <p class="text-center mew-name">Mew</p>
                        <p class="psychic">`+ type +`</p>
                        <p class="descr"><strong>Capacité</strong> : `+ ability +`</p>
                        <p class="descr"><strong>Poids</strong> : `+ weight +` dm</p>
                        <p class="descr"><strong>Taille</strong> : `+ height +` hg</p>
                    </div>

                    <div class="three columns">
                        <div class="text-center">
                            <img src="`+ back_default +`">
                        </div>
                    </div>

                    <div class="three columns">
                        <div class="text-center">
                            <img src="`+ front_shiny +`">
                        </div>
                        <p  class="text-center">Mew shiny</p>
                    </div>

                    <div class="three columns">
                        <div class="text-center">
                            <img src="`+ back_shiny +`">
                        </div>      
                    </div>
                </div>`
    )
}

$.getJSON( "https://pokeapi.co/api/v2/pokemon/mew/", function(jsonObj){

    /* variable jsonObj => stocke toutes les données de l'url fournie
       pro tips : ouvrir l'url avec firefox (il range les données)
       jsonObj est un objet contenant une liste d'objet, l'opérateur d'accès est un point : objet.attribut
       ici jsonObj.results, et results est un tableau
    */

    let ability = jsonObj.abilities[0].ability.name;
    let height = jsonObj.height;
    let weight = jsonObj.weight;
    let type = jsonObj.types[0].type.name;
    let front_shiny =jsonObj.sprites.front_shiny;
    let back_shiny =jsonObj.sprites.back_shiny;
    let front_default =jsonObj.sprites.front_default;
    let back_default =jsonObj.sprites.back_default;
    
    $( ".mew").append( insertMew(front_shiny, back_shiny, front_default, back_default, type, weight, height, ability) );

});
