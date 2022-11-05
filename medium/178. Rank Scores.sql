# Write your MySQL query statement below
SELECT
    Scores.Score,
    RankedScores.Rank
FROM
    Scores
LEFT JOIN
    (
        SELECT
            Score,
            CAST(@rank := @rank + 1 AS SIGNED) AS `Rank`
        FROM
            (
                SELECT Score FROM Scores GROUP BY Score
            ) AS GroupedScores,
            (
                SELECT @rank := 0
            ) AS RankingNumber
        ORDER BY
            Score DESC
    ) AS RankedScores ON Scores.Score = RankedScores.Score
ORDER BY
    RankedScores.Rank ASC
;
