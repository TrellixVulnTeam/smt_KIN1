import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

//Panel de administracion
import { PanelLoginComponent }          from "./components/panel-login/panel-login.component";
import { PanelComponent }               from './components/panel/panel.component';
import { PanelInicioComponent }         from "./components/panel-inicio/panel-inicio.component";
import { PanelPinesGenerarComponent }   from './components/panel-pines-generar/panel-pines-generar.component';
import { PanelInscritosComponent }      from './components/panel-inscritos/panel-inscritos.component';
import { PanelAdmitidosVerComponent }   from './components/panel-admitidos-ver/panel-admitidos-ver.component';
import { PanelMatriculadosComponent }   from './components/panel-matriculados/panel-matriculados.component';
import { PanelTransaccionesComponent }  from './components/panel-transacciones/panel-transacciones.component';
import { PanelAdministradoresComponent }from './components/panel-administradores/panel-administradores.component';
import { PanelRegisterUserComponent }   from "./components/panel-register-user/panel-register-user.component";
import { PanelPinesGeneradosComponent } from './components/panel-pines-generados/panel-pines-generados.component';
import { PanelAgendaComponent } from "./components/panel-agenda/panel-agenda.component";
import { PanelCalificacionComponent } from "./components/panel-calificacion/panel-calificacion.component";
import { PanelCajaMenorComponent } from "./components/panel-caja-menor/panel-caja-menor.component";
import { PanelConfiguracionCajaMenorComponent } from './components/panel-configuracion-caja-menor/panel-configuracion-caja-menor.component';
import { PanelConfiguracionCrearUsuarioComponent } from './components/panel-configuracion-crear-usuario/panel-configuracion-crear-usuario.component';
import { PanelConfiguracionListarUsuariosComponent } from './components/panel-configuracion-listar-usuarios/panel-configuracion-listar-usuarios.component';
import { PanelRemenberPasswordUserComponent } from './components/panel-remenber-password-user/panel-remenber-password-user.component';


//panel de padres de familia o niños
import { PinComponent }               from "./components/pin/pin.component";
import { PinLoginComponent }          from './components/pin-login/pin-login.component';
import { PinInscripcionesComponent }  from './components/pin-inscripciones/pin-inscripciones.component';
import { PinEntrevistasComponent }    from './components/pin-entrevistas/pin-entrevistas.component';
import { PinAdmitidosComponent }      from './components/pin-admitidos/pin-admitidos.component';
import { PinMatriculadosComponent }   from './components/pin-matriculados/pin-matriculados.component';

//servicios
import { GuardiaService }     from "./services/guardia.service";
import { GuardiaPinService }  from "./services/guardia-pin.service";

const ROUTES: Routes = [

  { path: 'login', component: PanelLoginComponent },
  { path: 'registrar-usuario', component: PanelRegisterUserComponent },   
  { path: 'recuperar-contrasena', component: PanelRemenberPasswordUserComponent },    
 
  { path: 'panel', component: PanelComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inicio'},
      { path: 'inicio',         component:PanelInicioComponent },
      { path: 'generar-pin',    component:PanelPinesGenerarComponent },
      { path: 'pines-generados',component:PanelPinesGeneradosComponent },
      { path: 'inscritos',      component:PanelInscritosComponent },
      { path: 'ver-admitidos',  component:PanelAdmitidosVerComponent },
      { path: 'matriculados',   component:PanelMatriculadosComponent },
      { path: 'transacciones',  component:PanelTransaccionesComponent },
      { path: 'administradores',component:PanelAdministradoresComponent },
      { path: 'agenda',         component:PanelAgendaComponent },
      { path: 'calificacion',   component:PanelCalificacionComponent },
      { path: 'caja-menor',     component:PanelCajaMenorComponent },
      { path: 'configuracion-caja-menor', component:PanelConfiguracionCajaMenorComponent },
      { path: 'configuracion-crear-usuario', component:PanelConfiguracionCrearUsuarioComponent },
      { path: 'configuracion-listar-usuarios', component:PanelConfiguracionListarUsuariosComponent }


    ],
    canActivate: [ GuardiaService ]
  },
  
  { path: 'pin', component: PinComponent,
    children:[
      { path: 'inscripciones',component:PinInscripcionesComponent },
      { path: 'entrevistas',  component:PinEntrevistasComponent },
      { path: 'admitidos',    component:PinAdmitidosComponent },
      { path: 'matriculados', component:PinMatriculadosComponent }      
    ],
    canActivate: [GuardiaPinService]
  },
  { path: 'pin/login', component:PinLoginComponent },  
  { path: '**', pathMatch: 'full', redirectTo:'pin/login' }
];

export const ROUTES_APP = RouterModule.forRoot(ROUTES, {useHash:true});

export const routedComponents = [
  //Components dashboard - componentes del panel
  PanelLoginComponent,
  PanelRegisterUserComponent,
  PanelComponent, 
  PanelInicioComponent, 
  PanelPinesGenerarComponent, 
  PanelInscritosComponent,
  PanelAdmitidosVerComponent,
  PanelMatriculadosComponent,
  PanelTransaccionesComponent,
  PanelAdministradoresComponent,
  PanelPinesGeneradosComponent,
  PanelAgendaComponent,
  PanelCalificacionComponent,
  PanelCajaMenorComponent,
  PanelConfiguracionCajaMenorComponent,
  PanelConfiguracionCrearUsuarioComponent,
  PanelConfiguracionListarUsuariosComponent,
  PanelRemenberPasswordUserComponent,
  //pin components - componentes de pines 
  PinComponent,
  PinLoginComponent,
  PinInscripcionesComponent,
  PinAdmitidosComponent,
  PinEntrevistasComponent,
  PinMatriculadosComponent
];