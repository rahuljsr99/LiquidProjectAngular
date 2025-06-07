📽️ LiquidProjectAngular - Movie Purchase & Admin Portal

A responsive Angular-based web app for browsing, purchasing, and managing movie content. It includes role-based access for admins and users, and integrates AG Grid for data management.
🛠️ Tech Stack

    Frontend: Angular
    Backend: ASP.NET Core 8.0, ADO.NET
    Database: SQL Server
    UI Components: Bootstrap, AG Grid
    
    Features: Dynamic search, Invoice generation, Admin panel, AG Grid editing
  

Screenshots : 
--Login Page
Allows user authentication and role-based redirection.
![image](https://github.com/user-attachments/assets/42894b6d-7fc8-4d8b-b6a2-7146d669ae47)

--Home page 
Landing page with movie previews and navigation options.
![image](https://github.com/user-attachments/assets/9a27c8db-2f40-46eb-bcbb-d6f3a304f00a)
![image](https://github.com/user-attachments/assets/d76e8c3f-8bc6-4511-8408-bba416e9f1f3)

--Movie page (Development in progress)
Displays movie list with search/filter options.
![image](https://github.com/user-attachments/assets/39cdc06b-1513-4cd3-a8a5-0b2ca06ae85c)

Search in action
![image](https://github.com/user-attachments/assets/2efb448e-d376-40a1-9cdb-c9814f3be452)
--Buy page 
Select and purchase movies.
![image](https://github.com/user-attachments/assets/b0a339be-b15c-4675-a1cb-1aa250771307)

![image](https://github.com/user-attachments/assets/33352fa6-347d-48d2-b6dc-d409d1d48925)

--invoice page 
Displays billing info and purchase history.
![image](https://github.com/user-attachments/assets/8e22232f-0ef1-402c-942f-8dd65906443b)
![image](https://github.com/user-attachments/assets/c18f843c-7b7f-4a53-b6c7-dc924c05c077)
![image](https://github.com/user-attachments/assets/da26bc40-500b-47a4-8dd4-2eaab3147234)

--Admin Page 
Dashboard to manage platform data.
![image](https://github.com/user-attachments/assets/6a50d605-5c63-4559-a3b8-f00bf1adb9b0)


--Manage Users
Features inline cell editing and saving.
![image](https://github.com/user-attachments/assets/b2c75eda-13ee-452d-998a-6832869aaab1)

**used AG Grid and cell editing and saving

--Add User
Form to add new users to the platform.
![image](https://github.com/user-attachments/assets/c19a3e7f-2e4b-414a-9a60-1351e410b829)

--Revenue 
Displays platform revenue data.
![image](https://github.com/user-attachments/assets/c4197c78-89eb-40c5-a89c-b919cc3019d7)


Before ng serve
1. npm install
2. npm install jspdf jspdf-autotable --save
3. npm install ag-grid-community --save
4. npm install @angular/material @angular/cdk

Install Angular Animations (required by Angular Material):


npm install @angular/animations

