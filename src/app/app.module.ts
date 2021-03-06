import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePE from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MisionvisionComponent } from './institucional/misionvision/misionvision.component';
import { ObjetivosComponent } from './institucional/objetivos/objetivos.component';
import { UbicacionComponent } from './institucional/ubicacion/ubicacion.component';
import { HistoriaComponent } from './institucional/historia/historia.component';
import { CreacionComponent } from './institucional/creacion/creacion.component';
import { EstructuraComponent } from './institucional/estructura/estructura.component';
import { MarcolegalComponent } from './institucional/marcolegal/marcolegal.component';
import { RedsaludComponent } from './directorio/redsalud/redsalud.component';
import { AseguramientoComponent } from './organo/aseguramiento/aseguramiento.component';
import { DocumentosgestionComponent } from './transparencia/documentosgestion/documentosgestion.component';
import { RedListComponent } from './directorio/redsalud/red-list/red-list.component';
import { RedAddComponent } from './directorio/redsalud/red-add/red-add.component';
import { LoginComponent } from './login/login.component';

//Services
import { RedesService } from './services/redes.service';
import { AuthService } from './services/auth.service';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FuncionarioAddComponent } from './directorio/funcionarios/funcionario-add/funcionario-add.component';
import { FuncionarioListComponent } from './directorio/funcionarios/funcionario-list/funcionario-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    MisionvisionComponent,
    ObjetivosComponent,
    UbicacionComponent,
    HistoriaComponent,
    CreacionComponent,
    EstructuraComponent,
    MarcolegalComponent,
    RedsaludComponent,
    AseguramientoComponent,
    DocumentosgestionComponent,
    RedListComponent,
    RedAddComponent,
    LoginComponent,
    FuncionarioAddComponent,
    FuncionarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [RedesService,AuthService,{ provide: LOCALE_ID, useValue: "es-PE" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
