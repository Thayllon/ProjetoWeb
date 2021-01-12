import { ProdutoService } from "./../produtos.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto";

@Component({
  selector: "app-lista-produto",
  templateUrl: "./lista-produto.component.html",
})
export class ListaProdutoComponent implements OnInit {
  constructor(private ProdutoService: ProdutoService) {}

  public produtos: Produto[] | undefined;

  ngOnInit() {
    this.ProdutoService.obterProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
        console.log(produtos);
      },
      (error) => console.log(error)
    );
  }
}
