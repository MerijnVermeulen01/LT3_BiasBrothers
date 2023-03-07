package com.founding_fathers.pages.controller;

import com.founding_fathers.API.APIController;
import com.founding_fathers.pages.MyBias;
import io.javalin.Javalin;
import io.javalin.http.Context;
import io.javalin.http.Handler;
import org.jetbrains.annotations.NotNull;

public class MyBiasController implements APIController {

    private MyBias myBias;

    public MyBiasController(MyBias myBias){
        this.myBias = myBias;
    }

    @Override
    public void addHandlers(Javalin app) {
        app.get("/MyBias", getMyBiases);
    }

    protected final Handler getMyBiases = (@NotNull Context context) ->
            context.json(myBias.getNameBais());
}
