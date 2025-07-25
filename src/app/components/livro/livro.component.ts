import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

  livro = {
    titulo: "Código Limpo",
    autoria: "Robert C. Martin",
    imagem: "https://m.media-amazon.com/images/I/71dH97FwGbL._AC_UL320_.jpg"
  }
}
