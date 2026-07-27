import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Test class demonstrating Mocking and Stubbing with Mockito
 */
public class MyServiceTest {

    /**
     * Test case that uses a mock object for the external API
     */
    @Test
    public void testExternalApi() {
        // Step 1: Create a mock object for the external API
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Stub the methods to return predefined values
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Create the service with the mocked API
        MyService service = new MyService(mockApi);

        // Step 4: Call the service method
        String result = service.fetchData();

        // Step 5: Assert the result
        assertEquals("Mock Data", result);
    }
}
