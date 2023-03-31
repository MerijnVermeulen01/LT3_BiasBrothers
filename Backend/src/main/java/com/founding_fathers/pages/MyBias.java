package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class MyBias extends DatabaseController {

    Connection con = getConnection();

    private int button1;
    private int button2;
    private int button3;
    private String description1;
    private String description2;
    private String description3;
    private List biasList;

    private int count;

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

    public void checkForInformation() throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT participant_bias.id, bias_idBiases, participant_bias.description, nameBias FROM participant_bias LEFT JOIN bias ON participant_bias.bias_idBiases = bias.idBiases WHERE session_idSession = ?;");

            stmt.setInt(1, 1);
            resultSet = stmt.executeQuery();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        if (!resultSet.isBeforeFirst()) {
            insertInBias();
        } else {
            while (resultSet.next()) {
                updateInBias(resultSet.getInt(1));
                count++;
            }
        }
    }

    public List selectParticipantBias() throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT bias_idBiases, participant_bias.description, nameBias FROM participant_bias LEFT JOIN bias ON participant_bias.bias_idBiases = bias.idBiases WHERE session_idSession = ?;");

            stmt.setInt(1, 1);
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
            ResultSet finalResultSet = resultSet;
            colNames.forEach(cn -> {
                try {
                    row.put(cn, finalResultSet.getObject(cn));
                } catch (JSONException | SQLException e) {
                    System.out.println(e);
                }
            });
            result.put(row);
        }
        return result.toList();
    }

    public void insertInBias() {
        int[] buttons = {button1, button2, button3};
        String[] descriptions = {description1, description2, description3};
        PreparedStatement stmt = null;
        try {
            for (int i = 0; i < buttons.length; i++) {
                stmt = con.prepareStatement("INSERT INTO participant_bias (session_idSession, bias_idBiases, description) VALUES (?, ?, ?)");

                stmt.setInt(1, 1);
                stmt.setInt(2, buttons[i]);
                stmt.setString(3, descriptions[i]);
                stmt.executeUpdate();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public void updateInBias(int result) {
//        int[] buttons = {button1, button2, button3};
        String[] descriptions = {description1, description2, description3};
        System.out.println(descriptions[count]);
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("UPDATE participant_bias SET description = ? WHERE id = ?");
//            System.out.println(descriptions);
//                stmt.setInt(1, buttons[count]);
            stmt.setString(1, descriptions[count]);
            System.out.println(result);
            stmt.setInt(2, result);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * This function selects the items form the table MyBias in the database.
     * This is send over with a JSONArray to give to the MyBiasController.
     * Here the controller gives it to the REST-API.
     */
    public List selectMyBias() throws SQLException {
        Statement stmt = con.createStatement();
        String query = "SELECT * FROM bias";
        ResultSet resultSet = stmt.executeQuery(query);

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
//        TODO:
//        result.getJSONObject(1).getString("nameBias") <- Dit is om een object uit de json te halen.
    }

    public List checkForBias() throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        List<Object> biasList = new ArrayList<>();
        try {
            stmt = con.prepareStatement("SELECT thinkingtraps_idThinkingTraps FROM participant_thinkingtraps WHERE session_idSession = ?;");

            stmt.setInt(1, 1);
            resultSet = stmt.executeQuery();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        while (resultSet.next()) {
            if (resultSet.getInt(1) != 0) {
                biasList.addAll(selectBiasByTrap(resultSet.getInt(1)));
            }
        }
        return biasList;
    }

//    public List selectBiasByTrap(int resultid) throws SQLException {
//        ResultSet resultSet = null;
//        PreparedStatement stmt = null;
//        List<Object> resultList = new ArrayList<>();
//        try {
//            stmt = con.prepareStatement("SELECT * FROM bias WHERE idThinkingTraps = ?");
//            System.out.println(resultid);
//            stmt.setInt(1, resultid);
//            resultSet = stmt.executeQuery();
//        } catch (SQLException e) {
//            throw new RuntimeException(e);
//        }
//
//        ResultSetMetaData md = resultSet.getMetaData();
//        int numCols = md.getColumnCount();
//        List<String> colNames = IntStream.range(0, numCols)
//                .mapToObj(i -> {
//                    try {
//                        return md.getColumnName(i + 1);
//                    } catch (SQLException e) {
//                        System.out.println(e);
//                        return "?";
//                    }
//                }).collect(Collectors.toList());
//
//        JSONArray result = new JSONArray();
//        while (resultSet.next()) {
//            JSONObject row = new JSONObject();
//            for(int i = 1; i <= numCols; i++) {
//                String columnName = md.getColumnName(i);
//                Object columnValue = resultSet.getObject(columnName);
//                row.put(columnName, columnValue);
//            }
//            result.put(row);
//        }
//        resultList = result.toList(); // convert the array to a list
//        return resultList;
//    }

//    Select a bias based on 'idThinkingTrap'
    public List selectBiasByTrap(int resultid) throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT * FROM bias WHERE idThinkingTraps = ?");
            stmt.setInt(1, resultid);
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
}
