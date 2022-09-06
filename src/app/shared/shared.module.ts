import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

const importExport = [
  SidebarComponent
]

@NgModule({
  declarations: [
    importExport
  ],
  exports: [
    importExport
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
