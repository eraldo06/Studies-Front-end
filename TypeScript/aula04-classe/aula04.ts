class AnimalEstimacao {
    nomeDoAnimal: string;
  
    constructor(nomeRecebido: string) {
      this.nomeDoAnimal = nomeRecebido;
    }
  }
  
  class Cao extends AnimalEstimacao {
    constructor(nomeRecebido: string) {
      +-
      super(nomeRecebido);
    }
  
    latir() {
      console.log("Latiu");
    }
  }
  
  class Gato extends AnimalEstimacao {
    constructor(nomeRecebido: string) {
      super(nomeRecebido);
    }
  
    miar() {
      console.log("Miou");
    }
  }
  
  const tuca = new Cao("Tuca");
  const fuligem = new Gato("Fuligem");
  
  console.log(tuca);
  console.log(fuligem);