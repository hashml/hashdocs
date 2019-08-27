import { optional, ROOT, SchemaDefinition, zeroOrMore } from "@hashml/hashml";

const blockContent = [zeroOrMore("paragraph"), zeroOrMore("section")];
const inlineContent = ["strong", "emphasis", "ref"];

export const schema: SchemaDefinition = {
	blocks: {
		[ROOT]: {
			defaultTag: "paragraph",
			props: [{ name: "content", content: blockContent }]
		},
		["section"]: {
			defaultTag: "paragraph",
			head: { name: "title", content: inlineContent },
			props: [
				{ name: "content", content: blockContent },
				{ name: "id", content: [optional("id")] }
			]
		},
		["paragraph"]: {
			head: { name: "content", content: inlineContent },
			props: []
		},
		["id"]: {
			head: { name: "value", raw: true },
			props: []
		}
	},
	inline: {
		["strong"]: {
			sugar: { start: "*", end: "*" },
			props: [{ name: "content", content: inlineContent }]
		},
		["emphasis"]: {
			sugar: { start: "_", end: "_" },
			props: [{ name: "content", content: inlineContent }]
		},
		["ref"]: {
			props: [{ name: "id", raw: true }]
		}
	}
};
