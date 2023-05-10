package com.founding_fathers.pages;
import com.founding_fathers.pages.controller.MeThinkController;
import junit.framework.TestCase;
import org.junit.Test;
import io.javalin.Javalin;
import java.sql.SQLException;
import java.sql.ResultSet;
import org.junit.Assert;

public class MeThinkingFastTest extends TestCase {

    @Test
    public void testAddHandlers() {
        // Create a mock Javalin app
        Javalin app = Javalin.create();

        // Create a mock MeThinkingFast instance
        MeThinkingFast meThinkingFast = new MeThinkingFast();

        MeThinkController controller = new MeThinkController(meThinkingFast);


        // Add the handlers to the app
        controller.addHandlers(app);

        int a = 4; // Assume 4 coming from a database.
        int b = 5; // Assume 5 coming from a database.

        int c = a + b;
//        Assert.True(9, c);




//// Verify that the handlers were added correctly
//        assertTrue(app.routes().stream().anyMatch(route -> route.getPath().equals("/MeThinkingFast") && route.getHttpMethod().equals("GET")));
//        assertTrue(app.routes().stream().anyMatch(route -> route.getPath().equals("/MeThinkingFastPost") && route.getHttpMethod().equals("POST")));
//        assertTrue(app.routes().stream().anyMatch(route -> route.getPath().equals("/getParicipantMeThinkFast") && route.getHttpMethod().equals("GET")));
    }

    @Test
    public void testAssert() throws Exception {
        assertEquals(1, 2);
    }
}

