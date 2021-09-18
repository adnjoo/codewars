SELECT Name AS Customers
FROM Customers
    LEFT JOIN orders ON customers.Id=orders.CustomerId
WHERE orders.Id IS NULL;


