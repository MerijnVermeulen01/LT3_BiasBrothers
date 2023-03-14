package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class ThinkingTraps extends DatabaseController {
    Connection con = getConnection();

    private String thinkingTrapsTitle;
    private boolean selectedThinkingTraps;
    private String description;
    private String descriptionParticipant;

    /**
     * These are the respective getters and setters for this file.
     */
    public String getThinkingTrapsTitle() {
        return this.thinkingTrapsTitle;
    }
    public String getDescription() {
        return this.description;
    }
    public boolean getSelectedThinkingTraps(){
        return this.selectedThinkingTraps;
    }
    public void setSelectedThinkingTraps(boolean selectedThinkingTraps) {
        this.selectedThinkingTraps = selectedThinkingTraps;
    }
    public String getDescriptionParticipant() {
        return this.descriptionParticipant;
    }
    public void setDescriptionParticipant(String descriptionParticipant) {
        this.descriptionParticipant = descriptionParticipant;
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

