import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public options: Array<any> = [
		{ icon: 'person-add-outline', text: 'Indicar amigos'},
		{ icon: 'phone-portrait-outline', text: 'Recarga celular'},
		{ icon: 'barcode-outline', text: 'Pagar boleto'},
		{ icon: 'wallet-outline', text: 'Depositar'},
		{ icon: 'options-outline', text: 'Ajustar limite'},
		{ icon: 'lock-open-outline', text: 'Bloquear cartão'},
		{ icon: 'card-outline', text: 'Cartão virtual'},
		{ icon: 'help-circle-outline', text: 'Me ajuda'},
	];
	public slidesOptions: any = { slidesPerView: 3.5, freeMode: true };

	public itemsAccount: Array<any> = [
		{ icon: 'person-outline', text: 'Perfil'},
		{ icon: 'cash-outline', text: 'Configurações da conta'},
		{ icon: 'card-outline', text: 'Configurações do cartão'},
		{ icon: 'phone-portrait-outline', text: 'Configurações do app'},
		{ icon: 'help-circle-outline', text: 'Ajuda'},
	];

	constructor() { }

}
