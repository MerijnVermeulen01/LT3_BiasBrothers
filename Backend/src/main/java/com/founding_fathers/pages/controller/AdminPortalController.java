package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.AdminPortal;
import com.founding_fathers.pages.MyBias;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class AdminPortalController implements APIController {

    private AdminPortal adminPortaal;

    public AdminPortalController(AdminPortal adminPortaal) {
        this.adminPortaal = adminPortaal;
    }

    @Override
    public void addHandlers(Javalin app) {
        app.post("/timer", ctx -> {
            adminPortaal = ctx.bodyAsClass(AdminPortal.class);
            adminPortaal.updateInTimer();
        });
        app.get("/adminPortalThinkingTraps", getAdminPortalThinkingTraps);
        app.get("/adminPortalBias", getAdminPortalBias);
        app.get("/adminPortalTimer", getAdminPortalTimer);
    }

    protected final Handler getAdminPortalTimer = (@NotNull Context context) ->
            context.json(adminPortaal.selectAdminPortaal("SELECT * FROM timer"));

    protected final Handler getAdminPortalThinkingTraps = (@NotNull Context context) ->
            context.json(adminPortaal.selectAdminPortaal("SELECT * FROM thinkingtraps"));
    protected final Handler getAdminPortalBias = (@NotNull Context context) ->
            context.json(adminPortaal.selectAdminPortaal("SELECT idBiases, nameBias, biasDescription FROM bias"));
}
