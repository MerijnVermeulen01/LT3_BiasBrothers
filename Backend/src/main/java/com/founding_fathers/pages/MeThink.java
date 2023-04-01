package com.founding_fathers.pages;

import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

import java.sql.Connection;

public class MeThink {
    Connection con = getConnection();
    private MeThink meThink;
    private String title;
    private String description;

    /**
     * These are the respective getters and setters for this file.
     */
    public String getTitle(){
        return this.title;
    }
    public String getDescription() {
        return this.description;
    }
    public void setDescription(String description) {
        this.description = description;
    }



    /**
     * This is a variable to get the explained top bias form the database.
     */
    protected final Handler getMeSlowingDown = (@NotNull Context context) ->
            context.json(meThink.insertInBias());

    protected final Handler getMeThinkingFast = (@NotNull Context context) ->
            context.json(meThink.situationalDescription());

}
