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
* **Rollen**
  * Afdelingsverantwoordelijke
* **Dashboard**
  * Bewoners
    * Kamer
* **Bewoner**
  * Visualisatie parameters
  * Dagboek met observaties
  * Inplannen van observaties
  * Dossier met gegevens
  * Toevoegen en verwijderen (soft delete)
* **Accountbeheer**
  * Rollen toevoegen en permissies toekennen

#### 2.2 API
De API is een RESTful API waarlangs de App communiceert met de back-end.

#### 2.3 App
* **Rollen**
  * Bezoeker (niet-aangemelde gebruiker)
  * Medewerkers (zorgkundigen, kine, ergo, logo, etc)
  * Kapster & pedicure
  * Animatie
* Bewoner
  * Dagboek
    * Overzicht alle verzorgin (24h)
    * Checklist verzorging
    * Vrij observaties
  * Agenda
    * Planing met activiteiten van bewoner
  * Dossier
    * Perssonlijke gegevens
    * Administratief: contactpersonenen
    * Medisch: huisarts, belangrijkste medische informatie
    * Verzorgin: pedicure, kapster
    * Levensloop: kinderen, hobbies, job
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