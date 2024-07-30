const usuario = {
  nome: "Augusto",
  email: "augusto@gmail.com",
  endereco: {
    logadouro: "Rua Ai",
    complemento: "123",
    cidade: {
      nome: "Patos la de minas",
      estado: {
        nome: "Minas",
        sigla: "MG",
      },
    },
  },
  
};

console.log(usuario?.endereco?.cidade?.estado?.sigla);

