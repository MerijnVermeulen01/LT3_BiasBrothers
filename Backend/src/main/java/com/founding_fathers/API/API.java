package com.founding_fathers.API;

import io.javalin.Javalin;

public class API {

    private final Javalin app;

    public API() {
//        To start the application
        int port = 7070;
        app = Javalin.create(javalinConfig -> {javalinConfig.enableCorsForAllOrigins();});

    }
}
