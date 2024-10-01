//corretto funzionamento solo su safari, su chrome dipende da impostazioni browser

let body = document.querySelector('body'); 
//ritorna il primo elemento che corrisponde al selettore specificato, in questo caso body

//nome=valore; ...
//questa funziona vista in classe prende la stringa completa con tutti i cookie che ho salvato
//spezza la stringa attraverso il punto e virgola e poi la divide sull'uguale e in base al nome 
//cookie name che sto chiedendo ci riporta ciò che abbiamo salvato nel suo valore

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

//cookie mode=day or night
//cambiare css in base alla modalità
//per salvare cookie faccio document.cookie = "mode='light' "

//cerco se il cookie esiste già nel sito, se esiste prendiamo il suo valore, altrimenti dobbiamo crearlo
//cerca il cookie di nome mode == -1 vuol dire che non lo ha trovato, se == qualcosa diverso da -1 l'ha trovato
if(document.cookie.search("mode") == -1) {
    document.cookie="mode=light";
}
//recupero il cookie che ho creato
    if(getCookie("mode") === "light"){
        body.className = "bodyLight";
    } else {
        body.className = "bodyDark";
    }

//creo la funzione che inverte lo stile css e il cookie salvato
function change() {
    if(getCookie("mode") === "light"){
        body.className = "bodyDark";
        document.cookie="mode=dark";
    } 
    else {
        body.className = "bodyLight";
        document.cookie="mode=light";
    }
}
    
