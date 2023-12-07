function joinClass() {
  const classCode = document.getElementById('classCode').value.trim();

  // Send the class code to the server
  fetch('/api/joinClass', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ classCode }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Successfully joined the class!');
      // Redirect or perform other actions as needed
    } else {
      alert('Failed to join the class. Please check the code and try again.');
    }
  })
  .catch(error => {
    console.error('Error joining class:', error);
    alert('An unexpected error occurred. Please try again later.');
  });
}

  