import {
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule],
})
export class MaterialModule {}
