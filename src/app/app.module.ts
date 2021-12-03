import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroEmpreededorComponent } from './cadastro-empreededor/cadastro-empreededor.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
    RodapeComponent,
    
    LoginComponent,
    
    CadastroClienteComponent,
    CadastroEmpreededorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
