import { Injectable } from "@angular/core";
import { Libro } from "./libro.model";

@Injectable()
export class ElencoLibriService {
  elenco: Libro[] = [
    {
      id: "1",
      autore: "Grisham John",
      titolo: "Il Socio",
      anno_pubblicazione: "1991",
      casa_editrice: "Mondadori",
      collana: "Miti collection"
    },
    {
      id: "2",
      autore: "Kerovak Jack",
      titolo: "Sulla strada",
      anno_pubblicazione: "1959",
      casa_editrice: "Mondadori",
      collana: "Miti collection"
    },
    {
      id: "3",
      autore: "Scott Fitzgerald francis",
      titolo: "Il grande Gatsby",
      anno_pubblicazione: "1950",
      casa_editrice: "Mondadori",
      collana: "Miti collection"
    },
    {
      id: "4",
      autore: "Hesse Hermann",
      titolo: "Il lupo della steppa",
      anno_pubblicazione: "1955",
      casa_editrice: "Mondadori",
      collana: "Miti collection"
    },
    {
      id: "5",
      autore: "GallMann Kuki",
      titolo: "Sognavo l'Africa",
      anno_pubblicazione: "1991",
      casa_editrice: "Mondadori",
      collana: "Miti collection"
    },
    {
      id: "6",
      autore: "Marquez Gabriel Garcia",
      titolo: "Dell'amore e di altri demoni",
      anno_pubblicazione: "1994",
      casa_editrice: "Mondadori",
      collana: "Miti collection"
    },
    {
      id: "7",
      autore: "Harris Thomas",
      titolo: "Il silenzio degli innocenti",
      anno_pubblicazione: "1988",
      casa_editrice: "Mondadori",
      collana: "Miti collection"
    },
    {
      id: "8",
      autore: "Decrescenzo Luciano",
      titolo: "Storia della filosofia medioevale",
      anno_pubblicazione: "2002",
      casa_editrice: "Mondadori",
      collana: "I Miti"
    },
    {
      id: "9",
      autore: "Busi Aldo",
      titolo: "Seminario sulla gioventù",
      anno_pubblicazione: "1984",
      casa_editrice: "Mondadori",
      collana: "I Miti"
    },
    {
      id: "10",
      autore: "AA VV",
      titolo: "Strade",
      anno_pubblicazione: "2004",
      casa_editrice: "RCS Libri",
      collana: "Ed. Speciale x 75° ANAS"
    },
    {
      id: "11",
      autore: "Eco Umberto",
      titolo: "Il pendolo di Foucault",
      anno_pubblicazione: "1988",
      casa_editrice: "RCS Libri",
      collana: "SUPER POCKET"
    },
    {
      id: "12",
      autore: "Peters Ellis",
      titolo: "Un cadavere di troppo",
      anno_pubblicazione: "1979",
      casa_editrice: "RCS Libri",
      collana: "SUPER POCKET"
    },
    {
      id: "13",
      autore: "Esquivel Laura",
      titolo: "Dolce come il cioccolato",
      anno_pubblicazione: "1989",
      casa_editrice: "RCS Libri",
      collana: "SUPER POCKET"
    },
    {
      id: "14",
      autore: "Giussani Angela & Luciana",
      titolo: "Requiem per Diabolik",
      anno_pubblicazione: "2004",
      casa_editrice: "Mondadori",
      collana: "I Miti"
    },
    {
      id: "15",
      autore: "George Elizabeth",
      titolo: "Il morso del serpente",
      anno_pubblicazione: "1999",
      casa_editrice: "RCS Libri",
      collana: "SUPER POCKET"
    },
    {
      id: "16",
      autore: "Birger Trudi",
      titolo: "Ho sognato la cioccolata per anni",
      anno_pubblicazione: "1992",
      casa_editrice: "PIEMME",
      collana: "MINI POCKET"
    },
    {
      id: "17",
      autore: "Hesse Hermann",
      titolo: "Siddharta",
      anno_pubblicazione: "1969",
      casa_editrice: "CDE",
      collana: ""
    },
    {
      id: "18",
      autore: "Guareschi Giovannino",
      titolo: "Don Camillo (mondo piccolo)",
      anno_pubblicazione: "1948",
      casa_editrice: "BUR",
      collana: "NARRATIVA"
    },
    {
      id: "19",
      autore: "Grimaldi Aurelio",
      titolo: "Meri per sempre",
      anno_pubblicazione: "1987",
      casa_editrice: "CDE",
      collana: ""
    },
    {
      id: "20",
      autore: "Pratolini Vasco",
      titolo: "Cronaca familiare",
      anno_pubblicazione: "1960",
      casa_editrice: "Mondadori",
      collana: "OSCAR CLASSICI MODERNI"
    },
    {
      id: "21",
      autore: "Woolf Virginia",
      titolo: "Orlando",
      anno_pubblicazione: "1928",
      casa_editrice: "BUR",
      collana: "SUPERCLASSICI"
    },
    {
      id: "22",
      autore: "Puzo Mario",
      titolo: "Il Padrino",
      anno_pubblicazione: "1969",
      casa_editrice: "Mondadori",
      collana: "OSCAR BEST SELLER"
    },
    {
      id: "23",
      autore: "Higgins Clark Mary",
      titolo: "Nella notte un grido",
      anno_pubblicazione: "1982",
      casa_editrice: "Sperling Paperback",
      collana: "SUPER BEST SELLER"
    },
    {
      id: "24",
      autore: "Highsmith Patricia",
      titolo: "Sconosciuti in treno",
      anno_pubblicazione: "1950",
      casa_editrice: "Bompiani",
      collana: "I GRANDI TASCABILI"
    },
    {
      id: "25",
      autore: "Cardinal Marie",
      titolo: "Ascolta il mare",
      anno_pubblicazione: "1962",
      casa_editrice: "Bompiani",
      collana: "I GRANDI TASCABILI"
    },
    {
      id: "26",
      autore: "Lorenz Conrad",
      titolo: "L'anello di re Salomone",
      anno_pubblicazione: "1949",
      casa_editrice: "Adelphi",
      collana: ""
    },
    {
      id: "27",
      autore: "Simenon Georges",
      titolo: "Betty",
      anno_pubblicazione: "1961",
      casa_editrice: "Adelphi",
      collana: ""
    },
    {
      id: "28",
      autore: "Simenon Georges",
      titolo: "L'uomo che guardava passare i treni",
      anno_pubblicazione: "1938",
      casa_editrice: "Adelphi",
      collana: ""
    },
    {
      id: "29",
      autore: "Richler Mordecai",
      titolo: "La versione di Barney",
      anno_pubblicazione: "1997",
      casa_editrice: "Adelphi",
      collana: ""
    },
    {
      id: "30",
      autore: "Perèz Reverte Arturo",
      titolo: "Capitano Alatriste",
      anno_pubblicazione: "1997",
      casa_editrice: "Il Saggiatore",
      collana: "TASCABILI"
    }
  ];
  constructor() {}
}
