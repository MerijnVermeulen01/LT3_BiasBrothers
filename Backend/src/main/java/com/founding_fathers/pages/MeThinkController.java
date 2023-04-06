package com.founding_fathers.pages;

import com.founding_fathers.API.APIController;
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
        app.get("/MethinkingFast", getMeThinkingFast);
        app.post("/MyBiasParticipant", ctx -> {
            meThinkingFast = ctx.bodyAsClass(MeThinkingFast.class);
            meThinkingFast.checkForInformationMeThinkingFast();
        });
        app.get("/getParicipantBias", getParicipantBias);
    }

    /**
     * This is a variable to get the explained top bias form the database.
     */
//    protected final Handler getMeSlowingDown = (@NotNull Context context) ->
//            context.json(meThinkingFast.insertInBias());

    protected final Handler getMeThinkingFast = (@NotNull Context context) ->
            context.json(meThinkingFast.situationDescription());

}
