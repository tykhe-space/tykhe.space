export class RoadmapItems {
	title: string;
	desc: string;
	date: string;
	status: boolean;
	childs: Array<KeyValue>;
	constructor() {
		this.title = '';
		this.date = '';
		this.desc = '';
		this.status = false;
		this.childs = [];
	}
}

class KeyValue {
	key: string;
	value: boolean;

	constructor() {

		this.key = '';
		this.value = false;

	}
}
export const _data: Array<RoadmapItems> = [
	{
		title: '2022 Q4',
		date: '2022 EYLÜL ',
		desc: 'İLK ADIM',
		childs: [
			{ key: "Web sitesinin hazırlanması", value: true },
			{ key: "Whitepaperın hazırlanması ve sunuşu", value: true }
		],
		status: true
	},
	{
		title: '2022 Q4',
		date: '2022 EKİM',
		desc: 'HAZIRLIKLAR',
		childs: [
			{ key: "Sosyal medya hesaplarının açılması", value: false },
			{ key: "Tanıtım ve bütçe toplama", value: false }
		],
		status: true
	},
	{
		title: '2022 Q4',
		date: '2022 KASIM',
		desc: 'İK OYUNLAR',
		status: false,
		childs: [
			{ key: "Oyunun tasarımlarının paylaşılması ve tepkilere göre yenilemeler", value: false },
			{ key: "Oyunların test ağları üzerinde oynanması ve geri dönüşler", value: false },
		]
	},
	{
		title: '2022 Q4',
		date: '2022 ARALIK',
		desc: 'OYUNA BAŞLA',
		status: false,
		childs: [
			{ key: "Oyunların canlıya alınması", value: false },
			{ key: "Topluluk Etkinlikleri", value: false },
		]
	},
	{
		title: '2023 Q1',
		date: '2023 OCAK ŞUBAT MART',
		desc: 'NFT',
		status: false,
		childs: [
			{ key: "$TYKHE koinin dağıtımı ve oyunlara eklenmesi", value: false },
			{ key: "Biletlerini NFT olarak sunulması", value: false },
		]
	},
	{
		title: '2023 Q2',
		date: '2023 NİSAN MAYIS HAZİRAN',
		desc: 'METAVERSE',
		status: false,
		childs: [
			{ key: "Oyun alanlarının metaverse dünyalarında da oynanabilmesi", value: false },
			{ key: "METAVERSE için özel etkinlikler ve büyük konserler", value: false },
		]
	}
];