import { ParagraphOM } from "./ParagraphOM";
import { SectionOM } from "./SectionOM";

export interface DocumentOM {
	type: "document";
	content: Array<SectionOM | ParagraphOM>;
	sectionIndex: Map<string, SectionOM>;
}
