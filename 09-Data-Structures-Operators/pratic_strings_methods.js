/*
Básicos
Concatenação de Strings
- Crie duas variáveis de string e concatene-as usando o método concat().

2. Comprimento da String
- Crie uma string e use a propriedade length para encontrar o comprimento da string.

3. Buscar Substring
- Use o método indexOf() para encontrar a posição de uma substring em uma string.

4. Extração de Substring
- Use o método slice() para extrair uma parte específica de uma string.

5. Substituição de Substring
- Use o método replace() para substituir uma substring por outra.

6. Transformar em Maiúsculas e Minúsculas
- Converta uma string para maiúsculas usando toUpperCase() e para minúsculas usando toLowerCase().
*/

// 1.
const firstName = "Augusto";
const lastName = "Castilho Borges";

const concatNames = (firstName, lastName) => firstName.concat(" " + lastName);
console.log(concatNames(firstName, lastName)); // Augusto Castilho Borges

// 2.
const lengthStr = "Ontem arrumei todo o meu material de estudo!";
console.log(lengthStr.length); // 44

// 3.
const searchSub = "Trem";
console.log(searchSub.indexOf("e")); // 2

// 4.
const whatIsMy = lengthStr.slice(25, lengthStr.length - 1);
console.log(whatIsMy); // material de estudo

// 5.
console.log(searchSub.toUpperCase()); // TREM
console.log(firstName.toLowerCase()); // augusto

/*
Intermediários

7. Dividir String
- Use o método split() para dividir uma string em um array de substrings.

8. Remover Espaços em Branco
- Use o método trim() para remover espaços em branco no início e no fim de uma string.

9. Reverso de String
- Escreva uma função que inverta uma string usando os métodos split(), reverse() e join().

10. Checar Substring
- Use o método includes() para verificar se uma string contém uma determinada substring.

11. Repetir String
- Use o método repeat() para repetir uma string um número específico de vezes.
*/

// 7.
const subsStr = lengthStr.split(" ");
console.log(subsStr); // ['Ontem', 'arrumei', 'todo', 'o', 'meu', 'material','de','estudo!']

// 8.
const spaceInWhite = "  Livro de Historia      ";
console.log(spaceInWhite); //   Livro de Historia      ;
console.log(spaceInWhite.trim()); // Livro de Historia

// 9.
console.log(lengthStr.split(" ").reverse().join(" ")); // estudo! de material meu o todo arrumei Ontem

// 10.
const word = "Cruzeiro do Sul";
console.log(word.includes("e")); // true
console.log(word.includes("a")); // false

// 11.
console.log(searchSub.repeat(4)); // TremTremTremTrem

/*
Avançados

12. Interpolação de Strings
- Use template literals (crase `) para criar uma string que inclua variáveis.

13. Remover Caracteres Específicos
- Escreva uma função que remova todos os caracteres não alfanuméricos de uma string.

14. Capitalizar Primeira Letra
- Escreva uma função que capitaliza a primeira letra de cada palavra em uma string.

15. Contar Ocorrências de uma Substring
- Escreva uma função que conte quantas vezes uma substring aparece em uma string.

16. Comparação de Strings
- Use o método localeCompare() para comparar duas strings de acordo com a ordem alfabética.
*/

// 12.
const age = 45;
const city = "Uberlandia";
const nameS = "Cintia";
const output = `${nameS} vive em ${city} e tem ${age} anos de idade`;
console.log(output); // Cintia vive em Uberlandia e tem 45 anos de idade

// 13.
// Não aprendi expressões regulares ainda

// 14.
const capitalizeFirstCaracter = function (str) {
  const arrStr = str.split(" ");
  let newStr = "";
  for (const item of arrStr) {
    const newItem = item.replace(item[0], item[0].toUpperCase());
    newStr = newStr + newItem + " ";
  }

  console.log(newStr);
};
capitalizeFirstCaracter("eu não sou assim"); // Eu Não Sou Assim

// 15.
const xA = function (str) {
  const arrStr = str.split("");
  let count = 0;
  for (const item of arrStr) {
    if (item === "a" || item === "A") {
      count++;
    }
  }

  console.log(count);
};
xA("Aquela Menina de Branco"); // 4

// 16.
// Não aprendi ainda

/*
Exercícios Práticos

17. Palíndromo
- Escreva uma função que verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente).

18. Formatação de CPF
- Crie uma função que formate uma string de 11 dígitos como um CPF (###.###.###-##).

19. Anagramas
- Escreva uma função que verifique se duas strings são anagramas uma da outra.

20. Slugify
- Escreva uma função que converta uma string em um slug (ex: "Aprendendo JavaScript" -> "aprendendo-javascript").
*/

// 17.
const palindromoOrNot = function (str) {
  const palindromoForm = str.split("").reverse().join("");
  if (str === palindromoForm) {
    console.log(`palindromo`);
  } else {
    console.log(`NOT!: ${palindromoForm}`);
  }
};
palindromoOrNot('ala'); // palindromo
palindromoOrNot('anilina'); //palindromo
palindromoOrNot('Jogo'); // NOT!: ogoJ
palindromoOrNot('esse'); // palindromo
palindromoOrNot('roma'); // NOT!: amor
palindromoOrNot('ata'); // palindromo
