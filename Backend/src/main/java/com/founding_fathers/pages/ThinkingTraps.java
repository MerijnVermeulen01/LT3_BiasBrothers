package com.founding_fathers.pages;

public class ThinkingTraps {

    private String thinkingTrapsTitle;
    private boolean selectedThinkingTraps;
    private String description;
    private String descriptionParticipant;

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
