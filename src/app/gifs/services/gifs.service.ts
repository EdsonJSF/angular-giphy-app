import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'bFAARjufg25n3oCgy268kCSuaHYcGMsi';
  private _historial: string[] = [];

  public get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string = '') {
    if (!query) return;

    query = query.trim().toLocaleLowerCase();
    if (this._historial.includes(query)) return;

    this.updateHistorial(query);

    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  private updateHistorial(query: string) {
    this._historial.unshift(query);
    this.historialMax(10);
  }

  private historialMax(maxCantidad: number) {
    this._historial = this._historial.slice(0, maxCantidad);
  }
}
