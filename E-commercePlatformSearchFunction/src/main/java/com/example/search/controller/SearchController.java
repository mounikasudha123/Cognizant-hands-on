package com.example.search.controller;

import com.example.search.model.Document;
import com.example.search.service.SearchService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SearchController {

    private final SearchService service;

    public SearchController(SearchService service) {
        this.service = service;
    }

    @PostMapping("/documents")
    public ResponseEntity<String> add(@RequestBody Document doc) {
        if (doc.getId() == null) return ResponseEntity.badRequest().body("id required");
        service.addDocument(doc);
        return ResponseEntity.ok("added");
    }

    @GetMapping("/search")
    public List<Document> search(@RequestParam("q") String q) {
        return service.search(q);
    }
}
