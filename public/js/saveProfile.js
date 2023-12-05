const saveProfile = async function(event) {
   event.preventDefault()
   console.log('form Submitted')
    // Capture form data
    const studentName = $("#studentName").val();
    const studentEmail = $("#studentEmail").val();
    const studentBirthDate = $("#studentBirthDate").val();
    const emergencyContact1 = $("#emergencyContact1").val();
    const emergencyPhone1 = $("#emergencyPhone1").val();
    const emergencyContact2 = $("#emergencyContact2").val();
    const emergencyPhone2 = $("#emergencyPhone2").val();
    const pickupPerson1 = $("#pickupPerson1").val();
    const pickupPerson2 = $("#pickupPerson2").val();
  
    // Create a data object to send to the server
    const postData = {
      studentName,
      studentEmail,
      studentBirthDate,
      emergencyContact1,
      emergencyPhone1,
      emergencyContact2,
      emergencyPhone2,
      pickupPerson1,
      pickupPerson2,
    };
  console.log(postData);
    // Send a POST request to the server
    const response = await fetch ( "/api/saveprofile", {
      method: "POST",
      contentType: "application/json",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" }
        
      });
      
    if(response.ok){
        console.log("sent data to back end")
    }else {
        alert (response)
    }
      

    
    
    
  
    // Display submitted data (optional)
    $("#displayName").text(studentName);
    $("#displayEmail").text(studentEmail);
    $("#displayBirthDate").text(studentBirthDate);
    $("#displayEmergency1").text(`${emergencyContact1} - ${emergencyPhone1}`);
    $("#displayEmergency2").text(`${emergencyContact2} - ${emergencyPhone2}`);
    $("#displayPickup1").text(`${pickupPerson1}`);
    $("#displayPickup2").text(`${pickupPerson2}`);
  }

  document.querySelector("#emergencyForm").addEventListener("submit", saveProfile)
  

 

  