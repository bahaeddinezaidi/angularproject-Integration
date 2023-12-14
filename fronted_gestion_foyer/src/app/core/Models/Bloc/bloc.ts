import {Chambre} from "../Chambre/chambre";
import { Foyer } from "../Foyer/foyer";

export interface Bloc {
  idBloc : number ;
  nomBloc : string ;
  capaciteBloc : number ;
  foyer:Foyer;
}
