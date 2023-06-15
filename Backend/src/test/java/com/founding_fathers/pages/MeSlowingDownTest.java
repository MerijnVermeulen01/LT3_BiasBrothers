package com.founding_fathers.pages;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class MeSlowingDownTest {

    @Test
    public void testDescriptionInitialization() {
        String[] description = {"", "", "", "", "", "", "", "", "", "", "", ""};

        Assertions.assertEquals(12, description.length, "Description array should have 12 elements");
        for (String element : description) {
            Assertions.assertEquals("", element, "Each element of the description should be an empty string");
        }
    }
}
