/**
 * Service class that depends on an external API
 */
public class MyService {
    private ExternalApi externalApi;

    /**
     * Constructor to inject the external API dependency
     * @param externalApi the external API to use
     */
    public MyService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    /**
     * Fetches data from the external API through the service
     * @return data from the external API
     */
    public String fetchData() {
        return externalApi.getData();
    }
}
