import * as React from "react";
import { SectionOM } from "../om/SectionOM";
import { toReact } from "./omToReact";

export function Section({ id, counter, title, content }: SectionOM) {
	return (
		<section id={id}>
			<h1>
				{counter.join(".")} {toReact(title)}
			</h1>
			{toReact(content)}
		</section>
	);
}
