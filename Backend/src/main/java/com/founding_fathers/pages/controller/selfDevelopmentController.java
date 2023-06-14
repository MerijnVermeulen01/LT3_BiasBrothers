package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.selfDevelopment;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class selfDevelopmentController implements APIController {

    private selfDevelopment selfDevelopment;

    /**
     * This is the constructor of the selfDevelopmentController file
     */
    public selfDevelopmentController(selfDevelopment selfDevelopment) {
        this.selfDevelopment = selfDevelopment;
    }

    /**
     * This function is form the interface of APIContoller. This is to make sure that this file gets an url to talk with front-end.
     */
    @Override
    public void addHandlers(Javalin app) {
        app.get("/selfDevelopment", getSelfDevelopment);
        app.post("/selfDevToBackend", ctx -> {
            selfDevelopment = ctx.bodyAsClass(selfDevelopment.class);
            selfDevelopment.insertSelfDevelopment();
        });

    }

    /**
     * This is a variable to get the selected self development form the database.
     */
    protected final Handler getSelfDevelopment = (@NotNull Context context) ->
            context.json(selfDevelopment.selectSelfDevelopment());

}
