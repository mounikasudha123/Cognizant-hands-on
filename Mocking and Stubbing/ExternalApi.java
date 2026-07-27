/**
 * External API interface that the service depends on
 */
public interface ExternalApi {
    /**
     * Fetches data from an external source
     * @return data from the external API
     */
    String getData();
}
