package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.service.CountryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }

    @GetMapping("/country/{code}")
    public Object getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
}
