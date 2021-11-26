# Write your MySQL query statement below
SELECT
    e.name AS Employee
FROM
    Employee m
    JOIN Employee e ON e.managerId = m.id
WHERE
    e.managerId IS NOT NULL
    AND e.salary > m.salary