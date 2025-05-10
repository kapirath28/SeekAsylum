package asylum.Seekasylum.service;

import asylum.Seekasylum.dto.UserRegistrationDto;
import asylum.Seekasylum.model.User;
import asylum.Seekasylum.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.regex.Pattern;

@Service
public class UserService implements UserDetailsService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[A-Za-z0-9+_.-]+@(.+)$");
    private static final int MIN_PASSWORD_LENGTH = 8;

    private final UserRepository userRepository;

    @Lazy
    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private void validateEmail(String email) {
        if (email == null || email.trim().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be empty");
        }
        if (!EMAIL_PATTERN.matcher(email).matches()) {
            throw new IllegalArgumentException("Invalid email format");
        }
    }

    private void validatePassword(String password) {
        if (password == null || password.length() < MIN_PASSWORD_LENGTH) {
            throw new IllegalArgumentException("Password must be at least " + MIN_PASSWORD_LENGTH + " characters long");
        }
    }

    public User registerUser(UserRegistrationDto registrationDto) {
        validateEmail(registrationDto.getEmail());
        validatePassword(registrationDto.getPassword());

        if (userRepository.existsByEmail(registrationDto.getEmail())) {
            logger.error("Registration failed: Email {} already exists", registrationDto.getEmail());
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setFirstName(registrationDto.getFirstName());
        user.setLastName(registrationDto.getLastName());
        user.setEmail(registrationDto.getEmail());
        user.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        user.setCountryOfOrigin(registrationDto.getCountryOfOrigin());
        user.setCurrentLocation(registrationDto.getCurrentLocation());
        user.setAsylumStatus("PENDING");

        User savedUser = userRepository.save(user);
        logger.info("User registered successfully: {}", savedUser.getEmail());
        return savedUser;
    }

    public User findByEmail(String email) {
        validateEmail(email);
        logger.info("Attempting to find user with email: {}", email);
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> {
                    logger.error("User not found with email: {}", email);
                    return new RuntimeException("User not found");
                });
        logger.info("User found: {}", user.getEmail());
        return user;
    }

    public User login(String email, String password) {
        validateEmail(email);
        validatePassword(password);

        logger.info("Attempting login for email: {}", email);
        User user = findByEmail(email);

        if (!passwordEncoder.matches(password, user.getPassword())) {
            logger.error("Password mismatch for user: {}", email);
            throw new RuntimeException("Invalid password");
        }

        logger.info("Login successful for user: {}", email);
        return user;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        try {
            return findByEmail(email);
        } catch (RuntimeException e) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
    }
}