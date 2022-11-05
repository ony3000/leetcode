# Write your MySQL query statement below
SELECT
    DeptWithSalary.Name AS Department,
    Employee.Name AS Employee,
    DeptWithSalary.HighestSalary AS Salary
FROM
    Employee
LEFT JOIN
    (
        SELECT
            Employee.DepartmentId AS Id,
            Department.Name,
            MAX(Employee.Salary) AS HighestSalary
        FROM
            Employee
        LEFT JOIN
            Department ON Employee.DepartmentId = Department.Id
        WHERE
            Department.Id IS NOT NULL
        GROUP BY
            Employee.DepartmentId
    ) AS DeptWithSalary ON Employee.DepartmentId = DeptWithSalary.Id AND Employee.Salary = DeptWithSalary.HighestSalary
WHERE
    DeptWithSalary.Id IS NOT NULL
;
