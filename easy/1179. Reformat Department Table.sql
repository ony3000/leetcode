# Write your MySQL query statement below
SELECT
    id,
    MAX(Jan_Revenue) AS Jan_Revenue,
    MAX(Feb_Revenue) AS Feb_Revenue,
    MAX(Mar_Revenue) AS Mar_Revenue,
    MAX(Apr_Revenue) AS Apr_Revenue,
    MAX(May_Revenue) AS May_Revenue,
    MAX(Jun_Revenue) AS Jun_Revenue,
    MAX(Jul_Revenue) AS Jul_Revenue,
    MAX(Aug_Revenue) AS Aug_Revenue,
    MAX(Sep_Revenue) AS Sep_Revenue,
    MAX(Oct_Revenue) AS Oct_Revenue,
    MAX(Nov_Revenue) AS Nov_Revenue,
    MAX(Dec_Revenue) AS Dec_Revenue
FROM
    (
        SELECT
            id,
            IF(month = 'Jan', revenue, NULL) AS Jan_Revenue,
            IF(month = 'Feb', revenue, NULL) AS Feb_Revenue,
            IF(month = 'Mar', revenue, NULL) AS Mar_Revenue,
            IF(month = 'Apr', revenue, NULL) AS Apr_Revenue,
            IF(month = 'May', revenue, NULL) AS May_Revenue,
            IF(month = 'Jun', revenue, NULL) AS Jun_Revenue,
            IF(month = 'Jul', revenue, NULL) AS Jul_Revenue,
            IF(month = 'Aug', revenue, NULL) AS Aug_Revenue,
            IF(month = 'Sep', revenue, NULL) AS Sep_Revenue,
            IF(month = 'Oct', revenue, NULL) AS Oct_Revenue,
            IF(month = 'Nov', revenue, NULL) AS Nov_Revenue,
            IF(month = 'Dec', revenue, NULL) AS Dec_Revenue
        FROM
            Department
    ) AS Temp
GROUP BY id
;
