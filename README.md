<img src="http://assets.angular.schule/logo-angular-power-workshop.png">

#### **von Johannes Hoppe**

<hr>

**Schön, dass Du dabei bist!**  
Merke dir schon einmal dieses Repository.
Hier wird während des Workshops stets der Quelltext unserer Beispielanwendung verfügbar sein.
> **https://github.com/angular-schule/2017-08-angular-workshop-hamburg**

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen. Die gesamte Installation wird rund 30 Minuten dauern. 


## Benötigte Software

1. Node.js **6.9** oder höher: [https://nodejs.org](https://nodejs.org)
2. Visual Studio Code **1.10** oder höher: [https://code.visualstudio.com](https://code.visualstudio.com)
   * [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack) für Visual Studio Code 
3. Google Chrome: [https://www.google.com/chrome/](https://www.google.com/chrome/)
   
## Hilfreiche Software

Folgende Tools erleichtern die Arbeit, der Workshop kann aber auch ohne durchgeführt werden.

1. Chrome Extension: [Angular Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)
2. ngrev: [https://github.com/mgechev/ngrev/releases](https://github.com/mgechev/ngrev/releases)
3. Git (und ggf. ein Client wie GitExtensions: [https://gitextensions.github.io](https://gitextensions.github.io))


## Globale Pakete installieren

Alle Windows-User sollten vor Beginn des Kurses die [`windows-build-tools`](https://github.com/felixrieseberg/windows-build-tools) installieren. Warnungen von NPM können ignoriert werden.  
Nach der Installation musst Du eine neue Konsole starten!

```
npm install -g windows-build-tools
```

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die Angular-CLI installieren:

```
npm install -g @angular/cli@1.2.1
```

Zu Beginn des Kurses wollen wir den TypeScript-Compiler ohne Hilfsmittel verwenden. Installiere diesen bitte wie folgt:

```
npm install -g typescript@2.4.1
```

Wir werden zusätzlich diverse Transformationen von TypeScript und LESS mit Webpack erledigen. Mit folgendem Befehl kannst Du die Webpack-CLI installieren:

```
npm install -g webpack@3.1.0
```

Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.
```
node -v
> Erwartet: v6.9.x oder höher

npm -v
> Erwartet: 3.x oder höher

ng -v
> Erwartet: 1.2.1

tsc -v
> Erwartet: 2.4.1

webpack -v
> Erwartet: 3.1.0
```

## Tag 0 - LESS und Bootstrap

Zur Einstimmung werden wir uns mit HMTL5, CSS3 und dem CSS-Preproessor LESS beschäftigen.
Wechsel bitte in das Verzeichnis `bootstrap-playground` und führe `npm install` aus.

## Startprojekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich im Workshop!

Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```
ng new book-rating --routing --styles=sass --prefix=br
cd book-rating
ng serve -o
```

Achtung! Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "Welcome to br!!" erscheinen!
Wenn bei allen Teilnehmern das Grundgerüst steht, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](http://assets.angular.schule/chrome_cli_welcome.png)


### Ich freue mich schon! 🙂

Bei Fragen wende dich einfach direkt an das Angular-Schule-Team:  
[team@angular.schule](mailto:team@angular.schule)

<hr>

### &copy; 2017 http://angular.schule, Stand: 10.07.2017


