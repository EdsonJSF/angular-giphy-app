import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifPageComponent } from './gif-page/gif-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';

const importExport = [GifPageComponent];

@NgModule({
  declarations: [importExport, BusquedaComponent, ResultadosComponent],
  exports: [importExport],
  imports: [CommonModule],
})
export class GifsModule {}
