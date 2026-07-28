package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

class CountryServiceTest {

    private final CountryService countryService = new CountryService();

    @Test
    void shouldReturnCountryForCaseInsensitiveCode() {
        Country country = countryService.getCountry("in");

        assertNotNull(country);
        assertEquals("IN", country.getCode());
        assertEquals("India", country.getName());
    }

    @Test
    void shouldReturnNullWhenCountryCodeDoesNotExist() {
        Country country = countryService.getCountry("ZZ");

        assertNull(country);
    }
}
