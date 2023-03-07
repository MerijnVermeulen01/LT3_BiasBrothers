package com.founding_fathers.API;

import com.founding_fathers.pages.MyBias;
import com.founding_fathers.pages.controller.MyBiasController;
import io.javalin.Javalin;
import io.javalin.plugin.bundled.CorsPluginConfig;

public class API {

    private final Javalin app;

    private final MyBiasController myBiasController;

    public API() {

//        To start the application
        app = Javalin.create(config -> {
            config.plugins.enableCors(cors -> cors.add(CorsPluginConfig::anyHost));})
                .start(7070);

        MyBias myBias = new MyBias();

        this.myBiasController = new MyBiasController(myBias);

        addHandlers();

    }

    private void addHandlers(){
        app.get("/test", ctx -> ctx.result("test"));

        myBiasController.addHandlers(app);
    }
}
