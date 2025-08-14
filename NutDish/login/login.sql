-- Create database
CREATE DATABASE IF NOT EXISTS restaurantApp;

-- Use the created database
USE restaurantApp;

-- Create user table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    dob DATE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'restaurant') DEFAULT 'user'
);

-- Create restaurant table (optional if you want to store additional details)
CREATE TABLE IF NOT EXISTS restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    dob DATE NOT NULL,
    password VARCHAR(255) NOT NULL
);
