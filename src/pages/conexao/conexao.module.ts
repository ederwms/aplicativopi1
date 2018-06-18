import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConexaoPage } from './conexao';

@NgModule({
  declarations: [
    ConexaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConexaoPage),
  ],
})
export class ConexaoPageModule {}
