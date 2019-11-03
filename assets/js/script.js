function insertRow(pokemon1, index1, pokemon2, index2, pokemon3, index3, pokemon4, index4){

    let url1 = getImageUrl(index1);
    let url2 = getImageUrl(index2);
    let url3 = getImageUrl(index3);
    let url4 ="";

    if(pokemon4 != "")
        url4 = getImageUrl(index4);
    else
        index4 = "";

    return (   `<div class="row">
                    <div class="three columns">
                        <div class="text-center">
                            <img src="`+ url1 +`">
                        </div>
                        <div class="text-center">
                            <small>#`+ index1 +`</small>
                        </div>
                        <p class="text-center">`+ pokemon1 +`</p>  
                    </div>

                    <div class="three columns">
                        <div class="text-center">
                            <img src="`+ url2 +`">
                        </div>
                        <div class="text-center">
                            <small>#`+ index2 +`</small>
                        </div>
                        <p class="text-center">`+ pokemon2 +`</p>                 
                    </div>

                    <div class="three columns">
                        <div class="text-center">
                            <img src="`+ url3 +`">
                        </div>
                        <div class="text-center">
                            <small>#`+ index3 +`</small>
                        </div>
                        <p class="text-center">`+ pokemon3 +`</p>             
                    </div>

                    <div class="three columns">
                        <div class="text-center">
                            <img src="`+ url4 +`">
                        </div>
                        <div class="text-center">
                            <small>#`+ index4 +`</small>
                        </div>
                        <p class="text-center">`+ pokemon4 +`</p>               
                    </div>
                </div>`
    )
}

function getImageUrl(index){  
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + index + ".png";
}

$.getJSON( "https://pokeapi.co/api/v2/pokemon/?limit=151/", function(jsonObj){

    /* variable jsonObj => stocke toutes les données de l'url fournie
       pro tips : ouvrir l'url avec firefox (il range les données)
       jsonObj est un objet contenant une liste d'objet, l'opérateur d'accès est un point : objet.attribut
       ici jsonObj.results, et results est un tableau
    */

    //on fait des sauts de 4 dans la boucle for afin d'afficher les noms sur 4 colonnes
    for(let i=0; i<jsonObj.results.length; i+=4){
        //comme on travaille sur la première génération on a que 151 pokémons et 148 est le dernier multiple de 4
        let poke1 = jsonObj.results[i].name;
        let poke2 = jsonObj.results[i+1].name;
        let poke3 = jsonObj.results[i+2].name;
        
        if(i!=148){
            let poke4 = jsonObj.results[i+3].name
            $( ".pokelist").append( insertRow(poke1, i+1, poke2, i+2, poke3, i+3, poke4, i+4) );
        } else{
            $( ".pokelist").append( insertRow(poke1, i+1, poke2, i+2, poke3, i+3, "", 0) );
        }
    }
});
