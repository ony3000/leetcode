# Write your MySQL query statement below
SELECT
    Salary AS SecondHighestSalary
FROM
    (
        SELECT * FROM Employee
        UNION
        SELECT 0 AS Id, NULL AS Salary
    ) AS Temp
GROUP BY
    Salary
ORDER BY
    Salary DESC
LIMIT
    1, 1
;
