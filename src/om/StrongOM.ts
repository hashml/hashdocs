import { EmphasisOM } from "./EmphasisOM";
import { RefOM } from "./RefOM";

export interface StrongOM {
	type: "strong";
	content: Array<EmphasisOM | StrongOM | RefOM | string>;
}
