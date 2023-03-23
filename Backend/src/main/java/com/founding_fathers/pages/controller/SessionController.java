package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.SessionsParticipant;
import io.javalin.Javalin;
import io.javalin.http.Context;
import org.jetbrains.annotations.NotNull;

import java.util.logging.Handler;

public class SessionController implements APIController {

    private SessionsParticipant session;

    /**
     * This is the constructor of the ThinkingTrapsController file
     */
    public SessionController(SessionsParticipant session){
        this.session = session;
    }

    /**
     * This function is form the interface of APIContoller. This is to make sure that this file gets an url to talk with front-end.
     */
    @Override
    public void addHandlers(Javalin app) {
        app.get("/addSession", ctx -> {
            session.addSession();
            ctx.json(session.getIdSession());
        });
    }
    /**
     * This is a variable to get the selected thinking traps form the database.
     */
//    protected final Handler getThinkingTraps = (@NotNull Context context) ->
//            context.json(session.getIdSession());
}
