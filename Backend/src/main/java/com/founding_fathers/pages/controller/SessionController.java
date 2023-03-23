package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.SessionsParticipant;
import io.javalin.Javalin;

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
        app.post("/addSession", ctx -> {
            session.addSession();
        });
        app.get("/getSession",  ctx -> ctx.json(session.getIdSession()));
    }
}
