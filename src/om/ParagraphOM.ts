import { EmphasisOM } from "./EmphasisOM";
import { RefOM } from "./RefOM";
import { StrongOM } from "./StrongOM";

export interface ParagraphOM {
	type: "paragraph";
	content: Array<EmphasisOM | StrongOM | RefOM | string>;
}
