import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  Gif,
  SearchGifsResponse,
} from '../../interfaces/gif/SearchGifsResponse';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'bFAARjufg25n3oCgy268kCSuaHYcGMsi';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  public get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
  }

  buscarGifs(query: string = '') {
    if (!query) return;

    query = query.trim().toLocaleLowerCase();
    if (this._historial.includes(query)) return;

    this.updateHistorial(query);

    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
      )
      .subscribe((res) => {
        console.log(res);
        this.resultados = res.data;
      });
  }

  private updateHistorial(query: string) {
    this._historial.unshift(query);
    this.historialMax(10);

    localStorage.setItem('historial', JSON.stringify(this._historial));
  }

  private historialMax(maxCantidad: number) {
    this._historial = this._historial.slice(0, maxCantidad);
  }
}
