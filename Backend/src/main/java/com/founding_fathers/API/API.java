package com.founding_fathers.API;

import io.javalin.Javalin;

public class API {

    public API() {
//        To start the application
        int port = 7070;
        var app = Javalin.create()
                .get("/", ctx -> ctx.result("Hello world"))
                .start(7070);

    }
}
