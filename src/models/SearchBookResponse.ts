import { Book } from "./Book";

export class SearchBookResponse {
    kind: string;
    totalItems: number;
    items?: Book[]
}