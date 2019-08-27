import { RefOM } from "./RefOM";
import { StrongOM } from "./StrongOM";

export interface EmphasisOM {
	type: "emphasis";
	content: Array<EmphasisOM | StrongOM | RefOM | string>;
}
