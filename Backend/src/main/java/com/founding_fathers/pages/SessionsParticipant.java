package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;

import java.sql.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class SessionsParticipant extends DatabaseController {

    Connection con = getConnection();

    private int idSession;

    public void setIdSession(int idSession) {
        this.idSession = idSession;
    }

    public int getIdSession() {
        return idSession;
    }

    public void addSession() throws SQLException {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("INSERT INTO sessionparticipant (dateTime) VALUE (?);");

            stmt.setString(1, dtf.format(now));
            stmt.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        selectSession();
    }

    public int selectSession() throws SQLException {
        Statement stmt = con.createStatement();
        String query = "SELECT * FROM sessionparticipant ORDER BY sesionId DESC LIMIT 1";
        ResultSet resultSet = stmt.executeQuery(query);
        while (resultSet.next()) {
            setIdSession(resultSet.getInt(1));
        }
        return this.idSession;
    }
}
