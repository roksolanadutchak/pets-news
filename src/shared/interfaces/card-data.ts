import { Chips } from './chips';

export interface CardData {
	key: number;
	author: string;
	creationDate: string;
	content: string;
	chips: Chips[];
}
