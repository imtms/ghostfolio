import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonIcon } from '@ionic/angular/standalone';

import { GfDialogHeaderModule } from '../dialog-header/dialog-header.module';
import { LoginWithAccessTokenDialog } from './login-with-access-token-dialog.component';

@NgModule({
  declarations: [LoginWithAccessTokenDialog],
  imports: [
    CommonModule,
    FormsModule,
    GfDialogHeaderModule,
    IonIcon,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TextFieldModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginWithAccessTokenDialogModule {}
