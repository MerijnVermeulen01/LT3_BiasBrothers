package com.founding_fathers.pages;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import com.founding_fathers.pages.controller.DatabaseController;
import java.sql.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Codex extends DatabaseController{
    Connection con = getConnection();
    String traps = "SELECT * FROM thinkingtraps";
    String bias = "SELECT * FROM bias";

    public List codexInfo() throws SQLException {
        Statement stmt = con.createStatement();
        String query = traps;
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
        return result.toList();
    }
}

