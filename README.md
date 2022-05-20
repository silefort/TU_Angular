# Initialisation d'un projet Angular

Création d'un projet angular : 

```
ng new <project-name>
```

# Les outils nécessaires pour exécuter des Tests unitaires 

3 outils principaux sont nécessaires pour executer des tests Angular

* @angular/cli : `ng test` est la commande haut niveau qui permet d'appeler Karma pour exécuter les tests unitaires
* Karma : moteur de test, outil permettant d’executer les TUs et calculer le code-coverage sur un navigateur ou en ligne de commande.
* Jasmine : framework de tests unitaires.

# Fichiers de conf générés à l'init du projet :

Les fichiers suivants sont générés automatiquement à l'initialisation d'un projet Angular

* <à remplir>
* <à remplir>
* <à remplir>

# Installation des pré-requis et dépendances 

Installer le plugin firefox pour karma :

```
npm install karma-firefox-launcher
```
    
# Executer les tests unitaires en Angular 

`ng test`

# Etapes de structuration d’un test Jasmine :

Par défaut, les fichiers de tests unitaires sont identifiés par l’extension .spec.ts.
par exemple pour le service <calculateService> les TU sont définis dans le fichier <calculate-service.service.spec.ts> 

## 1- declaration du test module :
  
Pour écrire des tests unitaires avec Jasmine, on va commencer par déclarer un TestingModule, la structure de déclaration pour un composant est la suivante

```
beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
    // Dépendances directes de notre module
    imports: [HttpClientTestingModule],

    // Composants utilisés dans le template
    declarations: [...],

    // Services injectables utilisés
    providers: [...],
  })
    .compileComponents();
}));
```
  
## 2 - Ecrire un test Jasmine :


