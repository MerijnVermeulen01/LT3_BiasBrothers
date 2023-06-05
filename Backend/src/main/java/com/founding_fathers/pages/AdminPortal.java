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

    public void updateInTimer() {
        int[] times = {biasTime, thinkingTime, possibilityTime, developmentTime};

        PreparedStatement stmt = null;
        String[] timerNames ={"biasTime", "thinkingTime", "possibilityTime", "developmentTime"};
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
