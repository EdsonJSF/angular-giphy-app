import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {
  Gif,
  SearchGifsResponse,
} from '../../interfaces/gif/SearchGifsResponse';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'bFAARjufg25n3oCgy268kCSuaHYcGMsi';
  private apiUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  public get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs(query: string = '') {
    if (!query) return;

    query = query.trim().toLocaleLowerCase();

    this.updateHistorial(query);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.apiUrl}/search`, { params })
      .subscribe((res) => {
        this.resultados = res.data;
        localStorage.setItem('resultados', JSON.stringify(res.data));
      });
  }

  private updateHistorial(query: string) {
    if (this._historial.includes(query)) return;
    this._historial.unshift(query);
    this.historialMax(10);

    localStorage.setItem('historial', JSON.stringify(this._historial));
  }

  private historialMax(maxCantidad: number) {
    this._historial = this._historial.slice(0, maxCantidad);
  }
}
