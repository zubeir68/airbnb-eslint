# ESLint-Styleguides

![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--AMz6SUme--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/jv8mmasb5mf0ilw5q1lz.png)
![enter image description here](https://cdn-images-1.medium.com/max/1600/1*EJf1MIFRPIOUd_Rns8Yqiw.png)

## Was ist ESLint ?

***"
ESLint ist ein Open-Source-Dienstprogramm zum 'flusen' von JavaScript, das ursprünglich im Juni 2013 von Nicholas C. Zakas entwickelt wurde. Das Linten von Code ist eine statische Analyse, mit der häufig problematische Muster oder Codes ermittelt werden, die bestimmten Stilrichtlinien nicht entsprechen. Es gibt Code-Linters für die meisten Programmiersprachen, und Compiler integrieren manchmal Linting in den Kompilierungsprozess.."***   - eslint.org

**Ziel: Produktivität und Lesbarkeit**

## Was sind ESLint Styleguides?

### Eslint Styleguides sorgen dafür das dein Code gewisse Stilrichtlinien von einer zuvor gesetzen Konfiguration einhält. Es exestieren 2 bekannte Styleguides:

#### 1. AirBnb
#### 2. Google
![enter image description here](https://media.giphy.com/media/5OAC2cIC2XcWY/giphy.gif)

### 3. ESLint in Ember-App einfügen

#### ESLint plugin import installieren

```bash
npm install eslint-plugin-import --save-dev
```

#### Dann ESLint styleguide installieren - hier AirBnB
```bash
npm install eslint-config-airbnb-base --save-dev
```

#### Man ist immernoch frei 'rules' aufzustellen um den styleguide nochmal deinen Wünschen anzupassen!
