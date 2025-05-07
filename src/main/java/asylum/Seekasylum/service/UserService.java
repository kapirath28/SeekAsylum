package asylum.Seekasylum.service;

import asylum.Seekasylum.dto.UserRegistrationDto;
import asylum.Seekasylum.model.User;
import asylum.Seekasylum.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public User registerUser(UserRegistrationDto registrationDto) {
        if (userRepository.existsByEmail(registrationDto.getEmail())) {
            logger.error("Registration failed: Email {} already exists", registrationDto.getEmail());
            throw new RuntimeException("Email already exists");
        }

        User user = new User();
        user.setFirstName(registrationDto.getFirstName());
        user.setLastName(registrationDto.getLastName());
        user.setEmail(registrationDto.getEmail());
        user.setPassword(registrationDto.getPassword());
        user.setCountryOfOrigin(registrationDto.getCountryOfOrigin());
        user.setCurrentLocation(registrationDto.getCurrentLocation());
        user.setAsylumStatus("PENDING");

        User savedUser = userRepository.save(user);
        logger.info("User registered successfully: {}", savedUser.getEmail());
        return savedUser;
    }

    public User findByEmail(String email) {
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
        logger.info("Attempting login for email: {}", email);
        User user = findByEmail(email);

        logger.info("Stored password: {}", user.getPassword());
        logger.info("Provided password: {}", password);

        if (user.getPassword().equals(password)) {
            logger.info("Password match successful for user: {}", email);
            return user;
        }

        logger.error("Password mismatch for user: {}", email);
        throw new RuntimeException("Invalid password");
    }
}