package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

//This class extends the MeThink
public class MeThinkingFast extends DatabaseController {
//    Getters/setters are in the MeThink.
//    In This class you can get/set information form the database

    Connection con = getConnection();

    private String situationDescription1;
    private String situationDescription2;


    public void checkForInformationMeThinkingFast() throws SQLException {
        System.out.println("Yeetus");
        ResultSet resultSet = null;
        PreparedStatement stmt = null;
        try {
            stmt = con.prepareStatement("SELECT participant_thinkingtraps.id, thinkingtraps_idThinkingTraps, thinkingTraps, participant_thinkingtraps.description FROM participant_thinkingtraps LEFT JOIN thinkingtraps ON participant_thinkingtraps.thinkingtraps_idThinkingTraps = thinkingtraps.idThinkingTraps WHERE session_idSession = ?;");

            stmt.setInt(1, 1);
            resultSet = stmt.executeQuery();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        System.out.println("Yeet");
        if(!resultSet.isBeforeFirst()){
            System.out.println("Insert");
            insertThinkingTraps();
        }else{
            while (resultSet.next()){
                System.out.println("Update");
                updateThinkingTraps(resultSet.getInt(1));
                count++;
            }
        }
    }


    public void situationDescription(){
        try {
            PreparedStatement statement = con.prepareStatement("INSERT INTO methinkfast (situationDescription1,situationDescription2) VALUES (?,?)");
            statement.setString(1,situationDescription1);
            statement.setString(2,situationDescription2);
            statement.executeUpdate();

            System.out.println("Description succesfully saved");
        }catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }


}
