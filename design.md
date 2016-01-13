---
layout: page
title: Design
permalink: /design/
---

# Applicatie

## Synopsis
Healtcare plus is een zorgdossier applicatie voor in rusthuizen. Het dossier houd medische informatie bij van de bewoners in het rusthuis. Het is een tool waarmee zorgkundigen een simpele en vlotte manier een goede zorg kunnen aanbieden.

## A. Specificaties

### 1. Technische specificaties

#### 1.1 Ontwikkelomgeving

* [Oracle VM Virtualbox][virtualbox]
* [Vagrant][vagrant]
* [Laravel Homestead][homestead]
  * [PHP][php]
  * [MySQL][mysql]
* [Git][git]

#### 1.2 Automatisatie
* [Composer][composer]
* [Node.js][node]
   * [Bower][bower]
   * [gulp.js][gulp]

#### 1.3 Server-side
* [Laravel 5.1 LTS][laravel]
* [Faker][gh-faker]
* [PHPUnit][phpunit]

#### 1.4 Client-side
* [Bootstrap][bootstrap] met [Sass][sass]
* [Html 5][html]
* [Reactjs][react]
  * [Babel][babel]
  * [JSX][gh-jsx]
* [Scss][sass]

### 2. Functionele specificaties

#### 2.1 Backoffice
* **Dashboard**
  * Bewoners
    * Kamer
* **Bewoner**  
  * Visualisatie parameters
  * Dossiers
    * Verzorging
    * Agenda
    * Wondzorg
    * Verslagen
    * Persoonlijke gegevens
* **Medicatie**
  * Groep
  * Toedieningswijze
  * Toedieningsvorm
  * permissies
* **Valregistratie**
  * Oorzaken
  * Gevolgen
* **Procedures**
  * Title
  * Beschrijving hoe verzorging moet uitgevoerd worden
  * Permissie voor verzorging
  * Medicatie / Andere vrije ingave
* **Medewerkers**
  * Persoonlijke gegevens: voornaam, naam, profiel afbeelding, geboortedatum
  * Contactgegevens: adres, telefoon
  * Rol  
* **Accountbeheer**
  * Permissies
  * Rollen
    * Familie
    * Huisarts
    * Zorgkundige
    * Verpleegkundige
    * Afdelingsverantwoordelijke
    * Diëtist
    * Logopedie
    * kinesist
    * Ergotherapeut
    * Keuken
    * Sociale dienst (regelen dienstverlening)
    * Directie


#### 2.2 API
De API is een RESTful API waarlangs de App communiceert met de back-end.

#### 2.3 App
* **Rollen**
  * Bezoeker (niet-aangemelde gebruiker)
  * Medewerkers (zorgkundigen, kine, ergo, logo, etc)
  * Kapster & pedicure
  * Animatie
* **Bewoner**
  * Verzorging
    * Zorgplanning
      * Checklist met uit te voeren taken per dag deel
      * Mogelijkheid om reactie toe te voegen
    * Medischedossier
      * Medicatie dat toegediend te worden
  * Agenda
    * Activiteiten
    * Bezoeken
  * Wondzorgdossier
    * Verslag en vooruitgang wonde
      * Plaats van de wonde
      * Soort wonde & genezingsprocedure
      * Aandachtspunten
      * Datum
      * Oorzaak
      * Opmerkingen
      * Afbeelding
  * Verslagen
    * Titel
    * Geneeskundige
    * Verslag
    * Afbeelding
    * Procedure
    * Opmerkingen
  * Bewoner
    * Perssonlijke: Voornaam, naam, profiel afbeelding, geboortedatum, adres, geloofsovertuiging, kamer nummer
    * Medische gegevens: lengte, gewicht, bloedgroep, peacemaker
    * Familie: Partner, kinderen    
    * ICE: contactpersonenen
    * Contactgegevens: huisarts, bewindvoerder, mutualiteit, ziekenhuis
    * Levensloop: beroep, hobbies, job
    * Biografie: verhalen
    * Eten voorkeur
  * Acties
    * Vrij observatie
      * Beschrijving
      * Medewerker
      * Tijdstip
      * Belangrijkheid
      * Melding voor andere medewerkers
    * Parameters
      * Type:
        * bloeddruk
        * pols opmeten
        * temperatuur
        * stoelgang
        * vocht inname en eliminatie
        * temperatuur
    * Valregeistratie
      * Plaats
      * Tijdstip
      * Oorzaak
      * Beschrijving
      * Gevolgen
      * Procedure
* Datasynchronisatie via de RESTful API

{% comment %}
<!-- ⚓ Hyperlinks: technologie en software componenten -->
{% endcomment %}

[babel]:                    https://babeljs.io/
[bootstrap]:                http://getbootstrap.com
[bower]:                    http://bower.io/
[composer]:                 https://getcomposer.org/
[homestead]:                https://laravel.com/docs/4.2/homestead
[html]:                     http://www.w3.org/TR/html5
[gh-faker]:                 https://github.com/fzaninotto/Faker
[gh-jsx]:                   https://facebook.github.io/jsx/
[git]:                      http://git-scm.com
[gulp]:                     http://gulpjs.com
[laravel]:                  https://laravel.com/
[mysql]:                    http://www.mysql.com/products/community
[node]:                     http://nodejs.org
[php]:                      http://php.net
[phpunit]:                  https://phpunit.de
[react]:                    https://facebook.github.io/react/
[sass]:                     http://sass-lang.com
[vagrant]:                  https://www.vagrantup.com
[virtualbox]:               https://www.virtualbox.org/
