package com.founding_fathers.pages;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

//This class extends the MeThink
public class MeThinkingFast extends MeThink {
//    Getters/setters are in the MeThink.
//    In This class you can get/set information form the database

    private String situtationDescription1;
    private String situtationDescription2;

    public void situationalDescription(){
        try {
            PreparedStatement statement = con.prepareStatement("INSERT INTO methinkfast (situationDescription1,situationDescription2) VALUES (?,?)");
            statement.setString(1,situtationDescription1);
            statement.setString(2,situtationDescription2);
            statement.executeUpdate();

            System.out.println("Description succesfully saved");
        }catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }


}
