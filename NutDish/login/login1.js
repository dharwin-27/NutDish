const signinbtn = document.querySelector('.signinbtn');
const signupbtn = document.querySelector('.signupbtn');
const formbx = document.querySelector('.formbx');
const body = document.querySelector('body');

const userSignupForm = document.querySelector('.signinform form');
const restaurantSignupForm = document.querySelector('.signupform form');

signupbtn.onclick = function () {
    formbx.classList.add('active');
    body.classList.add('active');
}

signinbtn.onclick = function () {
    formbx.classList.remove('active');
    body.classList.remove('active');
}

// Handle user sign-up form submission
userSignupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const userName = userSignupForm.querySelector('input[type="text"][placeholder="Enter Your Name"]').value;
    const userEmail = userSignupForm.querySelector('input[type="text"][placeholder="Email"]').value;
    const userDob = userSignupForm.querySelector('input[type="date"]').value;
    const userPassword = userSignupForm.querySelector('input[type="password"][placeholder="Password"]').value;
    const userConfirmPassword = userSignupForm.querySelector('input[type="password"][placeholder="Confirm password"]').value;

    if (userPassword !== userConfirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const userData = {
        name: userName,
        email: userEmail,
        dob: userDob,
        password: userPassword
    };

    // Send data to the backend (replace 'your-api-url' with the actual URL of your backend API)
    fetch('your-api-url/user-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Sign up successful!');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert(data.message || 'Something went wrong!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error during sign-up. Please try again.');
    });
});

// Handle restaurant sign-up form submission
restaurantSignupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const restaurantName = restaurantSignupForm.querySelector('input[type="text"][placeholder="Enter Your Name"]').value;
    const restaurantEmail = restaurantSignupForm.querySelector('input[type="text"][placeholder="Email"]').value;
    const restaurantDob = restaurantSignupForm.querySelector('input[type="date"]').value;
    const restaurantPassword = restaurantSignupForm.querySelector('input[type="password"][placeholder="Password"]').value;
    const restaurantConfirmPassword = restaurantSignupForm.querySelector('input[type="password"][placeholder="Confirm password"]').value;

    if (restaurantPassword !== restaurantConfirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const restaurantData = {
        name: restaurantName,
        email: restaurantEmail,
        dob: restaurantDob,
        password: restaurantPassword
    };

    // Send data to the backend (replace 'your-api-url' with the actual URL of your backend API)
    fetch('your-api-url/restaurant-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurantData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Restaurant sign up successful!');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert(data.message || 'Something went wrong!');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error during sign-up. Please try again.');
    });
});
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Body parser middleware to parse JSON data
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // change to your MySQL username
  password: '', // change to your MySQL password
  database: 'restaurantApp'
});

db.connect(err => {
  if (err) {
    console.error('Could not connect to database:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

// User sign-up API
app.post('/user-signup', (req, res) => {
  const { name, email, dob, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error hashing password' });
    }

    // Insert user data into the database
    const query = 'INSERT INTO users (name, email, dob, password) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, dob, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Database error: ' + err.message });
      }
      res.status(200).json({ success: true, message: 'User registered successfully' });
    });
  });
});

// Restaurant sign-up API
app.post('/restaurant-signup', (req, res) => {
  const { name, email, dob, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error hashing password' });
    }

    // Insert restaurant data into the database
    const query = 'INSERT INTO restaurants (name, email, dob, password) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, dob, hashedPassword], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Database error: ' + err.message });
      }
      res.status(200).json({ success: true, message: 'Restaurant registered successfully' });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
