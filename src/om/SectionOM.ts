import { EmphasisOM } from "./EmphasisOM";
import { ParagraphOM } from "./ParagraphOM";
import { RefOM } from "./RefOM";
import { StrongOM } from "./StrongOM";

export interface SectionOM {
	type: "section";
	id: string;
	title: Array<EmphasisOM | StrongOM | RefOM | string>;
	counter: number[];
	content: Array<SectionOM | ParagraphOM>;
}
