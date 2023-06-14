package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class LoginPage extends DatabaseController {

    Connection con = getConnection();
    private String username;
    private String password;

    private boolean admin = false;
    private boolean participant = false;

    public void checkAdmin() throws SQLException {
        System.out.println("Wordt select Check Gedaan van admin?");
        String dbUsername, dbPassword;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT username, password FROM admin;");
            stmt.executeQuery();
            ResultSet resultSet = stmt.getResultSet();
            while (resultSet.next()) {
                dbUsername = resultSet.getString("username");
                dbPassword = resultSet.getString("password");

                if (dbUsername.equals(username) && dbPassword.equals(password)) {
                    this.admin = true;
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void checkParticipant() throws SQLException {
        System.out.println("Wordt select Check Gedaan van gebruiker?");
        String dbCode;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT code FROM code;");
            stmt.executeQuery();
            ResultSet resultSet = stmt.getResultSet();
            while (resultSet.next()) {
                dbCode = resultSet.getString("code");

                if (dbCode.equals(password)) {
                    this.participant = true;
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean checkAdminBool() {
        System.out.println("Wordt Check Gedaan van admin?");
        return this.admin;
    }

    public boolean checkParticipantBool() {
        System.out.println("Wordt Check Gedaan van gebruiker?");
        return this.participant;
    }

}
