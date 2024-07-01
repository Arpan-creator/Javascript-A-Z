// Data storage using Local Storage
let users = []; // Array to store user data
let appointments = []; // Array to store appointment data
let currentUser = null; // Variable to track the current logged-in user

// Simulated data for doctors and appointment slots
const doctors = [
    { id: 1, name: 'Dr. Abdul' },
    { id: 2, name: 'Dr. Ritesh' },
    { id: 3, name: 'Dr. Ranjan' }
];

const appointmentTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM'
];

// Function to initialize the application
function init() {
    // Check if there are users and appointments in local storage
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
    }
    if (localStorage.getItem('appointments')) {
        appointments = JSON.parse(localStorage.getItem('appointments'));
    }

    // Check if there's a logged-in user session
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
        currentUser = JSON.parse(loggedInUser);
        showLoggedInUI();
        showAppointments();
    } else {
        showLoggedOutUI();
    }

    // Add event listeners for login and signup forms
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', loginUser);

    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', signupUser);

    // Add event listener for booking appointments
    const submitAppointment = document.getElementById('submitAppointment');
    submitAppointment.addEventListener('click', bookAppointment);

    // Add event listeners for switching between login and signup forms
    document.getElementById('signupLink').addEventListener('click', showSignupForm);
    document.getElementById('loginLink').addEventListener('click', showLoginForm);

    // Show available doctors for booking (only after login)
    if (currentUser) {
        showDoctors();
    }
}

// Function to show available doctors for booking
function showDoctors() {
    const doctorList = document.getElementById('doctorList');
    doctorList.innerHTML = '<label for="doctorSelect">Select a Doctor:</label>';
    const select = document.createElement('select');
    select.id = 'doctorSelect';
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = doctor.name;
        select.appendChild(option);
    });
    doctorList.appendChild(select);

    // Show appointment slots for the first doctor by default
    select.addEventListener('change', function() {
        showAppointmentSlots(select.value);
    });
    showAppointmentSlots(doctors[0].id);
}

// Function to show appointment slots for a selected doctor
function showAppointmentSlots(doctorId) {
    const appointmentSlots = document.getElementById('appointmentSlots');
    appointmentSlots.innerHTML = '<label for="timeSelect">Select an Appointment Time:</label>';
    const select = document.createElement('select');
    select.id = 'timeSelect';
    appointmentTimes.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        select.appendChild(option);
    });
    appointmentSlots.appendChild(select);
}

// Function to handle booking an appointment
function bookAppointment(event) {
    event.preventDefault();
    const doctorSelect = document.getElementById('doctorSelect');
    const timeSelect = document.getElementById('timeSelect');

    const doctorId = parseInt(doctorSelect.value);
    const appointmentTime = timeSelect.value;

    // Check if the appointment slot is available
    if (isSlotAvailable(doctorId, appointmentTime)) {
        // Create a new appointment object
        const appointment = {
            id: generateAppointmentId(),
            doctorId: doctorId,
            time: appointmentTime,
            patientId: currentUser.email // Store patient email for identification
        };

        // Add appointment to the array and update local storage
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Show success message and update appointments
        alert('Appointment booked successfully!');
        showAppointments();
    } else {
        alert('Selected slot is already booked. Please choose another slot.');
    }
}

// Function to check if an appointment slot is available
function isSlotAvailable(doctorId, time) {
    return !appointments.some(appointment => appointment.doctorId === doctorId && appointment.time === time);
}

// Function to generate a unique appointment ID
function generateAppointmentId() {
    return Date.now() + Math.floor(Math.random() * 10000); // Basic random ID generation for demo purposes
}

// Function to show appointments for the logged-in user
function showAppointments() {
    const myAppointments = document.getElementById('myAppointments');
    myAppointments.innerHTML = '<h3>My Appointments:</h3>';

    const userAppointments = appointments.filter(appointment => appointment.patientId === currentUser.email);

    if (userAppointments.length === 0) {
        myAppointments.innerHTML += '<p>No appointments booked.</p>';
    } else {
        userAppointments.forEach(appointment => {
            const appointmentInfo = document.createElement('div');
            appointmentInfo.innerHTML = `
                ${getDoctorNameById(appointment.doctorId)} - ${appointment.time}
                <button class="btn" onclick="rescheduleAppointment(${appointment.id})">Reschedule</button>
                <button class="btn" onclick="cancelAppointment(${appointment.id})">Cancel</button>
            `;
            myAppointments.appendChild(appointmentInfo);
        });
    }
}

