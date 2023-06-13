package com.founding_fathers.pages.controller;
import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.MeSlowingDown;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class MeSlowingDownController implements APIController {


    private MeSlowingDown meSlowingDown;

    /**
     * This is the constructor of the MeSlowingDownController file
     */

    public MeSlowingDownController(MeSlowingDown meSlowingDown){this.meSlowingDown = meSlowingDown;}


    @Override
    public void addHandlers(Javalin app) {
        app.get("/getParticipantMeSlowingDown", getMeSlowingDownParticipant);
        app.post("/MeSlowingDownPost", ctx -> {
            meSlowingDown = ctx.bodyAsClass(MeSlowingDown.class);
            meSlowingDown.checkForInformationMeSlowingDown();
        });
    }

    /**
     * This is a select function to get the explained editPossibility's form the database. It is used in the addHandlers.
     */
    protected final Handler getMeSlowingDownParticipant = (@NotNull Context context) ->
            context.json(meSlowingDown.selectMeSlowingDown());

}
