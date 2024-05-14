const { exec } = require('child_process');

// Execute bluetoothctl command to scan for nearby devices
exec('bluetoothctl scan on', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }
  
  console.log(`Scan output: ${stdout}`);
  console.error(`Scan errors: ${stderr}`);
});