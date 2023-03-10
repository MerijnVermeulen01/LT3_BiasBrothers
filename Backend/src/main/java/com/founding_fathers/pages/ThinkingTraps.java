package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;

import java.sql.Connection;

public class ThinkingTraps extends DatabaseController {
    Connection con = getConnection();

    private String thinkingTrapsTitle;
    private boolean selectedThinkingTraps;
    private String description;
    private String descriptionParticipant;

    /**
     * These are the respective getters and setters for this file.
     */
    public String getThinkingTrapsTitle() {
        return this.thinkingTrapsTitle;
    }
    public String getDescription() {
        return this.description;
    }
    public boolean getSelectedThinkingTraps(){
        return this.selectedThinkingTraps;
    }
    public void setSelectedThinkingTraps(boolean selectedThinkingTraps) {
        this.selectedThinkingTraps = selectedThinkingTraps;
    }
    public String getDescriptionParticipant() {
        return this.descriptionParticipant;
    }
    public void setDescriptionParticipant(String descriptionParticipant) {
        this.descriptionParticipant = descriptionParticipant;
    }
}
