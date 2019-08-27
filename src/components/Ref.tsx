import * as React from "react";
import { RefOM } from "../om/RefOM";

export function Ref({ idRef }: RefOM) {
	const section = idRef.target;
	if (section) return <a href={"#" + section.id}>{section.title}</a>;
	else return <strong>???</strong>;
}
