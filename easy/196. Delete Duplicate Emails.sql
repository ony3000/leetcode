# Write your MySQL query statement below
DELETE FROM
    Person
WHERE
    NOT EXISTS (
        SELECT
            *
        FROM
            (
                SELECT MIN(Id) AS Id
                FROM Person
                GROUP BY Email
            ) AS Temp
        WHERE
            Person.Id = Temp.Id
    )
;
