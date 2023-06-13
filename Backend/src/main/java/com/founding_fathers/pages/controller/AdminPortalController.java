package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.AdminPortal;
import com.founding_fathers.pages.MyBias;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class AdminPortalController implements APIController {

    private AdminPortal adminPortal;

    public AdminPortalController(AdminPortal adminPortal) {
        this.adminPortal = adminPortal;
    }

    @Override
    public void addHandlers(Javalin app) {
        app.post("/timer", ctx -> {
            adminPortal = ctx.bodyAsClass(AdminPortal.class);
            adminPortal.updateInTimer();
        });
        app.get("/adminPortalThinkingTraps", getAdminPortalThinkingTraps);
        app.get("/adminPortalThinkingTraps/{idThinkingTraps}", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("idThinkingTraps"));
            ctx.json(adminPortal.selectedByIDAdminPortal(id));
        });
        app.get("/adminPortalBias", getAdminPortalBias);
        app.get("/adminPortalTimer", getAdminPortalTimer);
        app.get("/adminPortalBias/{idBiases}", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("idBiases"));
            ctx.json(adminPortal.selectedByIDBiasAdminPortal(id));
        });
        app.get("/thinkingTrapsDelete/{idThinkingTrapsDelete}", ctx -> {
            int id = Integer.parseInt(ctx.pathParam("idThinkingTrapsDelete"));
            adminPortal.deleteAdminThinkingTraps(id);
        });
    }

    protected final Handler getAdminPortalTimer = (@NotNull Context context) ->
            context.json(adminPortal.selectAdminPortal("SELECT * FROM timer"));

    protected final Handler getAdminPortalThinkingTraps = (@NotNull Context context) ->
            context.json(adminPortal.selectAdminPortal("SELECT * FROM thinkingtraps"));
    protected final Handler getAdminPortalBias = (@NotNull Context context) ->
            context.json(adminPortal.selectAdminPortal("SELECT idBiases, nameBias, biasDescription FROM bias"));
}
