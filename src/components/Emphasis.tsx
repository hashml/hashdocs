import * as React from "react";
import { EmphasisOM } from "../om/EmphasisOM";
import { toReact } from "./omToReact";

export function Emphasis({ content }: EmphasisOM) {
	return <em>{toReact(content)}</em>;
}
