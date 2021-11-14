export class Produto {
  constructor(
    public nome: string,
    public descricao: string,
    public preco: Number,
    public categorias: string,
    public imagem: string,
    public id?: Number
  ) {}
}
