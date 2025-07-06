Lab 1: Understanding ORM and EF Core 8.0

This repository contains the completed exercise for **Lab 1** of the EF Core 8.0 Hands-On series.


#Objective

To understand what ORM (Object-Relational Mapping) is and how **Entity Framework Core (EF Core)** bridges the gap between C# classes and relational database tables.

---


Created a New .NET 8 Console Project

```bash
dotnet new console -n RetailInventory
cd RetailInventory


Added the packages to the project

dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.EntityFrameworkCore.Design


