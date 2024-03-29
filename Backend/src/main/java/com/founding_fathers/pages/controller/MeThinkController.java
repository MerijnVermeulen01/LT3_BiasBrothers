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
     * This is the constructor of the MeThinkingFastController file
     */

    public MeThinkController(MeThinkingFast meThinkingFast){this.meThinkingFast = meThinkingFast;}


    @Override
    public void addHandlers(Javalin app) {
        app.get("/getParticipantMeThinkFast", getMeThinkingFastparticipant);
        app.post("/MeThinkingFastPost", ctx -> {
            meThinkingFast = ctx.bodyAsClass(MeThinkingFast.class);
            meThinkingFast.checkForInformationMeThinkingFast();
        });
    }

    /**
     * This is a select function to get the explained editPossibility's form the database. It is used in the addHandlers.
     */
    protected final Handler getMeThinkingFastparticipant = (@NotNull Context context) ->
            context.json(meThinkingFast.selectMeThinkingFast());

}
