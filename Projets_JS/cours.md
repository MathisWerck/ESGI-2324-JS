# Développement web : javascript, web api fetch et json 

## Introduction à javascript

### Rôle de Javascript 

But initial : rendre dynamique les pages web.

Aujourd'hui, c'est un vrai langage de programmation. On peut faire : 

- du client lourd
- de l'application web 
- du mobile 

Javasacript sert de langage à la majorité des appli web 

## Fonctions et structure de contrôle

Il y a 3 façons de déclarer des variables en js :
- var (interdit de l'utiliser)
- let 
- const

var 

``` js
var test = "test";
```

let

``` js
let test2 = "test2";
```

const 

``` js 
const test3 = "test3";
```

### Sélectionner des éléments : 

- Par ID :

``` js
let element = document.getElementById("monId");
```

- Par Classe : 

``` js 
let elements = document.getElementsByClassName("maClasse");
```

- Par Balise :

``` js
let elements = document.getElementByTagName("p");
```

### Modifier des éléments :

- Changer le texte : 

``` js 
document.getElementById("monId").textContent= "Nouveau texte !";
```

- Changer le html interne : 

``` js 
document.getElementById("monId").innerHTML = "<span> Nouveau contenu HTML </span>";
```

### Modifier les styles :

- Changer le Style d'un Element :

``` js

```

### Ecouter et réagir aux evenements :

- Ajouter un écouteru d'éléments :

``` js
document.getElementById("monBouton").addEventListener("click", function() {
    alert("Bouton cliqué !");
})
```

Un callback est une fonction qui est placée en paramètre d'une autre fonction.


### Les fonction en JS

Syntaxe de base pour déclarer une fonction en JS:

```js
function nomDeLaFonction(param1) {
  // Code a executer
};
```

```js
const nomDeLaFonction = function (param1) {
  // Code a executer
};
```

```js
const nomDeLaFonction = (param1) => {
  // Code a executer
};
```

```js
const nomDeLaFonction = (param1) => {
  return param1 * 2;
};
```

```js
const nomDeLaFonction = (param1) => param1 * 2;
```

```js
const nomDeLaFonction = () => console.log("Hello");
```

```js
() => {}
```

## Tableaux

### Introduction aux tableaux

```js
let fruits = ["pomme", "banane", "fraise"];
```




### Intro JSON :










## Le DOM et la gestion d'évenements 



## Projet Final  