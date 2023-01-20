const { isEmpty } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validation tests suites - isValidGamerTag", () => {
	test("should return false if the length is less than 8", () => {
		const result = isValidGamerTag("a1€");
		expect(result).toBe(false);
	});
	test("should return false if the gamer tag doesn't contain at least one special character", () => {
		const result = isValidGamerTag("0123456789ABCDEF");
		expect(result).toBe(false);
	});
	test("should return false if the gamer tag doesn't contain at least one number", () => {
		const result = isValidGamerTag("a-b-c-d-e-f");
		expect(result).toBe(false);
	});
	test("should return true if the gamer tag is valid", () => {
		const result = isValidGamerTag("Jean-Kevin-du-83");
		expect(result).toBe(false);
	});

});

// TODO: Create tests suite for validation function
