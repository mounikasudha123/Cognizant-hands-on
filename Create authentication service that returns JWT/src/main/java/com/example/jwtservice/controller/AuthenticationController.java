package com.example.jwtservice.controller;

import com.example.jwtservice.service.JwtTokenService;
import javax.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.Map;

@RestController
public class AuthenticationController {

    private final JwtTokenService jwtTokenService;

    public AuthenticationController(JwtTokenService jwtTokenService) {
        this.jwtTokenService = jwtTokenService;
    }

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header == null || !header.startsWith("Basic ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String base64Credentials = header.substring("Basic ".length());
        String decoded = new String(Base64.getDecoder().decode(base64Credentials), StandardCharsets.UTF_8);
        String[] parts = decoded.split(":", 2);

        if (parts.length != 2) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String username = parts[0];
        String password = parts[1];

        if (!jwtTokenService.validateCredentials(username, password)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String token = jwtTokenService.generateToken(username);
        return ResponseEntity.ok(Map.of("token", token));
    }
}
