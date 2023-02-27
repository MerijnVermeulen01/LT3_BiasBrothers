package com.founding_fathers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class BiasBrothers {
    public static void main(String[] args){
        System.out.println("Hello world!");

        String url = "jdbc:mysql://localhost:3308/biasbrothers";
        String username = "root";
        String password = "Thefoundingfathers";

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            Connection connection = DriverManager.getConnection(url,username,password);

            Statement statement = connection.createStatement();

            ResultSet resultSet = statement.executeQuery("SELECT * FROM codex");

            while (resultSet.next()){
                System.out.println(resultSet.getInt(1) + " " + resultSet.getString(2));
            }

            connection.close();
        } catch (Exception e){
            System.out.println(e);
        }
    }
}
