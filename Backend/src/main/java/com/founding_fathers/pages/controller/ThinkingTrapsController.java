package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.ThinkingTraps;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class ThinkingTrapsController implements APIController {

    private ThinkingTraps thinkingTraps;

    /**
     * This is the constructor of the ThinkingTrapsController file
     */
    public ThinkingTrapsController(ThinkingTraps thinkingTraps){
        this.thinkingTraps = thinkingTraps;
    }

    /**
     * This function is form the interface of APIContoller. This is to make sure that this file gets an url to talk with front-end.
     */
    @Override
    public void addHandlers(Javalin app) {
        app.get("/ThinkingTraps", getThinkingTraps);
        app.get("/getParicipantTraps", getParticipantTraps);
        app.get("/joinedParticipantTraps", getJoinedParticipantTraps);
        app.post("/MyThinkingTraps", ctx -> {
            System.out.println("Yeetus DELETUS");
            thinkingTraps = ctx.bodyAsClass(ThinkingTraps.class);
            thinkingTraps.checkForInformationThinkingTrap();
        });
    }
    /**
     * This is a variable to get the selected thinking traps form the database.
     */
    protected final Handler getThinkingTraps = (@NotNull Context context) ->
            context.json(thinkingTraps.selectThinkingTraps());

    protected final Handler getParticipantTraps = (@NotNull Context context) ->
            context.json(thinkingTraps.selectParticipantThinkingTraps());

    protected final Handler getJoinedParticipantTraps = (@NotNull Context context) ->
            context.json(thinkingTraps.getParticipantTrapName());


}
