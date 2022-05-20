# initialisation d'un projet  
creation d'un projet angular : 
    ```
    ng new <project-name>
    ```

# les outils nécessaires pour éxecuter des Tests unitaires 
* @angular/cli
* Karma : outil permettant d’exécuter les TUs et calculer le code-coverage sur un navigateur ou en ligne de commande.
* Jasmine : framework de tests unitaires.

# Les fichiers de configuration suivants sont automatiquement créés lors de l’initialisation du projet :


# installer le plugin firefox pour karma :
installation des prerequis 
    ```
    npm install karma-firefox-launcher
    ```

# Etapes de structuration d’un test Jasmine :

Par défaut, les fichiers de tests unitaires sont identifiés par l’extension .spec.ts.
par exemple pour le service <calculateService> les TU sont définis dans le fichier <calculate-service.service.spec.ts> 

# 1- declaration du test module
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

# 2- 
