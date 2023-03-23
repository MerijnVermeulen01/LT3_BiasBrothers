package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import java.sql.*;

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
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("INSERT INTO session (dateTime) VALUE (NOW());");

            stmt.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        selectSession();
    }

    public void selectSession() throws SQLException {
        Statement stmt = con.createStatement();
        String query = "SELECT * FROM session ORDER BY sessionid DESC LIMIT 1";
        ResultSet resultSet = stmt.executeQuery(query);
        while (resultSet.next()){
            setIdSession(resultSet.getInt(1));
        }
    }
}
