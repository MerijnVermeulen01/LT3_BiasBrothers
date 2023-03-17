package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.Codex;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class CodexController implements APIController {
    private Codex codex;
    public CodexController(Codex codex){
        this.codex = codex;
    }
    @Override
    public void addHandlers(Javalin app) {
        app.get("/Codex", getCodex);
    }
    protected final Handler getCodex = (@NotNull Context context) ->
            context.json(codex.codexInfo());
}
