package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class MeSlowingDown extends DatabaseController {

    Connection con = getConnection();

    private String meSlowingDownSituationDescription1;
    private String meSlowingDownSituationDescription2;
    private String meSlowingDownSituationDescription3;
    private String meSlowingDownSituationDescription4;
    private String meSlowingDownSituationDescription5;
    private String meSlowingDownSituationDescription6;
    private String meSlowingDownSituationDescription7;
    private String meSlowingDownSituationDescription8;
    private String meSlowingDownSituationDescription9;
    private String meSlowingDownSituationDescription10;
    private String meSlowingDownSituationDescription11;
    private String meSlowingDownSituationDescription12;
    private int count;

    /**
     * Setters for the description variables
     */
    public void setMeSlowingDownSituationDescription1(String meSlowingDownSituationDescription1) {
        this.meSlowingDownSituationDescription1 = meSlowingDownSituationDescription1;
    }

    public void setMeSlowingDownSituationDescription2(String meSlowingDownSituationDescription2) {
        this.meSlowingDownSituationDescription2 = meSlowingDownSituationDescription2;
    }

    public void setMeSlowingDownSituationDescription3(String meSlowingDownSituationDescription3) {
        this.meSlowingDownSituationDescription3 = meSlowingDownSituationDescription3;
    }

    public void setMeSlowingDownSituationDescription4(String meSlowingDownSituationDescription4) {
        this.meSlowingDownSituationDescription4 = meSlowingDownSituationDescription4;
    }

    public void setMeSlowingDownSituationDescription5(String meSlowingDownSituationDescription5) {
        this.meSlowingDownSituationDescription5 = meSlowingDownSituationDescription5;
    }

    public void setMeSlowingDownSituationDescription6(String meSlowingDownSituationDescription6) {
        this.meSlowingDownSituationDescription6 = meSlowingDownSituationDescription6;
    }

    public void setMeSlowingDownSituationDescription7(String meSlowingDownSituationDescription7) {
        this.meSlowingDownSituationDescription7 = meSlowingDownSituationDescription7;
    }

    public void setMeSlowingDownSituationDescription8(String meSlowingDownSituationDescription8) {
        this.meSlowingDownSituationDescription8 = meSlowingDownSituationDescription8;
    }

    public void setMeSlowingDownSituationDescription9(String meSlowingDownSituationDescription9) {
        this.meSlowingDownSituationDescription9 = meSlowingDownSituationDescription9;
    }

    public void setMeSlowingDownSituationDescription10(String meSlowingDownSituationDescription10) {
        this.meSlowingDownSituationDescription10 = meSlowingDownSituationDescription10;
    }

    public void setMeSlowingDownSituationDescription11(String meSlowingDownSituationDescription11) {
        this.meSlowingDownSituationDescription11 = meSlowingDownSituationDescription11;
    }

    public void setMeSlowingDownSituationDescription12(String meSlowingDownSituationDescription12) {
        this.meSlowingDownSituationDescription12 = meSlowingDownSituationDescription12;
    }

    public void setMeSlowingDownSituationDescription2(String meSlowingDownSituationDescription2) {
        this.meSlowingDownSituationDescription2 = meSlowingDownSituationDescription2;
    }

    public void setMeSlowingDownSituationDescription3(String meSlowingDownSituationDescription3) {
        this.meSlowingDownSituationDescription3 = meSlowingDownSituationDescription3;
    }

    public void setMeSlowingDownSituationDescription4(String meSlowingDownSituationDescription4) {
        this.meSlowingDownSituationDescription4 = meSlowingDownSituationDescription4;
    }

    public void setMeSlowingDownSituationDescription5(String meSlowingDownSituationDescription5) {
        this.meSlowingDownSituationDescription5 = meSlowingDownSituationDescription5;
    }

    public void setMeSlowingDownSituationDescription6(String meSlowingDownSituationDescription6) {
        this.meSlowingDownSituationDescription6 = meSlowingDownSituationDescription6;
    }

    public void setMeSlowingDownSituationDescription7(String meSlowingDownSituationDescription7) {
        this.meSlowingDownSituationDescription7 = meSlowingDownSituationDescription7;
    }

    public void setMeSlowingDownSituationDescription8(String meSlowingDownSituationDescription8) {
        this.meSlowingDownSituationDescription8 = meSlowingDownSituationDescription8;
    }

    public void setMeSlowingDownSituationDescription9(String meSlowingDownSituationDescription9) {
        this.meSlowingDownSituationDescription9 = meSlowingDownSituationDescription9;
    }

    public void setMeSlowingDownSituationDescription10(String meSlowingDownSituationDescription10) {
        this.meSlowingDownSituationDescription10 = meSlowingDownSituationDescription10;
    }

    public void setMeSlowingDownSituationDescription11(String meSlowingDownSituationDescription11) {
        this.meSlowingDownSituationDescription11 = meSlowingDownSituationDescription11;
    }

    public void setMeSlowingDownSituationDescription12(String meSlowingDownSituationDescription12) {
        this.meSlowingDownSituationDescription12 = meSlowingDownSituationDescription12;
    }

    /**
     * Function wich checks if there is already information in the page. if there is
     * it goes to the update else it goes to the insert
     */

    public void checkForInformationMeSlowingDown() throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement(
                    "SELECT methinkslow.idmethinkslow, methinkslow.description FROM methinkslow  WHERE session_id = ?;");
            stmt.setInt(1, 1);
            resultSet = stmt.executeQuery();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        if (!resultSet.isBeforeFirst()) {
            System.out.println("Insert");
            insertInBiasMeSlowingDown();
        } else {
            while (resultSet.next()) {
                System.out.println("Update");
                updateMeSlowingDown(resultSet.getInt(1));
                count++;
            }
        }
    }

    /**
     * This is the insert function for meThinkingFast it is used in the
     * checkForInformationMeThinkingFast function to insert data into the database
     */
    public void insertInBiasMeSlowingDown() {
        String[] descriptions = { meSlowingDownSituationDescription1, meSlowingDownSituationDescription2,
                meSlowingDownSituationDescription3, meSlowingDownSituationDescription4,
                meSlowingDownSituationDescription5, meSlowingDownSituationDescription6,
                meSlowingDownSituationDescription7, meSlowingDownSituationDescription8,
                meSlowingDownSituationDescription9, meSlowingDownSituationDescription10,
                meSlowingDownSituationDescription11, meSlowingDownSituationDescription12 };
        PreparedStatement stmt = null;
        try {
            for (int i = 0; i < descriptions.length; i++) {
                stmt = con.prepareStatement("INSERT INTO methinkslow (session_id, description) VALUES (?, ?)");
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
    public void updateMeSlowingDown(int id) {
        String[] descriptions = { meSlowingDownSituationDescription1, meSlowingDownSituationDescription2,
                meSlowingDownSituationDescription3, meSlowingDownSituationDescription4,
                meSlowingDownSituationDescription5, meSlowingDownSituationDescription6,
                meSlowingDownSituationDescription7, meSlowingDownSituationDescription8,
                meSlowingDownSituationDescription9, meSlowingDownSituationDescription10,
                meSlowingDownSituationDescription11, meSlowingDownSituationDescription12 };
        System.out.println(descriptions[count]);
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("UPDATE methinkslow SET description = ? WHERE idmethinkslow = ?");
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

    public List selectMeSlowingDown() throws SQLException {
        Statement stmt = con.createStatement();
        String query = "SELECT * FROM methinkslow";
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
