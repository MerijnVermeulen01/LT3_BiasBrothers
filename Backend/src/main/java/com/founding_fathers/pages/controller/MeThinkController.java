package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.MeThinkingFast;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class MeThinkController implements APIController {


    private MeThinkingFast meThinkingFast;

    /**
     * This is the constructor of the MyBiasController file
     */

    public MeThinkController(MeThinkingFast meThinkingFast){this.meThinkingFast = meThinkingFast;}


    @Override
    public void addHandlers(Javalin app) {
        app.get("/MeThinkingFast", getMeThinkingFast);
        app.post("/MeThinkingFastPost", ctx -> {
            meThinkingFast = ctx.bodyAsClass(MeThinkingFast.class);
            meThinkingFast.checkForInformationMeThinkingFast();
        });
        System.out.println("daddyhandler3");
        app.get("/getParicipantMeThinkFast", getMeThinkingFastparticipant);
    }

    /**
     * This is a variable to get the explained top bias form the database.
     */
    protected final Handler getMeThinkingFast = (@NotNull Context context) ->
            context.json(meThinkingFast.selectMeThinkingFastTest2());


    protected final Handler getMeThinkingFastparticipant = (@NotNull Context context) ->
            context.json(meThinkingFast.selectParticipantMeThinkingFast());

}
