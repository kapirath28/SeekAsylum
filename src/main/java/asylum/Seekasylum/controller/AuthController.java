package asylum.Seekasylum.controller;

import asylum.Seekasylum.dto.LoginRequest;
import asylum.Seekasylum.dto.UserRegistrationDto;
import asylum.Seekasylum.model.User;
import asylum.Seekasylum.service.UserService;
import asylum.Seekasylum.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(originPatterns = "http://localhost:3000", allowCredentials = "true")
public class AuthController {
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegistrationDto registrationDto) {
        try {
            logger.info("Received registration request for email: {}", registrationDto.getEmail());
            if (registrationDto.getEmail() == null || registrationDto.getPassword() == null) {
                logger.error("Registration failed: Email or password is null");
                return ResponseEntity.badRequest().body("Email and password are required");
            }
            User user = userService.registerUser(registrationDto);
            String token = jwtService.generateToken(user.getEmail());

            Map<String, Object> response = new HashMap<>();
            response.put("user", user);
            response.put("token", token);

            logger.info("User registered successfully: {}", user.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            logger.error("Registration failed: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (RuntimeException e) {
            logger.error("Registration failed: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            logger.info("Received login request for email: {}", loginRequest.getEmail());
            if (loginRequest.getEmail() == null || loginRequest.getPassword() == null) {
                logger.error("Login failed: Email or password is null");
                return ResponseEntity.badRequest().body("Email and password are required");
            }

            User user = userService.login(loginRequest.getEmail(), loginRequest.getPassword());
            String token = jwtService.generateToken(user.getEmail());

            Map<String, Object> response = new HashMap<>();
            response.put("user", user);
            response.put("token", token);

            logger.info("Login successful for user: {}", user.getEmail());
            return ResponseEntity.ok(response);

        } catch (IllegalArgumentException e) {
            logger.error("Login failed: {}", e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (RuntimeException e) {
            logger.error("Login failed: {}", e.getMessage());
            if (e.getMessage().equals("User not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}