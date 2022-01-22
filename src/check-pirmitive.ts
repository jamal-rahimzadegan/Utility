	checkPrimitive(value: any): boolean {
		if (value === null) return true;
		return !(typeof value == "object" || typeof value == "function");
	}
