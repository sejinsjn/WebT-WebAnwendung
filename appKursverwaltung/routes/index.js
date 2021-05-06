const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const express = require("express");
const router = express.Router();
const data = require("../models/data");
const kurse = data.kurse;
const zeiten = data.zeiten;
var kursid = -1;
var id = -1;
var idC = 2;
var anzahl = 3;   

/* Route zur ejs-Datei mit allen angemeldeten Kursen */
router.get('/', function (req, res) {
    res.render("kurse", { kurse: kurse, kursid: kursid, anzahl: anzahl });
    if(anzahl == 0){
        console.log("Bitte melden Sie sich für einen Kurs an.");
    }
});

/* Dynamische Route zur Auflistung des ausgweählten Kurses */
router.get('/kursinfo/:id', urlencodedParser, function(req, res){
    id = req.params.id.substring(4);
    if(id > -1 && id != ''){
        kursid = id;
        res.render('kursinfo', { kurs: kurse[data.getIndex(kurse, id)], zeiten: zeiten, kursid: kursid});
        console.log("HTML-Seite mit Kursinformationen für Kurs-ID=" + id + " geöffnet.");
    }else{
        res.render('kursinfo', { kursid: kursid});
    }
});

/* Route zur Verarbeitung der Form zum Entfernen eines Kurses */
router.post('/delete', urlencodedParser, function (req, res) { 
    data.entfernen(req.body.entfernen);
    kursid = -1;
    anzahl--;
    console.log("Entfernen der Kurs-ID=" + req.body.entfernen + " erfolgreich.");
    res.redirect("/");
}); 

/* Route zur Seite für die Anmeldung zu einem Kurs */
router.get('/neuanlage', function (req, res) {
    res.render('neuanlage', { kursid: kursid});
});

router.post('/neuanlage', urlencodedParser, function (req, res) {
    if(req.body.tag !== ''){
        idC++;
        data.zeiten.push(new data.zeit(idC, req.body.tag, req.body.von + " - " + req.body.bis, idC));
        data.kurse.push(new data.kurs(idC, req.body.name, req.body.prof, req.body.raum));
        anzahl++;
        res.redirect('/');
    }
});

/* Route zum Abfangen aller undeklarierten Routen */
router.get('*', function(req, res) {
    res.redirect("/");
});

module.exports = router;
