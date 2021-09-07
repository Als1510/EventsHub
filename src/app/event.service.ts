import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "https://eventshubs.herokuapp.com/api/events";
  private _specialEventsUrl = "https://eventshubs.herokuapp.com/api/special"

  constructor(private _http: HttpClient) { }

  getEvents() {
    return this._http.get<any>(this._eventsUrl);
  }

  getSpecialEvents() {
    return this._http.get<any>(this._specialEventsUrl);
  }
}
