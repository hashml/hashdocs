import * as React from "react";
import { ParagraphOM } from "../om/ParagraphOM";
import { toReact } from "./omToReact";

export function Paragraph(node: ParagraphOM) {
	return <p>{toReact(node.content)}</p>;
}
