# Write your MySQL query statement below
SELECT
    class
FROM
    (
        SELECT DISTINCT
            *
        FROM
            courses
    ) AS temp
GROUP BY
    class HAVING COUNT(class) >= 5
;
