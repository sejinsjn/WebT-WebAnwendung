function kurs(id, name, prof, raum, status) {
    this.id = id;
    this.name = name;
    this.prof = prof;
    this.raum = raum;
}

var kurse = [
    new kurs(0, "Mathematik 1", "Dr. Mathe", "A.E.01"),
    new kurs(1, "Mensch-Computer-Interaktion", "Dr. MCI", "A.E.01"),
    new kurs(2, "Datenbanken 1", "Dr. DB1", "A.E.01")
];

function zeit(id, tag, uhrzeit, status){
    this.id = id;
    this.tag = tag;
    this.uhrzeit = uhrzeit;
    this.status = status;
}

var zeiten = [
    new zeit(0, "Montag", "8:00 - 9.30", 2),
    new zeit(1, "Montag", "10:00 - 11:30", 1),
    new zeit(2, "Dienstag", "8:00 - 9.30", 0),

];

function entfernen(kursid){
    for(let kurs of kurse){
        if(kurs.id == kursid){
            kurse.splice(kurse.indexOf(kurs),1);
        }
    }
    for(let zeit of zeiten){
        if(zeit.status == kursid){
            zeiten.splice(zeiten.indexOf(zeit), 1);
        }
    }
}

function getIndex(arr, id){
    for(let a of arr){
        if(a.id == id){
            return arr.indexOf(a);
        }
    }
}

module.exports = {
    kurs: kurs,
    kurse: kurse,
    zeit: zeit,
    zeiten: zeiten,
    entfernen: entfernen,
    getIndex: getIndex
}