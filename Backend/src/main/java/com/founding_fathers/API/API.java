package com.founding_fathers.API;

import com.founding_fathers.pages.*;
import com.founding_fathers.pages.controller.*;
import io.javalin.Javalin;
import io.javalin.plugin.bundled.CorsPluginConfig;

public class API {

    private final Javalin app;

    private final MyBiasController myBiasController;
    private final selfDevelopmentController selfDevelopmentController;
    private final ThinkingTrapsController thinkingTrapsController;
    private final CodexController codexController;
    private final MeThinkController meThinkController;
//    private final SessionController sessionController;
    private final AdminPortalController adminPortaalController;

    /**
     * This function is the REST-API. This makes sure that we there will be a connection between the front-end and the back-end.
     */
    public API(){
        new DatabaseController();
//        To start the application
        app = Javalin.create(config -> {
            config.plugins.enableCors(cors -> cors.add(CorsPluginConfig::anyHost));})
                .start(7070);

        MyBias myBias = new MyBias();
        selfDevelopment selfDevelopment = new selfDevelopment();
        ThinkingTraps thinkingTraps = new ThinkingTraps();
        Codex codex = new Codex();
        MeThinkingFast methinkingFast = new MeThinkingFast();
        AdminPortal adminPortal = new AdminPortal();

//        SessionsParticipant session = new SessionsParticipant();


        this.myBiasController = new MyBiasController(myBias);
        this.selfDevelopmentController = new selfDevelopmentController(selfDevelopment);
        this.thinkingTrapsController = new ThinkingTrapsController(thinkingTraps);
        this.codexController = new CodexController(codex);
        this.adminPortaalController = new AdminPortalController(adminPortal);
        this.meThinkController = new MeThinkController(methinkingFast);
//        this.sessionController = new SessionController(session);
        addHandlers();

    }

    /**
     * This function goes through the whole back-end to give the respective files there way to talk with the front-end.
     */
    private void addHandlers(){
        myBiasController.addHandlers(app);
        selfDevelopmentController.addHandlers(app);
        thinkingTrapsController.addHandlers(app);
        codexController.addHandlers(app);
        meThinkController.addHandlers(app);
        adminPortaalController.addHandlers(app);
    }
}
