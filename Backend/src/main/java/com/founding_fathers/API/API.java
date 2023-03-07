package com.founding_fathers.API;

import io.javalin.Javalin;
import io.javalin.plugin.bundled.CorsPluginConfig;

public class API {

    public API() {
//        To start the application
        var app = Javalin.create(config -> {
            config.plugins.enableCors(cors -> cors.add(CorsPluginConfig::anyHost));})
                .get("/", ctx -> ctx.result("Hello world"))
                .start(7070);

        app.get("/cities", ctx -> {
            ctx.result("Testing TEXT");
        });

    }
}
