package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;


public class MeThinkingFast extends DatabaseController {

    Connection con = getConnection();

    private String situationDescription1;
    private String situationDescription2;
    private String situationDescription3;
    private String situationDescription4;
    private String situationDescription5;
    private String situationDescription6;
    private String situationDescription7;
    private String situationDescription8;
    private String situationDescription9;
    private String situationDescription10;
    private String situationDescription11;
    private String situationDescription12;
    private int count;


    public void checkForInformationMeThinkingFast() throws SQLException {
        System.out.println("Papi");
        System.out.println("pipo");
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT participant_methinkfast.id, participant_emthinkfast.description FROM participant_methinkfast  WHERE session_idSession = ?;");

            stmt.setInt(1, 1);
            resultSet = stmt.executeQuery();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        System.out.println("Papi");
        if(!resultSet.isBeforeFirst()){
            System.out.println("Insert");
            insertInBiasthinkingfast();
        }else{
            while (resultSet.next()){
                System.out.println("Update");
                updateMeThinkingFast(resultSet.getInt(1));
                count++;
            }
        }
    }
    public void insertInBiasthinkingfast() {

        String[] descriptions = {situationDescription1, situationDescription2,situationDescription3,situationDescription4,situationDescription5,situationDescription6,situationDescription7,situationDescription8,situationDescription9,situationDescription10,situationDescription11,situationDescription12};
        PreparedStatement stmt = null;
        try {
            for (int i = 0; i < descriptions.length; i++) {
                System.out.println("papi");
                stmt = con.prepareStatement("INSERT INTO participant_methinkfast (id,session_idSession, description) VALUES (?,?, ?)");
                stmt.setInt(1, 1);
                stmt.setInt(2,2);
                stmt.setString(2, descriptions[i]);
                stmt.executeUpdate();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

//    public void insertMeThinkingFast(){
//        try {
//
////            PreparedStatement statement = con.prepareStatement("INSERT INTO participant_methinkfast (session_idSession, description) VALUES (?, ?)");
////            statement.setString(1,situationDescription1);
////            statement.setString(2,situationDescription2);
////            statement.executeUpdate();
//
//            System.out.println("Description succesfully saved");
//        }catch (SQLException e) {
//            throw new RuntimeException(e);
//        }
//    }
    public void updateMeThinkingFast(int id) {

        String[] descriptions = {situationDescription1, situationDescription2,situationDescription3,situationDescription4,situationDescription5,situationDescription6,situationDescription7,situationDescription8,situationDescription9,situationDescription10,situationDescription11,situationDescription12};
        System.out.println(descriptions[count]);
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("UPDATE methinkfast SET description = ? WHERE id = ?");
            stmt.setString(1, descriptions[count]);
            System.out.println(id);
            stmt.setInt(2, id);
            stmt.executeUpdate();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public List selectParticipantMeThinkingFast() throws SQLException {
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            System.out.println("Papi");
            //stmt = con.prepareStatement("SELECT participant_methinkfast.id, participant_methinkfast.description * FROM participant_methinkfast WHERE session_idSession = ?");
            stmt = con.prepareStatement("SELECT participant_methinkfast.id, participant_methinkfast.description FROM participant_methinkfast  WHERE session_idSession = ?;");
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


    public List selectMeThinkingFastTest2() throws SQLException {
        System.out.println("daddyhandlertest2");
        Statement stmt = con.createStatement();
        String query = "SELECT * FROM participant_methinkfast";
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
