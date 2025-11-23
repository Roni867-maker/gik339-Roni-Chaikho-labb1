"use strict";
// Aktiverar strikt läge för att fånga vanliga fel och införa strängare regler.
console.log("script.js laddat och körs.");

// Uppgift 2: Variabler och scope

console.log("\n--- Uppgift 2: Variabler och Scope ---");

// Deklarationer i Global Scope (roten av script.js)
let globalLet = "Global Let";
const globalConst = "Global Const";
var globalVar = "Global Var";

console.log("\n--- Utskrift Före Block Scope ---");
console.log("Global Let:", globalLet);
console.log("Global Const:", globalConst);
console.log("Global Var:", globalVar);

{ // Start av Block Scope
    console.log("\n--- Utskrift Inuti Block Scope ---");
    // Deklarationer i Block Scope
    let blockLet = "Block Let";
    const blockConst = "Block Const";
    var blockVar = "Block Var"; // 'var' ignorerar Block Scope

    // Utskrift av variabler inuti blocket
    console.log("Global Let (inuti):", globalLet);
    console.log("Block Let (inuti):", blockLet);
    console.log("Block Var (inuti):", blockVar);
} // Slut på Block Scope

console.log("\n--- Utskrift Efter Block Scope ---");
console.log("Global Let:", globalLet);
console.log("Global Const:", globalConst);
// console.log(blockLet); // ReferenceError: let/const har gått ur scope.
console.log("Block Var:", blockVar); // Fungerar bra 'var' ignorerar block scope.

/*
Reflektion uppgift 2 
1. Beskriver hur var, let och const skiljer sig gällande block.

   let och const är bäst. De stannar i det block ({}) de deklarerades i och syns inte utanför. Detta kallas block-scope.
   var är lite lurig. Den ignorerar blocket och blir synlig utanför. Därför kunde jag skriva ut `blockVar` efter blocket utan problem.
   Jag använder `const` för värden som inte ska ändras, och `let` för variabler som jag kanske vill uppdatera senare.

2. Reflekterar över vad som händer vid olika placering av console.log() (före blocket, i blocket, efter blocket).

   Före blocket:Det är bara de globala variablerna som syns.
   Inuti blocket:Alla variabler syns, både de globala och de jag skapade i blocket.
   Efter blocket: Här ser jag att `let` och `const` från blocket är borta (ReferenceError), men `var` från blocket syns fortfarande, vilket bevisar att den inte bryr sig om block-scope.
*/

// Uppgift 3: Jämförelser och specialvärden 

console.log("\n--- Uppgift 3: Jämförelser och specialvärden ---");

// 1. Testa och jämför olika värden.
console.log("'3' == 3 är:", '3' == 3);         
console.log("'3' === 3 är:", '3' === 3);        
console.log("NaN === NaN är:", NaN === NaN);    
console.log("null == undefined är:", null == undefined); 
console.log("null === undefined är:", null === undefined); 

// 2. Använd en ternary operator (?) för att avgöra om undefined är truthy eller falsy.
const isUndefinedTruthy = undefined ? "Truthy" : "Falsy";
console.log("undefined är:", isUndefinedTruthy); 

/*
Reflektion uppgift 3 
1. Förklarar output för de olika värdena som du testade med == och === och på vilket sätt de skiljer sig åt.

   == (dubbla likhetstecken):Försöker vara snäll och konvertera typer. Därför är strängen '3' lika med numret 3 (True). `null` och `undefined` är också True. Används sällan.
   === (trippla likhetstecken): Är strikt. Kräver att värde OCH typ är exakt samma. Därför är strängen '3' INTE lika med numret 3 (False). Denna ska man alltid använda.
   `NaN === NaN` blir False för att `NaN` betyder "resultatet blev konstigt", och det konstiga resultatet är inte lika med något annat och inte ens sig självt.

2. Förklarar vad som händer när ett uttryck står för sig självt i exempelvis en ternary operator eller inom parenteserna hos en if-sats.

   När jag skriver ett värde (som `undefined`) där JavaScript förväntar sig True/False (som i en `if`-sats eller ternary), bestämmer JavaScript om värdet är "Truthy" eller "Falsy".
   Vissa värden (som `undefined`, `null`, `0`, tom sträng) är automatiskt Falsy. Alla andra värden är Truthy.
   Testet med ternary operatorn bekräftade att `undefined` är Falsy.

3. Förklarar vad NaN, undefined och null representerar.

   NaN:Står för Not a Number. Får man när en matteoperation misslyckas, typ om jag försöker räkna med text.
   undefined: En variabel har skapats men har inte fått något värde än.
   null: Man har avsiktligt sagt att variabeln inte ska ha något värde.
*/

// Uppgift 4: Funktioner 

console.log("\n--- Uppgift 4: Funktioner ---");

// 3. Skapa en variabel med let som heter 'name' i roten av script.js.
let name = "Globala Namn";
console.log("name (Globalt) före funktionsanrop:", name); 

// 1. Skapa en funktion vid namn 'greet' som tar en parameter (name).
// Funktionsdeklaration (Vald variant)
function greet(name) { 
    console.log("name (Inuti 'greet'-funktionen, PARAMETERNS värde):", name);
    return `Hej ${name}`;
}

// 2. Anropa din funktion med valfritt argument.
const greeting = greet("Mikaela"); // "Mikaela" är argumentet

// 2. Skriv ut resultatet.
console.log("Resultat av 'greet':", greeting); 

// 3. Skriv ut värdet i name efter funktionsanropet.
console.log("name (Globalt) efter funktionsanrop:", name); 

/*
Reflektion uppgift 4 
1. Beskriver skillnaden mellan de olika sätten att skapa en funktion (funktionsdeklaration, funktionsuttryck och arrowfunktion), samt varför du valde den varianten som du valde.
   Funktionsdeklaration:Denna variant valdes för `greet` för att den är vanligast och enklast. Det är också den enda som kan anropas innan den skrivs i koden (Hoisting).
   Funktionsuttryck/Arrowfunktion: Måste anropas efter att de har skapats, precis som vanliga variabler.

2. Reflekterar över vad du behöver tänka på gällande varifrån du kan anropa dina funktioner (innan/efter funktionerna har skapats).
   Jag måste vara noga med att bara kalla på funktionsdeklarationer (som `greet`) innan de är deklarerade. Alla andra funktionstyper måste jag anropa efter att de har skapats.

3. Förklararar vad som händer om du ändrar variabeln/parametern name i de olika situationerna och hur det påverkar utskrifterna på de olika ställena i koden.
   Parametern `name` i funktionen är en helt ny, lokal variabel. Den är helt oberoende av den globala variabeln `name` jag skapade i toppen av filen.
   Utskriften inuti funktionen visade argumentet (`Mikaela`).
   Utskriften utanför funktionen visade den globala variabelns ursprungliga värde (`Globala Namn`), eftersom funktionen inte ändrade den.

4. Förklarar skillnaden mellan parameter, variabel och argument.
   Variabel: Ett namn som håller ett värde (t.ex. `let name`).
   Parameter:Namnet i funktionen som tar emot värdet (t.ex. `name` i `function greet(name)`).
   Argument:Det faktiska värdet jag skickar in när jag anropar funktionen (t.ex. `"Mikaela"`).
*/