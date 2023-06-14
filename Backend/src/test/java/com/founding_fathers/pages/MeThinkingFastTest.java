//package com.founding_fathers.pages;
//import junit.framework.TestCase;
//import org.junit.Test;
//import static org.mockito.Mockito.*;
//import org.mockito.*;
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.SQLException;
//
//
//public class MeThinkingFastTest extends TestCase {
//
//    @Mock
//    private Connection connectionMock;
//    @Spy
//    private MeThinkingFast meThinkingFast = new MeThinkingFast();
//
//    @Mock
//    Database databaseMock;
//
//    @Test
//    public void testQuery()  {
//        assertNotNull(databaseMock);
//        when(databaseMock.isAvailable()).thenReturn(true);
//        Service t  = new Service(databaseMock);
//        boolean check = t.query("* from t");
//        assertTrue(check);
//    }
//
////    @Test
////    public void testInsertInBiasthinkingfast() throws SQLException {
////        // Set up the mock and spy objects
////        MockitoAnnotations.openMocks(this);
////        doReturn(connectionMock).when(meThinkingFast).getConnection();
////        PreparedStatement stmtMock = mock(PreparedStatement.class);
////        doReturn(stmtMock).when(connectionMock).prepareStatement(anyString());
////
////        // Call the method being tested
////        String[] descriptions = {"situationDescription1", "situationDescription2", "situationDescription3", "situationDescription4", "situationDescription5", "situationDescription6", "situationDescription7", "situationDescription8", "situationDescription9", "situationDescription10", "situationDescription11", "situationDescription12"};
////
////        // Throw a SQLException when executeUpdate is called
////        when(stmtMock.executeUpdate()).thenThrow(new SQLException());
////
////        // Call the method to be tested
////        meThinkingFast.insertInBiasthinkingfast(connectionMock, descriptions);
////
////
////    }
//@Test
//public void testInsertInBiasthinkingfast() throws SQLException {
//    // Set up the mock and spy objects
//    MockitoAnnotations.openMocks(this);
//    when(meThinkingFast.getConnection()).thenReturn(connectionMock);
//    PreparedStatement stmtMock = mock(PreparedStatement.class);
//    when(connectionMock.prepareStatement(anyString())).thenReturn(stmtMock);
//
//    // Throw a SQLException when executeUpdate is called
//    when(stmtMock.executeUpdate()).thenThrow(new SQLException());
//
//    // Call the method being tested
//    String[] descriptions = {"situationDescription1", "situationDescription2", "situationDescription3", "situationDescription4", "situationDescription5", "situationDescription6", "situationDescription7", "situationDescription8", "situationDescription9", "situationDescription10", "situationDescription11", "situationDescription12"};
//    meThinkingFast.insertInBiasthinkingfast(connectionMock, descriptions);
//}
//
//}
//
package com.founding_fathers.pages;
import junit.framework.TestCase;
import org.junit.Test;
import static org.mockito.Mockito.*;
import org.mockito.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import com.founding_fathers.pages.MeThinkingFast;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.sql.*;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

public class MeThinkingFastTest extends TestCase {

    @Mock
    private Connection mockConnection;

    @Mock
    private PreparedStatement mockPreparedStatement;

    @Mock
    private ResultSet mockResultSet;

    @Mock
    private MeThinkingFast MockiemeThinkingFast;

    @Before
    public void setUp() throws SQLException {
        MockitoAnnotations.openMocks(this);
        MockiemeThinkingFast = new MeThinkingFast();


        when(mockConnection.prepareStatement(anyString())).thenReturn(mockPreparedStatement);
        when(mockPreparedStatement.executeQuery()).thenReturn(mockResultSet);
        when(mockResultSet.isBeforeFirst()).thenReturn(false);
    }

    @Test
    public void testCheckForInformationMeThinkingFast_Insert() throws SQLException {
        // Call the method being tested

        // Verify the interactions with the mock objects
        verify(mockConnection).prepareStatement("SELECT participant_methinkfast.id, participant_methinkfast.description FROM participant_methinkfast  WHERE session_idSession = ?;");
        verify(mockPreparedStatement).setInt(1, 1);
        verify(mockPreparedStatement).executeQuery();
        verify(mockPreparedStatement, never()).executeUpdate();
        verify(mockResultSet).isBeforeFirst();
        verify(mockResultSet, never()).next();
        verify(mockPreparedStatement, never()).setString(anyInt(), anyString());
        verify(mockPreparedStatement, never()).setInt(anyInt(), anyInt());
    }
}
//
//    @Test
//    public void testCheckForInformationMeThinkingFast_Update() throws SQLException {
//        when(mockResultSet.isBeforeFirst()).thenReturn(true);
//        when(mockResultSet.next()).thenReturn(true, false);
//        when(mockResultSet.getInt(1)).thenReturn(1);
//
//        meThinkingFast.checkForInformationMeThinkingFast();
//
//        verify(mockConnection).prepareStatement("SELECT participant_methinkfast.id, participant_methinkfast.description FROM participant_methinkfast  WHERE session_idSession = ?;");
//        verify(mockPreparedStatement).setInt(1, 1);
//        verify(mockPreparedStatement).executeQuery();
//        verify(mockPreparedStatement, never()).executeUpdate();
//        verify(mockResultSet).isBeforeFirst();
//        verify(mockResultSet, times(2)).next();
//        verify(mockPreparedStatement).setString(1, meThinkingFast.getSituationDescription1());
//        verify(mockPreparedStatement).setInt(2, 1);
//        verify(mockPreparedStatement).executeUpdate();
//    }
//
//    @Test
//    public void testInsertInBiasthinkingfast() throws SQLException {
//        String[] descriptions = {"situationDescription1", "situationDescription2", "situationDescription3", "situationDescription4", "situationDescription5", "situationDescription6", "situationDescription7", "situationDescription8", "situationDescription9", "situationDescription10", "situationDescription11", "situationDescription12"};
//
//        when(mockConnection.prepareStatement(anyString())).thenReturn(mockPreparedStatement);
//
//        meThinkingFast.insertInBiasthinkingfast();
//
//        verify(mockConnection, times(descriptions.length)).prepareStatement("INSERT INTO participant_methinkfast (session_idSession, description) VALUES (?, ?)");
//        verify(mockPreparedStatement, times(descriptions.length)).setInt(1, 2);
//        verify(mockPreparedStatement, times(descriptions.length)).setString(2, descriptions[anyInt()]);
//        verify(mockPreparedStatement, times(descriptions.length)).executeUpdate();
//    }
//
//    // Add more tests for other methods if needed
//
//}
