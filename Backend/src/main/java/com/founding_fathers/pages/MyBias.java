package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class MyBias extends DatabaseController {

    Connection con = getConnection();

    private String nameBais;
    private String description;
    private String descriptionParticipant;

    /**
     * These are the respective getters and setters for this file.
     */
    public String getNameBais() {
        return nameBais;
    }
    public String getDescription() {
        return this.description;
    }
    public String getDescriptionParticipant() {
        return this.descriptionParticipant;
    }
    public void setDescriptionParticipant(String descriptionParticipant) {
        this.descriptionParticipant = descriptionParticipant;
    }

    /**
     * This function selects the items form the table MyBias in the database.
     * This is send over with a JSONArray to give to the MyBiasController.
     * Here the controller gives it to the REST-API.
     */
    public JSONArray selectMyBias() throws SQLException {
        Statement stmt = con.createStatement();
        String query = "SELECT * FROM bias";
        ResultSet resultSet = stmt.executeQuery(query);

        ResultSetMetaData md = resultSet.getMetaData();
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
        while(resultSet.next()){
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
        return result;
    }
}
