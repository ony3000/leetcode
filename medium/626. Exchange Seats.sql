# Write your MySQL query statement below
SELECT
    original_seat.id,
    IFNULL(changed_seat.student, original_seat.student) AS student
FROM
    seat AS original_seat
LEFT JOIN
    seat AS changed_seat
        ON (original_seat.id % 2 = 1 AND original_seat.id = changed_seat.id - 1)
            OR (original_seat.id % 2 = 0 AND original_seat.id = changed_seat.id + 1)
;
