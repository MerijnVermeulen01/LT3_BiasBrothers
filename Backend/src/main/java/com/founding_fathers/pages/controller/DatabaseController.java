package com.founding_fathers.pages.controller;

import java.sql.*;

public class DatabaseController {

//    This function can go but its for test purpose here still
//    public DatabaseController(){
//        String url = "jdbc:mysql://localhost:3308/biasbrothers";
//        String username = "root";
//        String password = "Thefoundingfathers";
//
//        try {
//            Class.forName("com.mysql.cj.jdbc.Driver");
//
//            Connection connection = DriverManager.getConnection(url,username,password);
//
//            System.out.println(connection);
//
//            Statement statement = connection.createStatement();
//
//            ResultSet resultSet = statement.executeQuery("SELECT * FROM bias");
//
//            while (resultSet.next()){
//                System.out.println(resultSet.getInt(1) + " " + resultSet.getInt(2) + " " + resultSet.getString(3) + " " + resultSet.getString(4) + " " + resultSet.getString(5));
//            }
//
//        } catch (Exception e){
//            System.out.println(e);
//        }
//    }

    /**
     * This function connects to the database.
     * The values that you need are url(the localhost:port/databasename), Username form the database and the password of the database.
     * This functions returns the connection with the database
     */
    public Connection getConnection() {
        Connection con = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3308/biasbrothers";
            String username = "root";
            String password = "Thefoundingfathers";
            con = DriverManager.getConnection(url,username,password);
        } catch (Exception e){
            System.out.println(e);
        }
        
        return con;
    }
}
