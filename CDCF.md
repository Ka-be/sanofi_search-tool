# Cahier des Charges Fonctionnel (CDCF)

## Présentation du Projet : Qui fait Quoi ?

Le projet consiste à créer une application web de type _"site vitrine"_ / _"moteur de recherche"_. Cette application permettra aux utilisateurs de SANOFI AMBARES de réaliser une recherche par mots clefs / Emplacement afin d'être redirigé vers le référent HSE / SG le plus adapté.

## Besoins et Objectifs

Besoin Identifiés :

-   Un utilisateur doit pouvoir consulter la liste des référents HSE / SG de l'entreprise ; l'identité (Nom / prénom / photo), le poste, et les coordonnées sont exposés publiquement.
-   Un utilisateur doit pouvoir consulter les détails d'un référent en particulier.
-   Un utilisateur doit pouvoir avoir une recommandation fiable du référent concerné par sa recherche.
-   Un utilisateur doit pouvoir réaliser une recherche par couple mots-clefs / lieu / zone.

Objectifs du Projet :

-   Fournir une interface utilisateur simple et intuitive.
-   Permettre aux utilisateurs d'effectuer une recherche simple et rapide pour identifier le bon référent
-   Permettre aux utilisateurs de visualiser l'entièreté des référents HSE / SG du site.
-   Permettre aux utilisateurs d'obtenir des informations spécifiques à un référent et de pouvoir le contacter via des CTA.

## Fonctionnalités du Projet

**Spécifications Fonctionnelles** :

1. Effectuer une recherche par mots clefs et zone.

> Un utilisateur peut effectuer une recherche par mots clefs et zone via la page d'accueil.

2. Consulter la fiche contact d'un référent.

> Un utilisateur peut visualiser la fiche contact d'un référent et le contacter par _mail_

3. Consulter l'ensemble des référents HSE / SG du site et les contacter.

> -   Un utilisateur peut visualiser l'ensemble des référents du site
> -   Un utilisateur peut contacter ces référents via son _mail_ ou téléphone.

**Évolutions Potentielles** : aucune évolution potentielle recensée à ce jour ;

## Cible du Projet

Le public cible de ce projet sont l'ensemble des employés de SANOFI AMBARES susceptibles de devoir contacter un référent HSE / SG.

## Arborescence de l'Application

**Page d'Accueil** :

-   Barre de recherche
-   Lien renvoyant a la liste des référents.

**Page de référent suggeré** :

-   Détails sur le référent suggeré selon la recherche.

**Page de liste des référents** :

-   Liste des référents HSE / SG du site.

## Liste des User Stories

| User Story | En tant que... | Je veux...                                                | Depuis...                       |
| ---------- | -------------- | --------------------------------------------------------- | ------------------------------- |
| 1          | Utilisateur    | pouvoir effectuer une recherche par mots-clefs / zone     | la page d'accueil.              |
| 2          | Utilisateur    | pouvoir visualiser l'ensemble des référents               | la page de liste des référents. |
| 3          | Utilisateur    | pouvoir visualiser le référent suggeré selon ma recherche | la page de référent suggeré.    |
| 4          | Utilisateur    | pouvoir contacter le référent suggeré                     | la page de référent suggeré.    |

## Use Cases Diagramme (UC)

```plantuml
@startuml
left to right direction
actor Invité as i
package SiteVitrine {
  usecase "Consulter liste projets" as UC1
  usecase "Naviguer détail projet" as UC2
  usecase "Consulter adresse email entreprise" as UC3
  usecase "Consulter socials entreprise" as UC4
}
i --> UC1
i --> UC2
i --> UC3
i --> UC4
@enduml
```

![UC Diagram](./plantuml_out/plant_UC_1.png)

## Diagramme de Séquence

_FindAllProjects_ :

```plantuml
@startuml
Invité -> "dashboardController" as D : 1: Afficher Projets
D -> "Projet" as C : 1.1 : getProjets(): listeProjets
C --> D : 1.2 : Projets
D -> "ViewProjet" as V : 1.3 : render(projets)
V --> D : 1.4: renderView
D --> Invité : 1.5 : ok
@enduml
```

![Sequence Diagram FindAllProjects](./plantuml_out/plant_Seq_1.png)

_FindProjectById_ :

```plantuml
@startuml
Invité -> "projectDetailController" as D : 1: Afficher Détail Projet
D -> "Projet" as C : 1.1 : getProjet(int): Projet
C --> D : 1.2 : Projet
D -> "ViewProjetDetail" as V : 1.3 : render(projet)
V --> D : 1.4: renderView
D --> Invité : 1.5 : ok
@enduml
```

![Sequence Diagram FindProjectById](./plantuml_out/plant_Seq_2.png)

## Diagramme de Classe

```plantuml
@startuml
package models {
  class Owner {
    - login: String
    - html_url: String
    - type: String
    - avatar_url: String
  }
  class Project {
    - private: boolean
    - archived: boolean
    - name: String
    - full_name: String
    - description: String
    - language: String
    - html_url: String
    - license: String
  }
  Owner "0..*" - "1..1" Project
}

package controllers {
  class DashboardController {
    + void render()
  }
  class ProjectdetailController {
    + void render(int projectId)
  }
}
@enduml
```

![Class Diagram](./plantuml_out/plant_C_1.png)

## Entités-Relations Diagramme (ERD)

```plantuml
@startuml

entity "Project" as e01 {
  *project_id : number <<generated>>
  --
  *owner_id : number <<FK>>
  *private: boolean
  *archived:  boolean
  *name: text
  *full_name: text
  *description : text
  *language: text
  *html_url: text
  license: text
  created_at: date
  updated_at: date
}

entity "Owner" as e02 {
  *owner_id : number <<generated>>
  --
  *login: text
  *html_url: text
  *type: text
  avatar_url: text
  created_at: date
  updated_at: date
}

e02 }o----|| e01

@enduml
```

![ER Diagram](./plantuml_out/plant_ER_1.png)

## Wireframes

Page d'accueil :

![wireframe page accueil](./j01-assets/wireframe-index.png)

Page de projet :

![wireframe page projet](./j01-assets/wireframe-project.png)

## Maquettes

Page d'accueil :

![mockup page accueil](./mockups/page_accueil.png)

Page de projet :

![mockup page projet](./mockups/page_projet.png)
