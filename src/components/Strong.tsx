import * as React from "react";
import { StrongOM } from "../om/StrongOM";
import { toReact } from "./omToReact";

export function Strong({ content }: StrongOM) {
	return <strong>{toReact(content)}</strong>;
}
