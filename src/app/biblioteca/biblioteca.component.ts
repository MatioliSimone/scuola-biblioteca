import { Component, OnInit } from '@angular/core';
import { ElencoLibriService } from '../common/elenco-libri.service';
import { Libro } from "../common/libro.model";

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})

export class BibliotecaComponent implements OnInit {

//array di libri
  elencoLibri : Libro[];
  corrente : number;

  constructor(private elencoServ : ElencoLibriService) { }

  ngOnInit() {
    this.corrente = 0;
    this.elencoLibri = this.elencoServ.elenco;
  }

  cancellaLibro(libroDaCAncellare: Libro){
    alert("stai cancellando il libro" + libroDaCAncellare.titolo);
    alert(this.elencoLibri[this.corrente].titolo);
  }

}