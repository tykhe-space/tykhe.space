export class SecondryFeatureItems {
	name: string;
	alt: string;
	desc: string;
	icon: string;

	constructor() {
		this.name = '';
		this.alt = '';
		this.desc = '';
		this.icon = '';
	}
}
export const _data: Array<SecondryFeatureItems> = [
	{
		name: 'Anlık Durum İzleme',
		alt: 'Oyunun durumunu anlık izleyin',
		desc: 'Gerçek zamanlı veri izleme ile bütün olasıkları görün.',
		icon: `<svg aria-hidden="true" class="h-9 w-9" fill="none"><defs><linearGradient id=":Rardm:" x1="11.5" y1="18" x2="36" y2="15.5" gradientUnits="userSpaceOnUse"><stop offset=".194" stop-color="#fff"></stop><stop offset="1" stop-color="#6692F1"></stop></linearGradient></defs><path d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5" stroke="url(#:Rardm:)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
	},
	{
		name:'NFT',
		alt:'Biletlerinizi NFT olarak görün',
		desc:'Her bir bilet size özel olarak oluşturulur ve sunulur.',
		icon:`<svg aria-hidden="true" class="h-9 w-9" fill="none"><path opacity=".5" d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"></path><path opacity=".3" d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"></path><path d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z" fill="#fff"></path></svg>`
	},
	{
		name:'Kazanan',
		alt:'Özelleştirilebilir Profil',
		desc:'Profilinizi özelleştirin ve kimin kazanan olduğunu gösterin.',
		icon:`<svg aria-hidden="true" class="h-9 w-9" fill="none"><path opacity=".5" d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z" fill="#fff"></path><path d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z" fill="#fff"></path></svg>`
	}
];