import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBottomOffcanvasComponent } from './components/modal-bottom-offcanvas/modal-bottom-offcanvas.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
	declarations: [ModalBottomOffcanvasComponent],
	imports: [CommonModule, IonicModule],
	exports: [ModalBottomOffcanvasComponent],
})
export class SharedModule {}
