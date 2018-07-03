# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

## Opdracht 1 - Progressive Enhancement

### Opdracht 1.1 - Breek het Web
Het Web laten 'breken' door features van het platform bewust uit te zetten. Images, custom fonts, JavaScript, kleur, breedband internet, etc. Allemaal met als doel je te laten beseffen hoeveel je nog niet weet van het Web, erachter komen dat je misschien aannames hebt die niet kloppen, en om je je in te laten leven in de eindgebruiker.

Onderzoek minimaal twee features. Dat betekent uitvogelen wat het voor impact heeft op de sites die je kent en normaal gebruikt. Kies sites in je directe omgeving: van je werkgever, lokale vereniging, de cafetaria om de hoek, en/of eerdere projecten die je zelf gedaan hebt.

Kies 2 features van de 8
- Zoek uit welke problemen ze kunnen veroorzaken (verzamel cijfers, meningen, ervaringen)
- Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)
- Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving)
- Beschrijf hoe je dit kan fiksen
- Maak hierover een presentatie en neem die woensdag mee, dan gaan we de resultaten bespreken
Lezen: [Everyone has JavaScript, right?](https://kryogenix.org/code/browser/everyonehasjs.html) en [I Turned Off JavaScript and it was Glorious](https://www.wired.com/2015/11/i-turned-off-javascript-for-a-whole-week-and-it-was-glorious/)

## Kleur uitzetten

### Website:
http://www.toute-fabienne.nl

Toute Fabienne website test.
Deze website heb ik getest met alle functies voor kleurblinden mensen. De functie “Low-Contrast” viel het meeste op als een probleem want, dit maakte de webite erg onleesbaar.

### Oplossingen?
* Een plugin downloaden die contrast nacheckt
* Een library die het fixt
* Een contrast knop op de website


## Muis/Touchpad uitzetten

### Websites:
http://www.hetpurmerplein.nl
https://helenabloemen.nl/

Purmerplein is het lokale winkelcentrum in mijn buurt. De website is al erg verouderd. Ik besloot hierop te testen of het mogelijk was om door de website te gaan zonder gebruik van een muis of touchpad.

Helenabloemen is een vestiging op het winkelcentrum Purmerplein. Als ik bloemen nodig heb is dit de voornaamste plek waar ik heen ga.

### Hoe heb ik de test voor elkaar gekregen?
Ik heb zelf een plugin gedownload genaamd “Spectrum” voor Chrome. Dit heeft veel varianten van mensen die moeite hebben met kleur.


### Purmerplein website test
Toen ik begon met het testen viel me al snel iets op. Als je tabt is het niet duidelijk wat je positie op de website precies is. Het is niet duidelijk waar je in het menu bent, MAAR het is wel bruikbaar. Op dat cruciale probleem na is er verder niks mis met het tabben door de website.

### Oplossingen?
* Het ervoor zorgen dat je ziet waar je tabt kan aangepakt worden met een :focus state. Het kan zo simpel zijn als een kleur verandering of het desbetreffende items vergroten.

### Helenabloemen website test
Deze website is een grote drama zonder muis. Door het menu scrollen gaat erg moeizaam. Het uitklapmenu wilt niet uitklappen. Door deze fout loop je al zo goed als alle content mis. Het enige wat je nog kan gebruiken is het standaard overzicht van een paar bloemen. Je kan de standaard selectie ook niet aanpassen zonder muis. Alles waar je op kan tabben doet het wel.

### Oplossingen?
* focus within kan gebruikt worden voor het uitklapmenu, zodat hij uitklapt.
* tab index kan gebruikt worden, zodat de gebruiker de standaard selectie op de homepage kan veranderen.


### Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt!

Voor deze opdracht ga je toepassen wat je van opdracht 1.1 hebt geleerd.
* Pas Progressive enhancement toe op je OBA Web App.
* Check je OBA Web App op de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.
* Test  je OBA Web App in het device lab.
* Laat je OBA Web App voorlezen door een screenreader.
* Gebruik onderstaande artikelen om je code te optimaliseren.
[The accessibility mindset](https://24ways.org/2015/the-accessibility-mindset/) en [Accessibility Originates With UX: A BBC iPlayer Case Study](https://www.smashingmagazine.com/2015/02/bbc-iplayer-accessibility-case-study/)

Criteria
* Zet je code op Github
* Schrijf een Readme met een beschrijving van de problemen die je hebt gevonden, hoe je die hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben



## Images
Mijn WAFS maakt gebruikt van images bij het laten zien van een film. De images die ik ophaal hebben alleen nog geen alt tekst. De image die hij laat zien is een film poster van de desbetreffende film. De vraag is eerder of de alt tekst nodig is. In mijn mening is het niet belangrijk, want eronder wordt er uitgelegd wat de film inhoudt.

**Fix:** niks.


## Internet
Als er geen internet is dan zal de app het alsnog blijven doen als de gebruiker de films eerder gezocht heeft. De data wordt opgeslagen in een localstorage. Als de gebruiker op de applicatie komt zonder iets bekeken te hebben en ze hebben geen internet dan zal de app onbruikbaar zijn. Er is ook nog geen errorafhandeling voor dit probleem.

**Fix:** Errorafhandeling als er geen internet is.


## Tabgebruik
De app doet het perfect met tabgebruik. De gebruiker kan gemakkelijk door de applicatie heen navigeren. Ze zullen op de juiste items terechtkomen en het gaat via een logische volgorde.

**Fix:** Niks.


## Screenreaders
De screenreader test heb ik gedaan door middel van het programma NVDA. De screenreader leest alles goed op en er gaat gelukkig niks mist. Blinden mensen kunnen de applicatie zonder enig probleem gebruiken.

**Fix:** Niks.


## Fonts
Het font dat ik gebruik is Open Sans. Het heeft alleen geen fallback fons. Dit is wel iets wat toegevoegd moet worden, want een goed font geeft toch wel een meer plezierige ervaring dan een font dat er niet uitziet.

**Fix:** Een fallback font toevoegen.


## Kleur
De applicatie gebruikt weinig kleur. De kleur dat het gebruikt is ook totaal niet belangrijk voor de interface. Ik heb deze test afgelegd door middel van de Google Chrome applicatie 'Spectrum'. Ik heb getest op het volgende:

- [x] Protonapia
- [x] Protanomaly
- [x] Deuteranopia
- [x] Deuteranomaly
- [x] Tritanopia
- [x] Tritanomaly
- [x] Achromatopsia
- [x] Achromatomaly
- [x] Low-contrast

Alles kwam er succesvol uit.

**Fix:** Niks.


## Javascript
Als de JavaScript wordt uitgezet dan doet de hele app het niet meer. Dit kan opgelost worden als de app server side gemaakt wordt.

**Fix:** De app server side maken.


## Cookies
De applicatie maakt geen gebruik van cookies.

**Fix:** Niks.

## Performance
![My performance web app test][cover]

De performance heb ik getest door middel van de Google developer tool 'Audit'. De accessibility is vrij hoog beoordeelt.

## Device Lab
In het Device Lab heb ik mijn WAFS applicatie getest.
Het Device Lab is een "lab" waar veel oude mobiele/tablet devices zitten.
Door dit te testen heb een inzicht gekregen hoe mijn applicatie werkt op oudere devices.
Helaas waren niet alle devices beschikbaar.
Ik geef mijzelf de schuld hiervoor, omdat ik gewoon eerder naar het lab moest gaan.

![Device lab foto](dl1.jpg)
![Device lab foto](dl2.jpg)
![Device lab foto](dl3.jpg)

Het viel mij meteen op dat mijn applicatie goed draait!
Alle styling is precies zoals het bedoeld is en de applicatie werkt naar behoefte.
De applicatie kan zonder probleem op dit device gebruikt worden.

![Device lab foto](dl5.jpg)

Tijdens het testen op een oud device viel het meteen op dat mijn hele applicatie het niet deed.
Ik raakte eerst een beetje in de stress, want ik snapte niet wat er mis gegaan kon zijn.
Het duurde effe voor ik mijzelf realiseerde dat de hele JavaScript het gewoon niet deed!
JavaScript wordt totaal niet ondersteund op dit device.

![Device lab en ik](dl6.jpg)

Kortom: Mijn applicatie doet het prima op de apparaten. Dit zal komen, omdat ik geen "hacky" of code gebruikt dat moeilijk wordt ondersteund. De applicatie doet het niet zonder JavaScript. De data kan niet worden 

 [cover]: preview.png
