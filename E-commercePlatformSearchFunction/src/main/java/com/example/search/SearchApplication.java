package com.example.search;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SearchApplication {

    public static void main(String[] args) {
        SpringApplication.run(SearchApplication.class, args);
    }

    @Bean
    CommandLineRunner demo(com.example.search.service.SearchService svc) {
        return args -> {
            // seed some sample documents
            svc.addDocument(new com.example.search.model.Document(1L, "Red cotton shirt", "Comfortable red shirt"));
            svc.addDocument(new com.example.search.model.Document(2L, "Blue denim jeans", "Stylish blue jeans"));
            svc.addDocument(new com.example.search.model.Document(3L, "Running shoes", "Lightweight running shoes"));
        };
    }
}
