Search Service (Spring Boot)
============================

This is a minimal Spring Boot service demonstrating an in-memory inverted-index search.

Build & run (requires Maven and JDK 17+):

```bash
cd DesignPatternsAndPrinciples/SearchServiceSpring
mvn -q package
java -jar target/search-service-0.0.1-SNAPSHOT.jar
```

Quick test (after start):

POST a document:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"id":10,"title":"Green sweater","description":"Warm green sweater"}' http://localhost:8080/documents
```

Search:
```bash
curl 'http://localhost:8080/search?q=green'
```

Notes: This is intentionally simple (in-memory). For production use, add persistence, ranking (BM25), and efficient term storage.
