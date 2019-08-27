import React = require("react");
import { ReactNode } from "react";
import { OM } from "../om/OM";
import { Document } from "./Document";
import { Emphasis } from "./Emphasis";
import { Paragraph } from "./Paragraph";
import { Ref } from "./Ref";
import { Section } from "./Section";
import { Strong } from "./Strong";

const componentsMap = {
	document: Document,
	section: Section,
	paragraph: Paragraph,
	emphasis: Emphasis,
	strong: Strong,
	ref: Ref
};

export function toReact(nodes: Array<OM | string>): ReactNode {
	return nodes.map((node, index) => {
		if (typeof node === "string") return node;
		const COMPONENT = componentsMap[node.type] as any;
		return <COMPONENT {...node} key={index} />;
	});
}
