package com.comtrack.controller;

import com.comtrack.entity.Role;
import com.comtrack.entity.User;
import com.comtrack.service.UserService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/admin")

public class AdminController {

    private final UserService userService;

    public AdminController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }


    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }


    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }


    @PutMapping("/users/{id}")
    public User updateUser(
            @PathVariable Long id,
            @RequestBody User user) {

        return userService.updateUser(id, user);
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    //getting all commercials

    @GetMapping("/commercials")
    public List<User> getCommercials() {
        return userService.getUsersByRole(Role.COMMERCIAL);
    }

    //getting all admins


    @GetMapping("/admins")
    public List<User> getAdmins() {
        return userService.getUsersByRole(Role.ADMIN);
    }
}