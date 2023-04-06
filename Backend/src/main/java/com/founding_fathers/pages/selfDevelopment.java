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

    private String writeButton1;
    private String writeButton2;
    private String writeButton3;
    private String writeButton4;
    private String writeButton5;
    private String writeButton6;
    private String description1;
    private String description2;
    private String description3;

    public void setWriteButton1(String writeButton1) {
        this.writeButton1 = writeButton1;
    }

    public void setWriteButton2(String writeButton2) {
        this.writeButton2 = writeButton2;
    }

    public void setWriteButton3(String writeButton3) {
        this.writeButton3 = writeButton3;
    }

    public void setWriteButton4(String writeButton4) {
        this.writeButton4 = writeButton4;
    }

    public void setWriteButton5(String writeButton5) {
        this.writeButton5 = writeButton5;
    }

    public void setWriteButton6(String writeButton6) {
        this.writeButton6 = writeButton6;
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

    public void insertSelfDevelopment(){
//        TODO: DIT MOET 6 writeButtons worden//
        // aparte counter voor description boven 3 niet aanvullen?
        // (als count niet hoger of gelijk is aan 2 doe dan count++ anders niks meer doen
        // als het niet werkt een 2de insert erin zetten.
        String[] writeButtons = {writeButton1, writeButton2, writeButton3, writeButton4, writeButton5, writeButton6};
        String[] descriptions = {description1, description2, description3};
        PreparedStatement stmt = null;
        try {
            for (int i = 0; i < writeButtons.length; i++){
                stmt = con.prepareStatement("INSERT INTO selfdevelopment(selfDevelopment, description, session_idSession) VALUE (?, ?, ?);");

                stmt.setString(1, writeButtons[i]);
                stmt.setString(2, descriptions[i]);
                stmt.setInt(3, 1);
                stmt.executeUpdate();
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public List getParticipantSelfDev() throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT * FROM selfdevelopment WHERE session_idSession = ?");

            stmt.setInt(1, 1);
            resultSet = stmt.executeQuery();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

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
            ResultSet finalResultSet = resultSet;
            colNames.forEach(cn -> {
                try {
                    row.put(cn, finalResultSet.getObject(cn));
                } catch (JSONException | SQLException e){
                    System.out.println(e);
                }
            });
            result.put(row);
        }
        return result.toList();
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
