import { IRNode } from "@hashml/hashml";
import { IDRef } from "../IDRef";
import { generateUniqueID } from "../utils";
import { DocumentOM } from "./DocumentOM";
import { EmphasisOM } from "./EmphasisOM";
import { toString } from "./omToString";
import { ParagraphOM } from "./ParagraphOM";
import { RefOM } from "./RefOM";
import { SectionOM } from "./SectionOM";
import { StrongOM } from "./StrongOM";

export function toOM(root: IRNode): DocumentOM {
	if (root.tag !== "root") throw new Error("");

	const sectionCounter = [0];
	const sectionIndex: Map<string, SectionOM> = new Map();

	return {
		type: "document",
		content: (root.props.content as IRNode[]).map(blockToOM),
		sectionIndex
	};

	function blockToOM(node: IRNode): SectionOM | ParagraphOM {
		switch (node.tag) {
			case "section":
				++sectionCounter[sectionCounter.length - 1];
				const counter = [...sectionCounter];
				sectionCounter.push(0);
				const title = node.props.title.map(inlineToOM);
				const id: string = node.props.id[0]
					? (node.props.id[0] as any).props.value.join("")
					: generateUniqueID(sectionIndex, toString(title));
				const content = (node.props.content as IRNode[]).map(blockToOM);
				const section: SectionOM = { type: "section", id, title, counter, content };
				sectionIndex.set(id, section);
				sectionCounter.pop();
				return section;
			case "paragraph":
				return {
					type: "paragraph",
					content: node.props.content.map(inlineToOM)
				};
		}
		throw new Error("");
	}

	function inlineToOM(node: IRNode | string): EmphasisOM | StrongOM | RefOM | string {
		if (typeof node === "string") return node;
		switch (node.tag) {
			case "emphasis":
				return {
					type: "emphasis",
					content: node.props.content.map(inlineToOM)
				};
			case "strong":
				return {
					type: "strong",
					content: node.props.content.map(inlineToOM)
				};
			case "ref":
				return {
					type: "ref",
					idRef: new IDRef(sectionIndex, node.props.id.join(""))
				};
		}
		throw new Error("");
	}
}
