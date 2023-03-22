package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class ThinkingTraps extends DatabaseController {
    Connection con = getConnection();

    private int button1;
    private int button2;
    private int button3;
    private String description1;
    private String description2;
    private String description3;

    public void setButton1(int button1) {
        this.button1 = button1;
    }
    public void setButton2(int button2) {
        this.button2 = button2;
    }
    public void setButton3(int button3) {
        this.button3 = button3;
    }

    public void setDescription1(String description1) {
        this.description1 = description1;
    }
    public void setDescription2(String description2) {
        this.description2 = description2;
    }
    public void setDescription3(String description3) {
        this.description3 = description3;
    }

    public void getSelectedIDThinkingTraps() {
        int[] buttons = {button1, button2, button3};
        String[] descriptions = {description1, description2, description3};
        PreparedStatement stmt = null;
        try {
            for (int i = 0; i < buttons.length; i++) {
                stmt = con.prepareStatement("INSERT INTO participant_thinkingtraps (session_idSession, thinkingtraps_idThinkingTraps, description) VALUES (?, ?, ?)");

                stmt.setInt(1, 1);
                stmt.setInt(2, buttons[i]);
                stmt.setString(3, descriptions[i]);
                stmt.executeUpdate();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public List selectThinkingTraps() throws SQLException {
        Statement stmt = con.createStatement();
        String query = "SELECT * FROM thinkingtraps";
        ResultSet resultSet = stmt.executeQuery(query);

        ResultSetMetaData md =   resultSet.getMetaData();
        int numCols = md.getColumnCount();
        List<String> colNames = IntStream.range(0, numCols)
                .mapToObj(i -> {
                    try {
                        return md.getColumnName(i + 1);
                    } catch (SQLException e){
                        System.out.println(e);
                        return "?";
                    }
                }).collect(Collectors.toList());

        JSONArray result = new JSONArray();
        while (resultSet.next()){
            JSONObject row = new JSONObject();
            colNames.forEach(cn -> {
                try {
                    row.put(cn, resultSet.getObject(cn));
                } catch (JSONException | SQLException e){
                    System.out.println(e);
                }
            });
            result.put(row);
        }
        return result.toList();
    }
}