// Function to reschedule an appointment
function rescheduleAppointment(appointmentId) {
    const appointment = appointments.find(app => app.id === appointmentId);
    if (appointment) {
        // Show available slots again to reschedule
        showDoctors();
        showAppointmentSlots(appointment.doctorId);

        const submitAppointment = document.getElementById('submitAppointment');
        submitAppointment.textContent = 'Reschedule Appointment';
        submitAppointment.removeEventListener('click', bookAppointment);
        submitAppointment.addEventListener('click', function() {
            bookRescheduledAppointment(appointmentId);
        });
    }
}

// Function to book a rescheduled appointment
function bookRescheduledAppointment(appointmentId) {
    const doctorSelect = document.getElementById('doctorSelect');
    const timeSelect = document.getElementById('timeSelect');

    const doctorId = parseInt(doctorSelect.value);
    const appointmentTime = timeSelect.value;

    if (isSlotAvailable(doctorId, appointmentTime)) {
        const appointmentIndex = appointments.findIndex(app => app.id === appointmentId);
        if (appointmentIndex !== -1) {
            appointments[appointmentIndex].doctorId = doctorId;
            appointments[appointmentIndex].time = appointmentTime;
            localStorage.setItem('appointments', JSON.stringify(appointments));

            alert('Appointment rescheduled successfully!');
            showAppointments();

            // Reset submit button text and event listener
            const submitAppointment = document.getElementById('submitAppointment');
            submitAppointment.textContent = 'Book Appointment';
            submitAppointment.removeEventListener('click', bookRescheduledAppointment);
            submitAppointment.addEventListener('click', bookAppointment);
        }
    } else {
        alert('Selected slot is already booked. Please choose another slot.');
    }
}

// Function to cancel an appointment
function cancelAppointment(appointmentId) {
    appointments = appointments.filter(app => app.id !== appointmentId);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    alert('Appointment canceled successfully!');
    showAppointments();
}

// Function to get doctor's name by ID
function getDoctorNameById(doctorId) {
    const doctor = doctors.find(doctor => doctor.id === doctorId);
    return doctor ? doctor.name : 'Unknown Doctor';
}

// Function to log in a user
function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showLoggedInUI();
        showAppointments();
        showDoctors(); // Show doctors after successful login
    } else {
        const loginErrorMsg = document.getElementById('loginErrorMsg');
        loginErrorMsg.textContent = 'Invalid email or password. Please try again.';
    }
}

// Function to sign up a new user
function signupUser(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const registerEmail = document.getElementById('registerEmail').value;
    const registerPassword = document.getElementById('registerPassword').value;

    // Check if the email is already registered
    const existingUser = users.find(user => user.email === registerEmail);
    if (existingUser) {
        const signupErrorMsg = document.getElementById('signupErrorMsg');
        signupErrorMsg.textContent = 'Email already registered. Please use a different email.';
        return;
    }

    // Create new user object
    const newUser = {
        fullName: fullName,
        email: registerEmail,
        password: registerPassword,
        role: 'Patient' // Default role for all users
    };

    // Add new user to the array
    users.push(newUser);

    // Update local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Automatically log in the new user
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Clear sign-up form
    document.getElementById('signupForm').reset();

    // Show logged-in UI and appointments section
    showLoggedInUI();
    showAppointments();
    showDoctors(); // Show doctors after successful signup

    // Show success message (optional)
    alert('Sign up successful! Logged in as ' + currentUser.email);
}

// Function to show UI for logged-in state
function showLoggedInUI() {
    document.getElementById('authForms').style.display = '';
    document.getElementById('bookingAndAppointments').style.display = 'block';
}

// Function to show UI for logged-out state
function showLoggedOutUI() {
    document.getElementById('authForms').style.display = 'block';
    document.getElementById('bookingAndAppointments').style.display = 'none';
}

// Function to show signup form
function showSignupForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

// Function to show login form
function showLoginForm() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Initialize the application
init();
