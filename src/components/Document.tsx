import * as React from "react";
import { DocumentOM } from "../om/DocumentOM";
import { toReact } from "./omToReact";

export function Document({ content }: DocumentOM) {
	return <main>{toReact(content)}</main>;
}
