
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccionesComponent } from './inicio/acciones/acciones.component';
import { AccionesListComponent } from './inicio/acciones/acciones-list/acciones-list.component';
import { AccionComponent } from './inicio/acciones/accion/accion.component';
import { EncargadosComponent } from './inicio/encargados/encargados.component';
import { EncargadoComponent } from './inicio/encargados/encargado/encargado.component';
import { EncargadoListComponent } from './inicio/encargados/encargado-list/encargado-list.component';
import { ReportesComponent } from './inicio/reportes/reportes.component';
import { ReporteComponent } from './inicio/reportes/reporte/reporte.component';
import { ReportesListComponent } from './inicio/reportes/reportes-list/reportes-list.component';
import { RolesComponent } from './inicio/roles/roles.component';
import { RolComponent } from './inicio/roles/rol/rol.component';
import { RolesListComponent } from './inicio/roles/roles-list/roles-list.component';
import { TiendasComponent } from './inicio/tiendas/tiendas.component';
import { TiendasListComponent } from './inicio/tiendas/tiendas-list/tiendas-list.component';
import { TiendaComponent } from './inicio/tiendas/tienda/tienda.component';
import { EncabezadoComponent } from './inicio/encabezado/encabezado.component';
import { PieComponent } from './inicio/pie/pie.component';


const appRoutes: Routes = [ 
  { path: 'inicio', component: InicioComponent },
  { path: 'accionescomponent', component: AccionesComponent },
  { path: 'accioneslistcomponent', component: AccionesListComponent },
  { path: 'accioncomponent', component: AccionComponent },
  { path: 'encargadoscomponent', component: EncargadosComponent },
  { path: 'encargadocomponent', component: EncargadoComponent },
  { path: 'encargadoslistcomponent', component: EncargadoListComponent },
  { path: 'reportescomponent', component: ReportesComponent },
  { path: 'reportecomponent', component: ReporteComponent },
  { path: 'reporteslistcomponent', component: ReportesListComponent },
  { path: 'rolescomponent', component: RolesComponent },
  { path: 'rolcomponent', component: RolComponent },
  { path: 'roleslistcomponent', component: RolesListComponent },
  { path: 'tiendascomponent', component: TiendasComponent },
  { path: 'tiendaslistcomponent', component: TiendasListComponent },
  { path: 'tiendacomponent', component: TiendaComponent },
  { path: '', redirectTo: 'inicio', pathMatch:'full' },
  { path: '**', redirectTo: 'inicio', pathMatch:'full' }

  
 ]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AccionesComponent,
    AccionesListComponent,
    AccionComponent,
    EncargadosComponent,
    EncargadoComponent,
    EncargadoListComponent,
    ReportesComponent,
    ReporteComponent,
    ReportesListComponent,
    RolesComponent,
    RolComponent,
    RolesListComponent,
    TiendasComponent,
    TiendasListComponent,
    TiendaComponent,
    EncabezadoComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
