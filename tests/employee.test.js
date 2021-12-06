const Employee = require("../lib/employee");

const testEmployee = new Employee("John", 989, "john@john.com");

describe('Employee', () => {
    it('should return name as John', () => {
        expect(testEmployee.name).toBe("John")
    });

    it('should return id as 989', () => {
        expect(testEmployee.id).toBe(989)
    });

    it('should return email as john@john.com', () => {
        expect(testEmployee.email).toBe("john@john.com")
    });

    it('should return role as Employee', () => {
        expect(testEmployee.getRole()).toBe("Employee")
    });
});