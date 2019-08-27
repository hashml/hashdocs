export function generateUniqueID(index: Map<string, any>, input: string) {
	const id = input.replace(/\W+/g, "_");
	if (!index.has(id)) return id;

	let i = 2;
	while (index.has(id + "_" + i)) ++i;
	return id + "_" + i;
}
