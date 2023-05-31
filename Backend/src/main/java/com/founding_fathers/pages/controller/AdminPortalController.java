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
        app.get("/adminPortalBias", getAdminPortalBias);
    }

    protected final Handler getAdminPortalThinkingTraps = (@NotNull Context context) ->
            context.json(adminPortaal.selectAdminPortaal("SELECT * FROM thinkingtraps"));
    protected final Handler getAdminPortalBias = (@NotNull Context context) ->
            context.json(adminPortaal.selectAdminPortaal("SELECT idBiases, nameBias, biasDescription FROM bias"));
}
