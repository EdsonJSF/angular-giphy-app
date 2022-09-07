import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];

  public get historial(): string[] {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {
    if (!query) return;

    query = query.trim().toLocaleLowerCase();
    if (this._historial.includes(query)) return;

    this._historial.unshift(query);
    this.historialMax(10);

    console.log(this._historial);
  }

  private historialMax(maxCantidad: number) {
    this._historial = this._historial.slice(0, maxCantidad);
  }
}
