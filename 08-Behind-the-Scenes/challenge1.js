// Criar um objeto counter com métodos para incrementar e exibir o valor do contador.
console.log('======= CHALLENGE 1 =======');
const counter = {
  value: 0,
  incrementar: function () {
    this.value++;
  },
  showValue: function () {
    console.log(this.value);
  },
};
counter.incrementar();
counter.incrementar();
counter.incrementar();
counter.showValue();

// Criar um objeto person com propriedades name e age, e métodos para alterar a idade e exibir as informações da pessoa.
console.log('======= CHALLENGE 2 =======');
const person = {
  name: "Augusto",
  age: 19,
  changeAge: function (newAge) {
    this.age = newAge;
  },
  showNewAge: function () {
    console.log(this.age);
  },
};
person.changeAge(22);
person.showNewAge();

// Criar um objeto book com propriedades title e author, e métodos para alterar o título e exibir as informações do livro.
console.log('======= CHALLENGE 3 =======');
const book = {
  bookName: "Nação Dopamina",
  author: "Dra. Anna Lembke",
  changeBook: function (newBookName, newAuthorName) {
    this.bookName = newBookName;
    this.author = newAuthorName;
  },
  showBook: function () {
    console.log(`${this.bookName}, ${this.author}`);
  },
};
book.showBook(); 
book.changeBook("Ferramenta dos Titãs", "Tim Ferris");
book.showBook()

// 