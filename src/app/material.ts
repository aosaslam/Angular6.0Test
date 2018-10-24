import {MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
})
export class MaterialModule {}
