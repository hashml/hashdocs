export class IDRef<T> {
	constructor(readonly index: Map<string, T>, readonly id: string) {}

	get target() {
		return this.index.get(this.id);
	}
}
