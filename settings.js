// Load stored data into fields
window.onload = function() {
    const email = localStorage.getItem('userEmail');
    const password = localStorage.getItem('userPassword');
  
    // Display stored data or default to "N/A"
    const usernameDisplay = document.getElementById('username-display');
    const passwordDisplay = document.getElementById('password-display');
  
    usernameDisplay.value = email || '';
    usernameDisplay.placeholder = email ? '' : 'N/A';
    
    passwordDisplay.value = password || '';
    passwordDisplay.placeholder = password ? '' : 'N/A';
  
    // Set notification switch state
    const isNotificationEnabled = localStorage.getItem('sendDailyNotifications') === 'true';
    document.getElementById('notification-toggle').checked = isNotificationEnabled;
  
    // Set social switch state
    const isSocialEnabled = localStorage.getItem('shareWithFriends') === 'true';
    document.getElementById('social-toggle').checked = isSocialEnabled;

    // Initially set fields to read-only
    usernameDisplay.readOnly = true;
    passwordDisplay.readOnly = true;
};
  
// Toggle editing for username and password
function toggleEdit() {
    const usernameInput = document.getElementById('username-display');
    const passwordInput = document.getElementById('password-display');
    const changeButton = document.getElementById('change-btn');
  
    // Toggle the readonly state for username and password
    if (usernameInput.readOnly && passwordInput.readOnly) {
        // Enable editing
        usernameInput.readOnly = false;
        passwordInput.readOnly = false;
        usernameInput.focus();
        changeButton.textContent = 'Save'; // Change text to "Save"
    } else {
        // Save changes and disable editing
        const newUsername = usernameInput.value;
        const newPassword = passwordInput.value;
  
        // Store the new username and password in localStorage
        localStorage.setItem('userEmail', newUsername);
        localStorage.setItem('userPassword', newPassword);
  
        // Set the fields back to read-only
        usernameInput.readOnly = true;
        passwordInput.readOnly = true;
        changeButton.textContent = 'Change'; // Change text back to "Change"
    }
}
  
// Toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password-display');
    const passwordToggleBtn = document.getElementById('toggle-password');
  
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Show password
        passwordToggleBtn.textContent = '🙈'; // Change icon to "🙈"
    } else {
        passwordInput.type = 'password'; // Hide password
        passwordToggleBtn.textContent = '👁️'; // Change icon back to "👁️"
    }
}
  
// Toggle the setting for daily notifications
function toggleNotification() {
    const isChecked = document.getElementById('notification-toggle').checked;
    if (isChecked) {
        console.log("Daily notifications enabled.");
        localStorage.setItem('sendDailyNotifications', 'true');
    } else {
        console.log("Daily notifications disabled.");
        localStorage.setItem('sendDailyNotifications', 'false');
    }
}

// Toggle the setting for sharing habits with friends
function toggleSocial() {
    const isChecked = document.getElementById('social-toggle').checked;
    if (isChecked) {
        console.log("Sharing habits with friends enabled.");
        localStorage.setItem('shareWithFriends', 'true');
    } else {
        console.log("Sharing habits with friends disabled.");
        localStorage.setItem('shareWithFriends', 'false');
    }
}
