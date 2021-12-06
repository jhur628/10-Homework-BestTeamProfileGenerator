const Engineer = require("../lib/engineer")

const testEmployee = new Engineer("John", 989, "john@john.com", "jjohn67");

// Tests to return github user name and role
describe('Engineer', () => {
    it('should return github as jjohn67', () => {
        expect(testEmployee.github).toBe("jjohn67")
    });

    it('should return role is Engineer', () => {
        expect(testEmployee.getRole()).toBe("Engineer")
    });
});