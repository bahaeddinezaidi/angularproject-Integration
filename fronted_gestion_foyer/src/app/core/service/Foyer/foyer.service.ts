import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Bloc} from "../../Models/Bloc/bloc";
import {Foyer} from "../../Models/Foyer/foyer";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiurl='http://localhost:8081/foyer';


  constructor(private http:HttpClient) { }
  retrieveAllFoyers():Observable<Foyer[]>{
    return this.http.get<Foyer[]>(`${this.apiurl}/retrieveAllFoyers`)
  }
  addFoyer(foyer:Foyer):Observable<Foyer>{
    return this.http.post<Foyer>(`${this.apiurl}/addFoyer`,foyer)
  }
  updateFoyer(idFoyer:number,updatedFoyer:Foyer):Observable<Foyer>{
    return this.http.put<Foyer>(`${this.apiurl}/updateFoyer/${idFoyer}`,updatedFoyer)
  }
  retrieveFoyer(id: number): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.apiurl}/retrieveFoyer/${id}`);
  }

  removeFoyer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/removeFoyer/${id}`);
  }
}
