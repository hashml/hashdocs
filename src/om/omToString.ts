import { OM } from "./OM";

export function toString(nodes: Array<OM | string>): string {
	return nodes
		.map(node => {
			if (typeof node === "string") return node;
			switch (node.type) {
				case "section":
					return toString(node.title) + toString(node.content);
				case "ref":
					const target = node.idRef.target;
					if (target) return toString(target.title);
					return "???";
				default:
					return toString(node.content);
			}
		})
		.join("");
}
