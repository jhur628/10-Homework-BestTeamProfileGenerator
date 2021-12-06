const Manager = require("../lib/manager")

const testEmployee = new Manager("John", 989, "john@john.com", 9998887777);

describe('Manager', () => {
    it('should return officeNumber as 9998887777', () => {
        expect(testEmployee.officeNumber).toBe(9998887777)
    });

    it('should return role as Manager', () => {
        expect(testEmployee.getRole()).toBe("Manager")
    });
});