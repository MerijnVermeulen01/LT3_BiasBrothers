package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class selfDevelopment extends DatabaseController {

    Connection con = getConnection();

    private String selfDevelopmentTitle;
    private String description;

    /**
     * These are the respective getters and setters for this file.
     */
    public String getSelfDevelopmentTitle() {
        return this.selfDevelopmentTitle;
    }
    public void setSelfDevelopmentTitle(String selfDevelopmentTitle) {
        this.selfDevelopmentTitle = selfDevelopmentTitle;
    }
    public String getDescription() {
        return this.description;
    }
    public void setDescription(String description) {
        this.description = description;
    }

    // TODO:
    // 1:De waarde ophalen van JavaScript (komt nog)
    // 2:vervolgens inserten in de database
    public void insertSelfDevelopment(){
    String dummy = "Dummy data";
    String description = "Description";

        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("INSERT INTO selfdevelopment(selfDevelopment, description) VALUE (?, ?);");

            stmt.setString(1, dummy);
            stmt.setString(2, description);
            stmt.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public List selectSelfDevelopment() throws SQLException {
        Statement stmt = con.createStatement();
        String query = "SELECT * FROM selfdevelopment";
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

    public void deleteSelfDevelopment(){

        int nummer = 1;

        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("DELETE FROM selfdevelopment WHERE idSelfDevelopment = ?");

            stmt.setInt(1, nummer);
            stmt.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void updateSelfDevelopment(){
        String dummy = "Update";
        String description = "UpdateDescription";

        int id2 = 2;

        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("UPDATE selfdevelopment SET selfDevelopment = ?, description = ? WHERE idSelfDevelopment = ?");

            stmt.setString(1, dummy);
            stmt.setString(2, description);
            stmt.setInt(3, id2);
            stmt.executeUpdate();

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
