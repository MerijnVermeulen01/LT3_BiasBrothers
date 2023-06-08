package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.LoginPage;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class LoginController implements APIController {

    private LoginPage loginPage;

    public LoginController(LoginPage loginPage){
        this.loginPage = loginPage;
    }

    @Override
    public void addHandlers(Javalin app) {
        app.get("/AdminLogin", ctx -> {
            loginPage = ctx.bodyAsClass(LoginPage.class);
            loginPage.checkAdmin();
        });
        app.get("/ParticipantLogin", ctx -> {
            loginPage = ctx.bodyAsClass(LoginPage.class);
            loginPage.checkParticipant();
        });
        app.get("/CheckAdmin", checkAdmin);
        app.get("/CheckParticipant", checkParticipant);
    }

    protected final Handler checkAdmin = (@NotNull Context context) ->
            context.json(loginPage.checkAdminBool());

    protected final Handler checkParticipant = (@NotNull Context context) ->
            context.json(loginPage.checkParticipantBool());

}
