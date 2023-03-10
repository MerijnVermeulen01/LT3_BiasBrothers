package com.founding_fathers.pages;

import com.founding_fathers.pages.controller.DatabaseController;

import java.sql.Connection;

public class selfDevelopment extends DatabaseController {

    Connection con = getConnection();

    private String selfDevelopmentTitle;
    private String description;

    /**
     * These are the respective getters and setters for this file.
     */
    public String getSelfDevelopmentTitle() {
        return this.selfDevelopmentTitle;
    }
    public void setSelfDevelopmentTitle(String selfDevelopmentTitle) {
        this.selfDevelopmentTitle = selfDevelopmentTitle;
    }
    public String getDescription() {
        return this.description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
