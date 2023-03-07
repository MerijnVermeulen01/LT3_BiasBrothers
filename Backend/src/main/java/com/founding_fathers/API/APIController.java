package com.founding_fathers.API;

import io.javalin.Javalin;

public interface APIController {

    void addHandlers(Javalin app);

}
