package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.Codex;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class CodexController implements APIController {
    private Codex codex;

    public CodexController(Codex codex) {
        this.codex = codex;
    }

    @Override
    public void addHandlers(Javalin app) {
        app.get("/codexThinkingTraps", getCodexThinkingTraps);
        app.get("/codexBias", getCodexBias);
        app.get("/codexAdaptability", getCodexAdaptability);
        app.get("/codexCognitiveBias", getCodexCognitiveBias);
    }

    protected final Handler getCodexThinkingTraps = (@NotNull Context context) ->
            context.json(codex.codexInfo("SELECT * FROM thinkingtraps"));
    protected final Handler getCodexBias = (@NotNull Context context) ->
            context.json(codex.codexInfo("SELECT * FROM bias"));
    protected final Handler getCodexAdaptability = (@NotNull Context context) ->
            context.json(codex.codexInfo("SELECT * FROM adaptability"));
    protected final Handler getCodexCognitiveBias = (@NotNull Context context) ->
            context.json(codex.codexInfo("SELECT * FROM bias"));
}