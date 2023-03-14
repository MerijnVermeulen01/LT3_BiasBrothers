package com.founding_fathers.pages.controller;

import java.sql.*;

public class DatabaseController {
    /**
     * This function connects to the database.
     * The values that you need are url(the localhost:port/databasename), Username form the database and the password of the database.
     * This functions returns the connection with the database
     */
    public Connection getConnection() {
        Connection con = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/biasbrothers";
            String username = "root";
            String password = "";
            con = DriverManager.getConnection(url,username,password);
        } catch (Exception e){
            System.out.println(e);
        }
        
        return con;
    }

}
