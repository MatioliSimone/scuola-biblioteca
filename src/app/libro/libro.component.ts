import { Component, Input, OnInit } from "@angular/core";
import { Libro } from "../common/libro.model";

@Component({
  selector: "app-libro",
  templateUrl: "./libro.component.html",
  styleUrls: ["./libro.component.css"]
})
export class LibroComponent implements OnInit {
  @Input() mioLibro: Libro;

  percorsoBase: string = "https://raw.githubusercontent.com/MatioliSimone/ImgPerBibliotecaAngular/main/img30libri/";
  percorsoFinale: string;
  
  constructor() {}

  ngOnInit() {
    
  }
  creaPerocrso(){
    return this.percorsoFinale = this.percorsoBase + this.mioLibro.id + "-" + this.mioLibro.autore + ".jpg";
  }

  eliminaLibro(){
    
  }
}
