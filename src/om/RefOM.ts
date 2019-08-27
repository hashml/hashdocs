import { IDRef } from "../IDRef";
import { SectionOM } from "./SectionOM";

export interface RefOM {
	type: "ref";
	idRef: IDRef<SectionOM>;
}
