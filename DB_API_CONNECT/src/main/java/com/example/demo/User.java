package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// The class is marked as an entity
@Entity
// Table with name 'users' is created in database
@Table(name = "users")
public class User {
    // Primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment of primary key
    private Long id;
    private String name;
    private int age;

    // Constructor needed for JPA
    public User() {}

    // Defining constructor
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}
