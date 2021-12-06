const Intern = require("../lib/intern")

const testEmployee = new Intern("John", 989, "john@john.com", "ISU");

// Tests to return school and role
describe('Intern', () => {
    it('should return school as ISU', () => {
        expect(testEmployee.school).toBe("ISU")
    });

    it('should return role as Intern', () => {
        expect(testEmployee.getRole()).toBe("Intern")
    });
});