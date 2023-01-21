import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


   api_key = 'api_key=VoNpCzdLrAyG5szyHTusDZZDK10zpl1h&q=dbz&params=10';
  // Trayendo la api
  urlBase = environment.Api_url+'search?api_key=VoNpCzdLrAyG5szyHTusDZZDK10zpl1h&q=goku&limit=9';

  constructor(private http: HttpClient) { }

  // Metodo para consumir una api
  getAll(): Observable<any>{
    const url = this.urlBase;
    return this.http.get<any>(url);
  }
}
