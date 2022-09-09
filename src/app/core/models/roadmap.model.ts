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
		title: 'ROADMAP_LIST_1_TITLE',
		date: 'ROADMAP_LIST_1_DATE',
		desc: 'ROADMAP_LIST_1_DESC',
		childs: [
			{ key: "ROADMAP_LIST_1_CHILD.KEY_1", value: true },
			{ key: "ROADMAP_LIST_1_CHILD.KEY_2", value: true }
		],
		status: true
	},
	{
		title: 'ROADMAP_LIST_2_TITLE',
		date: 'ROADMAP_LIST_2_DATE',
		desc: 'ROADMAP_LIST_2_DESC',
		childs: [
			{ key: "ROADMAP_LIST_2_CHILD.KEY_1", value: false },
			{ key: "ROADMAP_LIST_2_CHILD.KEY_2", value: false }
		],
		status: true
	},
	{
		title: 'ROADMAP_LIST_3_TITLE',
		date: 'ROADMAP_LIST_3_DATE',
		desc: 'ROADMAP_LIST_3_DESC',
		status: false,
		childs: [
			{  key: "ROADMAP_LIST_3_CHILD.KEY_1", value: false },
			{  key: "ROADMAP_LIST_3_CHILD.KEY_2", value: false },
		]
	},
	{
		title: 'ROADMAP_LIST_4_TITLE',
		date: 'ROADMAP_LIST_4_DATE',
		desc: 'ROADMAP_LIST_4_DESC',
		status: false,
		childs: [
			{ key: "ROADMAP_LIST_4_CHILD.KEY_1", value: false },
			{ key: "ROADMAP_LIST_4_CHILD.KEY_2", value: false },
		]
	},
	{
		title: 'ROADMAP_LIST_5_TITLE',
		date: 'ROADMAP_LIST_5_DATE',
		desc: 'ROADMAP_LIST_5_DESC',
		status: false,
		childs: [
			{ key: "ROADMAP_LIST_5_CHILD.KEY_1", value: false },
			{ key: "ROADMAP_LIST_5_CHILD.KEY_2", value: false },
		]
	},
	{
		title: 'ROADMAP_LIST_6_TITLE',
		date: 'ROADMAP_LIST_6_DATE',
		desc: 'ROADMAP_LIST_6_DESC',
		status: false,
		childs: [
			{ key: "ROADMAP_LIST_6_CHILD.KEY_1", value: false },
			{ key: "ROADMAP_LIST_6_CHILD.KEY_2", value: false },
		]
	}
];