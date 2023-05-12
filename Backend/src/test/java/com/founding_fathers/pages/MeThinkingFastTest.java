package com.founding_fathers.pages;
import junit.framework.TestCase;
import org.junit.Test;
import static org.mockito.Mockito.*;
import org.mockito.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;


public class MeThinkingFastTest extends TestCase {

    @Mock
    private Connection connectionMock;
    @Spy
    private MeThinkingFast meThinkingFast = new MeThinkingFast();


    @Test
    public void testInsertInBiasthinkingfast() throws SQLException {
        // Set up the mock and spy objects
        MockitoAnnotations.openMocks(this);
        doReturn(connectionMock).when(meThinkingFast).getConnection();
        PreparedStatement stmtMock = mock(PreparedStatement.class);
        doReturn(stmtMock).when(connectionMock).prepareStatement(anyString());

        // Call the method being tested
       meThinkingFast.insertInBiasthinkingfast();

    }

}

