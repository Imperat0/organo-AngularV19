export interface Livro {
  titulo: string;
  autoria: string;
  favorito: boolean;
  genero: Generoliterario;
  imagem: string;
}

export interface Generoliterario{
  id: string;
  value: string;
  livros: Livro[];
}
