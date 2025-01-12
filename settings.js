// settings.js

// Load stored data into fields
window.onload = function() {
    const email = localStorage.getItem('userEmail');
    const password = localStorage.getItem('userPassword');
  
    // Display stored data or default to "N/A"
    document.getElementById('username-display').value = email || '';
    document.getElementById('username-display').placeholder = email ? '' : 'N/A';
    
    document.getElementById('password-display').value = password || '';
    document.getElementById('password-display').placeholder = password ? '' : 'N/A';
  
    // Set notification switch state
    const isEnabled = localStorage.getItem('sendDailyNotifications') === 'true';
    document.getElementById('notification-toggle').checked = isEnabled;
  };
  
  // Toggle editing for username and password
  function toggleEdit() {
    const usernameInput = document.getElementById('username-display');
    const passwordInput = document.getElementById('password-display');
    const changeButton = document.getElementById('change-btn');
  
    // Toggle the readonly state for username and password
    if (usernameInput.readOnly && passwordInput.readOnly) {
      usernameInput.readOnly = false;
      passwordInput.readOnly = false;
      usernameInput.focus();
      changeButton.textContent = 'Save';
    } else {
      // Save changes and disable editing
      const newUsername = usernameInput.value;
      const newPassword = passwordInput.value;
  
      localStorage.setItem('userEmail', newUsername);
      localStorage.setItem('userPassword', newPassword);
  
      usernameInput.readOnly = true;
      passwordInput.readOnly = true;
      changeButton.textContent = 'Change';
    }
  }
  
  // Toggle password visibility
  function togglePassword() {
    const passwordInput = document.getElementById('password-display');
    const passwordToggleBtn = document.getElementById('toggle-password');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'; // Show password
      passwordToggleBtn.textContent = '🙈'; // Change icon
    } else {
      passwordInput.type = 'password'; // Hide password
      passwordToggleBtn.textContent = '👁️'; // Change icon back
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
  