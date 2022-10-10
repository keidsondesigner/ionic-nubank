import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Option } from '../model/option-interface';
import { ItemAccount } from '../model/item-account';
import { SlideOption } from '../model/slide-option-interface';
import { AnimationController, Animation, Platform } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
	@ViewChild('blocks')
	blocks: any;

	@ViewChild('background_bank_information')
	backgroundBankInformation: any;

	@Input()
	iconEyeOn = 'eye-outline';

	@Input()
	iconEyeOff = 'eye-off-outline';

	@Input()
	showAmount: boolean;

	@Output()
	eventChange: EventEmitter<boolean> = new EventEmitter();

	public options: Array<Option> = [
		{ icon: 'person-add-outline', text: 'Indicar amigos'},
		{ icon: 'phone-portrait-outline', text: 'Recarga celular'},
		{ icon: 'barcode-outline', text: 'Pagar boleto'},
		{ icon: 'wallet-outline', text: 'Depositar'},
		{ icon: 'options-outline', text: 'Ajustar limite'},
		{ icon: 'lock-open-outline', text: 'Bloquear cartão'},
		{ icon: 'card-outline', text: 'Cartão virtual'},
		{ icon: 'help-circle-outline', text: 'Me ajuda'},
	];

	public itemsAccount: Array<ItemAccount> = [
		{ icon: 'person-outline', text: 'Perfil'},
		{ icon: 'cash-outline', text: 'Configurações da conta'},
		{ icon: 'card-outline', text: 'Configurações do cartão'},
		{ icon: 'phone-portrait-outline', text: 'Configurações do app'},
		{ icon: 'help-circle-outline', text: 'Ajuda'},
	];

	public slidesOptions: SlideOption = { slidesPerView: 3.5, freeMode: true };

	public accountDetails = {
		accountBalance: '1470.81',
	};

	public paymentDetails = {
		paymentSlip: '322.55',
		paymentDate: '06-10-2022',
	};

	public paymentDateFormatted: string;

	public initialStep = 0;
	public maxTranslate: number;
	public animation: Animation;

	constructor(
		private animationCtrl: AnimationController,
		private platform: Platform,
		private renderer: Renderer2,
		) { }

	ngOnInit(): void {
		this.maxTranslate = this.platform.height() - 200;

		this.convertBalanceToNumber(this.accountDetails.accountBalance);
		this.convertPaymentToNumber(this.paymentDetails.paymentSlip);

		this.paymentDateFormatted = this.formatDateBRL(this.paymentDetails.paymentDate);
	}

	ngAfterViewInit(){
		this.createAnimation();
	}

	toggleBlocks(){
		this.initialStep = this.initialStep === 0 ? this.maxTranslate : 0;
		this.animation.direction(this.initialStep === 0 ? 'reverse' : 'normal').play();

		this.setBackgroundOpacity();
	}

	createAnimation(){
		this.animation = this.animationCtrl.create()
		.addElement(this.blocks.nativeElement)
		.duration(300)
		.fromTo('transform', 'translateY(0)', `translateY(${this.maxTranslate}px)`);
	}

	setBackgroundOpacity(){
		this.renderer.setStyle(this.backgroundBankInformation.nativeElement, 'opacity', this.initialStep === 0 ? '0' : '1');
	}

	fixedBlocks(): boolean {
		return this.initialStep === this.maxTranslate;
	}

	toggleShowAmount(){
		this.showAmount = !this.showAmount;
		this.eventChange.emit(this.showAmount);
	};

	convertBalanceToNumber(input: string) {
		const numeric = Number(input);
		return numeric;
	}

	convertPaymentToNumber(inputPayment: string) {
		const numeric = Number(inputPayment);
		return numeric;
	}

	formatDateBRL(inputDate: string){
		const inputValueFormated = inputDate.replace(/\-/g, '/');
		return inputValueFormated;
	}

}
