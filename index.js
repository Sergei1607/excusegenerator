let person = ["My dog", "My grandmother", "My father", "Mi mother"]

let accion = [" had an accident", " got lost", " got hurt", " got sick"]

let place = [" in the mountain", " in the house", " in the church", " in the street"]

let time = [" today.", " yesterday.", " last week.", " one hour ago."]

    function mentira() {
        let randomperson = Math.floor(Math.random() * person.length);
        let randomaccion = Math.floor(Math.random() * accion.length);
        let randomplace = Math.floor(Math.random() * place.length);
        let randomtime = Math.floor(Math.random() * time.length);
        return person[randomperson] + accion[randomaccion] + place[randomplace] + time[randomtime];
        }
        
    document.getElementById("excusa").innerHTML = mentira();   