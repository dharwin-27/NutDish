function toggleSetting(setting) {
    const checkbox = document.getElementById(setting);
    console.log(`${setting} is now ${checkbox.checked ? 'enabled' : 'disabled'}`);
}

function saveSettings() {
    const notifications = document.getElementById('notifications').checked;
    const darkMode = document.getElementById('dark-mode').checked;
    const sound = document.getElementById('sound').checked;

    alert(`Settings saved:\nNotifications: ${notifications}\nDark Mode: ${darkMode}\nSound: ${sound}`);
}
