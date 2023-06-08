package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class AdminPortal extends DatabaseController {

    Connection con = getConnection();
    private int count;
    private int biasTime;
    private int thinkingTime;
    private int possibilityTime;
    private int developmentTime;

    public void setBiasTime(int biasTime) {
        this.biasTime = biasTime;
    }
    public void setThinkingTime(int thinkingTime) {
        this.thinkingTime = thinkingTime;
    }
    public void setPossibilityTime(int possibilityTime) {
        this.possibilityTime = possibilityTime;
    }
    public void setDevelopmentTime(int developmentTime) {
        this.developmentTime = developmentTime;
    }

    public List selectAdminPortaal(String query) throws SQLException {
        Statement stmt = con.createStatement();
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

    public List selectedByIDAdminPortaal(int ID) throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT description, thinkingTraps FROM thinkingtraps WHERE idThinkingTraps = ?");
            stmt.setInt(1, ID);
            resultSet = stmt.executeQuery();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        ResultSetMetaData md = resultSet.getMetaData();
        int numCols = md.getColumnCount();
        List<String> colNames = IntStream.range(0, numCols)
                .mapToObj(i -> {
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
            for (int i = 1; i <= numCols; i++) {
                String columnName = md.getColumnName(i);
                Object columnValue = resultSet.getObject(columnName);
                row.put(columnName, columnValue);
            }
            result.put(row);
        }
        return result.toList();
    }

    public List selectedByIDBiasAdminPortaal(int ID) throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT biasDescription, nameBias FROM bias WHERE idBiases = ?");
            stmt.setInt(1, ID);
            resultSet = stmt.executeQuery();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        ResultSetMetaData md = resultSet.getMetaData();
        int numCols = md.getColumnCount();
        List<String> colNames = IntStream.range(0, numCols)
                .mapToObj(i -> {
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
            for (int i = 1; i <= numCols; i++) {
                String columnName = md.getColumnName(i);
                Object columnValue = resultSet.getObject(columnName);
                row.put(columnName, columnValue);
            }
            result.put(row);
        }
        return result.toList();
    }
    public void updateInTimer() {
        int[] times = {biasTime, thinkingTime, possibilityTime, developmentTime};
        String[] timerNames ={"biasTime", "thinkingTime", "possibilityTime", "developmentTime"};
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("UPDATE timer SET timerTime = ? WHERE timerName = ?");
            stmt.setInt(1, times[count]);
            stmt.setString(2, timerNames[count]);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

    }


}
