export class MenuItems {
	name: string;
	url: string;
	childItem: Array<MenuItems>;
	constructor() {
		this.name = '';
		this.url = '';
		this.childItem = [];
	}
}

export const _menuData: Array<MenuItems> = [
	{
		name: '$TYKHE TOKEN',
		url: '/tykhe-token',
		childItem: []
	},
	{
		name: 'LOTTERY',
		url: '/lottery',
		childItem: []
	},
	{
		name: 'SCRATCHCARD',
		url: '/scratchcard',
		childItem: []
	},
	{
		name: 'CASINO',
		url: '/casino',
		childItem: []
	}
	,
	{
		name: 'NEW ERA FOR CASINO',
		url: '/new-era-for-casino',
		childItem: []
	}
];