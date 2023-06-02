package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.AdminPortal;
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
        app.get("/adminPortalThinkingTraps", getAdminPortalThinkingTraps);
        app.get("/adminPortalThinkingTraps/{idThinkingTraps}", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("idThinkingTraps"));
            ctx.json(adminPortaal.selectedByIDAdminPortaal(id));
        });
        app.get("/adminPortalBias", getAdminPortalBias);
        app.get("/adminPortalTimer", getAdminPortalTimer);
        app.get("/adminPortalBias/{idBiases}", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("idBiases"));
            ctx.json(adminPortaal.selectedByIDBiasAdminPortaal(id));
        });
    }

    protected final Handler getAdminPortalTimer = (@NotNull Context context) ->
            context.json(adminPortaal.selectAdminPortaal("SELECT * FROM timer"));

    protected final Handler getAdminPortalThinkingTraps = (@NotNull Context context) ->
            context.json(adminPortaal.selectAdminPortaal("SELECT * FROM thinkingtraps"));
    protected final Handler getAdminPortalBias = (@NotNull Context context) ->
            context.json(adminPortaal.selectAdminPortaal("SELECT idBiases, nameBias, biasDescription FROM bias"));
}
