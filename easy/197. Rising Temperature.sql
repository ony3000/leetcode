# Write your MySQL query statement below
SELECT
    TodayWeather.id
FROM
    Weather AS TodayWeather
LEFT JOIN
    Weather AS YesterdayWeather ON SUBDATE(TodayWeather.recordDate, 1) = YesterdayWeather.recordDate
WHERE
    YesterdayWeather.recordDate IS NOT NULL
        AND TodayWeather.temperature - YesterdayWeather.temperature > 0
;
