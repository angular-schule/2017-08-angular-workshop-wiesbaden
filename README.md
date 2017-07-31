<img src="http://assets.angular.schule/logo-angular-power-workshop.png">

#### **von Johannes Hoppe**

<hr>

**Schön, dass Du dabei bist!**  
Merke dir schon einmal dieses Repository.
Hier wird während des Workshops stets der Quelltext unserer Beispielanwendung verfügbar sein.
> **https://github.com/angular-schule/2017-08-angular-workshop-wiesbaden**

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen. Die gesamte Installation wird rund 30 Minuten dauern. 


## Benötigte Software

1. Node.js **6.9** oder höher: [https://nodejs.org](https://nodejs.org)
2. Visual Studio Code **1.10** oder höher: [https://code.visualstudio.com](https://code.visualstudio.com)
   * [Angular-Schule: Extension Pack](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack) für Visual Studio Code 
3. Google Chrome: [https://www.google.com/chrome/](https://www.google.com/chrome/) - oder Google Chrome Portable

Zum Extension Pack:
Aufgrund von Download-Beschränkungen wird die Sammlung wahrscheinlich nicht installierbar sein.
Bitte lade [dieses ZIP-Archiv herunter](http://assets.angular.schule/2017-08-angular-schule-extension-pack.zip) und installiere die Extensions manuell:

![Screenshot VSCode](http://assets.angular.schule/vscode_install_from_vsix.png)


## Globale Pakete installieren

Bitte installiere folgende Software. Warnungen von NPM können ignoriert werden.  

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die Angular-CLI installieren:

```
npm install -g @angular/cli@1.2.6
```

Zu Beginn des Kurses wollen wir den TypeScript-Compiler ohne Hilfsmittel verwenden. Installiere diesen bitte wie folgt:

```
npm install -g typescript@2.4.2
```

Wir werden zusätzlich diverse Transformationen von TypeScript und LESS mit Webpack erledigen. Mit folgendem Befehl kannst Du die Webpack-CLI installieren:

```
npm install -g webpack@3.2.0
```

Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind.
```
node -v
> Erwartet: v6.9.x oder höher

npm -v
> Erwartet: 3.x oder höher

ng -v
> Erwartet: 1.2.6

tsc -v
> Erwartet: 2.4.2

webpack -v
> Erwartet: 3.2.0
```


## Startprojekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich im Workshop!

Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```
ng new book-rating --routing --style=less --prefix=br
cd book-rating
ng serve -o
```

Achtung! Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages for tooling via npm.` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text "Welcome to br!" erscheinen!
Wenn bei allen Teilnehmern das Grundgerüst steht, können wir ohne Zeitverlust loslegen.

![Screenshot CLI](http://assets.angular.schule/chrome_cli_welcome.png)


### Ich freue mich schon! 🙂

Bei Fragen wende dich einfach direkt an das Angular-Schule-Team:  
[team@angular.schule](mailto:team@angular.schule)

<hr>

### &copy; 2017 http://angular.schule, Stand: 31.08.2017


