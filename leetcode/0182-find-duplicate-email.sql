SELECT
    email
FROM
    Person
GROUP BY
    email
HAVING
    Count(*) > 1