import { Component } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styles: [],
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public nome: string = "";

  adicionarClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  // keyUp(event: any) {
  //   this.nome = event.target.value;
  // }
}
