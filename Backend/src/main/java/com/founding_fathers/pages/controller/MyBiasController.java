package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.MyBias;
import com.founding_fathers.pages.ThinkingTraps;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class MyBiasController implements APIController {

    private MyBias myBias;

    /**
     * This is the constructor of the MyBiasController file
     */
    public MyBiasController(MyBias myBias){
        this.myBias = myBias;
    }

    /**
     * This function is form the interface of APIContoller. This is to make sure that this file gets an url to talk with front-end.
     */
    @Override
    public void addHandlers(Javalin app) {
        app.get("/MyBias", getMyBiases);
        app.post("/MyBiasParticipant", ctx -> {
            myBias = ctx.bodyAsClass(MyBias.class);
            myBias.checkForInformation();
        });
        app.get("/getParicipantBias", getParicipantBias);
    }

    /**
     * This is a variable to get the selected biases form the database.
     */
    protected final Handler getMyBiases = (@NotNull Context context) ->
            context.json(myBias.selectMyBias());

    protected final Handler getParicipantBias = (@NotNull Context context) ->
            context.json(myBias.selectParticipantBias());

}
