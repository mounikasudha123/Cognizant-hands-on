package com.example.search.service;

import com.example.search.model.Document;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Service
public class SearchService {
    private final Map<Long, Document> docs = new ConcurrentHashMap<>();
    private final Map<String, Set<Long>> index = new ConcurrentHashMap<>();

    private List<String> tokenize(String text) {
        if (text == null) return Collections.emptyList();
        return Arrays.stream(text.toLowerCase().split("\\W+"))
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toList());
    }

    public void addDocument(Document d) {
        docs.put(d.getId(), d);
        Set<String> terms = new HashSet<>();
        terms.addAll(tokenize(d.getTitle()));
        terms.addAll(tokenize(d.getDescription()));
        for (String t : terms) {
            index.computeIfAbsent(t, k -> ConcurrentHashMap.newKeySet()).add(d.getId());
        }
    }

    public List<Document> search(String q) {
        if (q == null || q.isBlank()) return Collections.emptyList();
        List<String> toks = tokenize(q);
        if (toks.isEmpty()) return Collections.emptyList();

        Set<Long> result = null;
        for (String t : toks) {
            Set<Long> postings = index.get(t);
            if (postings == null) {
                // prefix expansion
                postings = index.keySet().stream()
                        .filter(term -> term.startsWith(t))
                        .flatMap(term -> index.getOrDefault(term, Collections.emptySet()).stream())
                        .collect(Collectors.toSet());
            }
            if (result == null) result = new HashSet<>(postings);
            else result.retainAll(postings);
            if (result.isEmpty()) break;
        }
        if (result == null || result.isEmpty()) return Collections.emptyList();
        return result.stream().limit(100).map(docs::get).filter(Objects::nonNull).collect(Collectors.toList());
    }
}
