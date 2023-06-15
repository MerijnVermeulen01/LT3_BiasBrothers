package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class MeThinkingFast extends DatabaseController {

    Connection con = getConnection();
    public void setConnection(Connection connection) {
        this.con = connection;
    }

    private String situationDescription1;
    private String situationDescription2;
    private String situationDescription3;
    private String situationDescription4;
    private String situationDescription5;
    private String situationDescription6;
    private String situationDescription7;
    private String situationDescription8;
    private String situationDescription9;
    private String situationDescription10;
    private String situationDescription11;
    private String situationDescription12;
    private int count;

    /**
     * Setters for the description variables
     */
    public void setSituationDescription1(String situationDescription1) {
        this.situationDescription1 = situationDescription1;
    }

    public void setSituationDescription2(String situationDescription2) {
        this.situationDescription2 = situationDescription2;
    }

    public void setSituationDescription3(String situationDescription3) {
        this.situationDescription3 = situationDescription3;
    }

    public void setSituationDescription4(String situationDescription4) {
        this.situationDescription4 = situationDescription4;
    }

    public void setSituationDescription5(String situationDescription5) {
        this.situationDescription5 = situationDescription5;
    }

    public void setSituationDescription6(String situationDescription6) {
        this.situationDescription6 = situationDescription6;
    }

    public void setSituationDescription7(String situationDescription7) {
        this.situationDescription7 = situationDescription7;
    }

    public void setSituationDescription8(String situationDescription8) {
        this.situationDescription8 = situationDescription8;
    }

    public void setSituationDescription9(String situationDescription9) {
        this.situationDescription9 = situationDescription9;
    }

    public void setSituationDescription10(String situationDescription10) {
        this.situationDescription10 = situationDescription10;
    }

    public void setSituationDescription11(String situationDescription11) {
        this.situationDescription11 = situationDescription11;
    }

    public void setSituationDescription12(String situationDescription12) {
        this.situationDescription12 = situationDescription12;
    }

    /**
     * Function wich checks if there is already information in the page. if there is
     * it goes to the update else it goes to the insert
     */

    public void checkForInformationMeThinkingFast() throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement(
                    "SELECT participant_methinkfast.id, participant_methinkfast.description FROM participant_methinkfast  WHERE session_idSession = ?;");
            stmt.setInt(1, 1);
            resultSet = stmt.executeQuery();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        if (!resultSet.isBeforeFirst()) {
            System.out.println("Insert");
            insertInBiasthinkingfast();
        } else {
            while (resultSet.next()) {
                System.out.println("Update");
                updateMeThinkingFast(resultSet.getInt(1));
                count++;
            }
        }
    }

    /**
     * This is the insert function for meThinkingFast it is used in the
     * checkForInformationMeThinkingFast function to insert data into the database
     */
    public void insertInBiasthinkingfast() {
        String[] descriptions = { situationDescription1, situationDescription2, situationDescription3,
                situationDescription4, situationDescription5, situationDescription6, situationDescription7,
                situationDescription8, situationDescription9, situationDescription10, situationDescription11,
                situationDescription12 };
        PreparedStatement stmt = null;
        try {
            for (int i = 0; i < descriptions.length; i++) {
                stmt = con.prepareStatement(
                        "INSERT INTO participant_methinkfast (session_idSession, description) VALUES (?, ?)");
                stmt.setInt(1, 2);
                stmt.setString(2, descriptions[i]);
                stmt.executeUpdate();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * This is the update function for meThinkingFast
     */
    public void updateMeThinkingFast(int id) {
        String[] descriptions = { situationDescription1, situationDescription2, situationDescription3,
                situationDescription4, situationDescription5, situationDescription6, situationDescription7,
                situationDescription8, situationDescription9, situationDescription10, situationDescription11,
                situationDescription12 };
        System.out.println(descriptions[count]);
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("UPDATE participant_methinkfast SET description = ? WHERE id = ?");
            stmt.setString(1, descriptions[count]);
            System.out.println(id);
            stmt.setInt(2, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * This is the update function for meThinkingFast
     */

    public List selectMeThinkingFast() throws SQLException {
        Statement stmt = con.createStatement();
        String query = "SELECT * FROM participant_methinkfast";
        ResultSet resultSet = stmt.executeQuery(query);

        ResultSetMetaData md = resultSet.getMetaData();
        int numCols = md.getColumnCount();
        List<String> colNames = IntStream.range(0, numCols).mapToObj(i -> {
            try {
                return md.getColumnName(i + 1);
            } catch (SQLException e) {
                System.out.println(e);
                return "?";
            }
        }).collect(Collectors.toList());

        JSONArray result = new JSONArray();
        while (resultSet.next()) {
            JSONObject row = new JSONObject();
            colNames.forEach(cn -> {
                try {
                    row.put(cn, resultSet.getObject(cn));
                } catch (JSONException | SQLException e) {
                    System.out.println(e);
                }
            });
            result.put(row);
        }
        return result.toList();
    }
}
