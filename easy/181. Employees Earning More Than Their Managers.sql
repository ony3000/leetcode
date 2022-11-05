# Write your MySQL query statement below
SELECT
    Employee.Name AS `Employee`
FROM
    Employee
LEFT JOIN
    Employee AS Manager ON Employee.ManagerId = Manager.Id
WHERE
    Employee.Salary > Manager.Salary
;
