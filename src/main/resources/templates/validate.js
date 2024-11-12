document.addEventListener("DOMContentLoaded", function() {

    // Function to display an alert with a custom message
    function showAlert(message, type = "warning") {
        const alertBox = document.createElement("div");
        alertBox.classList.add("bg-" + (type === "warning" ? "yellow" : "red") + "-500", "text-white", "p-4", "rounded-lg", "mb-4", "max-w-lg", "mx-auto");
        alertBox.textContent = message;
        document.body.prepend(alertBox);  // Add the alert to the top of the page
    }

    // Add Flight Form Validation
    const addFlightForm = document.querySelector("#flight-form");  // Adjust the selector to your actual form ID
    if (addFlightForm) {
        addFlightForm.addEventListener("submit", function(event) {
            let valid = true;
            let errorMessage = "";

            const flightNumber = document.querySelector("#flight-number").value;
            const scheduledDeparture = document.querySelector("#scheduled-departure").value;
            const scheduledArrival = document.querySelector("#scheduled-arrival").value;
            const departureAirport = document.querySelector("#departure-airport").value;
            const arrivalAirport = document.querySelector("#arrival-airport").value;

            // Validate Flight Number (Required, format check: alphanumeric, length 5-10)
            if (!flightNumber) {
                valid = false;
                errorMessage += "Flight Number is required.\n";
            } else if (!/^[A-Za-z0-9]{5,10}$/.test(flightNumber)) {
                valid = false;
                errorMessage += "Flight Number must be alphanumeric and between 5 to 10 characters.\n";
            }

            // Validate Scheduled Departure (Required and valid date format)
            if (!scheduledDeparture) {
                valid = false;
                errorMessage += "Scheduled Departure is required.\n";
            } else if (!isValidDate(scheduledDeparture)) {
                valid = false;
                errorMessage += "Scheduled Departure must be a valid date (YYYY-MM-DD).\n";
            }

            // Validate Scheduled Arrival (Required and valid date format)
            if (!scheduledArrival) {
                valid = false;
                errorMessage += "Scheduled Arrival is required.\n";
            } else if (!isValidDate(scheduledArrival)) {
                valid = false;
                errorMessage += "Scheduled Arrival must be a valid date (YYYY-MM-DD).\n";
            }

            // Validate Departure Airport (Required)
            if (!departureAirport) {
                valid = false;
                errorMessage += "Departure Airport is required.\n";
            }

            // Validate Arrival Airport (Required)
            if (!arrivalAirport) {
                valid = false;
                errorMessage += "Arrival Airport is required.\n";
            }

            // If any validation fails, prevent form submission and show error messages
            if (!valid) {
                event.preventDefault();  // Prevent form submission
                showAlert(errorMessage, "warning");
            }
        });
    }

    // Edit Flight Form Validation
    const editFlightForm = document.querySelector("#edit-flight-form");  // Adjust the selector to your actual form ID
    if (editFlightForm) {
        editFlightForm.addEventListener("submit", function(event) {
            let valid = true;
            let errorMessage = "";

            const flightNumber = document.querySelector("#edit-flight-number").value;
            const scheduledDeparture = document.querySelector("#edit-scheduled-departure").value;
            const scheduledArrival = document.querySelector("#edit-scheduled-arrival").value;

            // Validate Flight Number (Required, format check: alphanumeric, length 5-10)
            if (!flightNumber) {
                valid = false;
                errorMessage += "Flight Number is required.\n";
            } else if (!/^[A-Za-z0-9]{5,10}$/.test(flightNumber)) {
                valid = false;
                errorMessage += "Flight Number must be alphanumeric and between 5 to 10 characters.\n";
            }

            // Validate Scheduled Departure (Required and valid date format)
            if (!scheduledDeparture) {
                valid = false;
                errorMessage += "Scheduled Departure is required.\n";
            } else if (!isValidDate(scheduledDeparture)) {
                valid = false;
                errorMessage += "Scheduled Departure must be a valid date (YYYY-MM-DD).\n";
            }

            // Validate Scheduled Arrival (Required and valid date format)
            if (!scheduledArrival) {
                valid = false;
                errorMessage += "Scheduled Arrival is required.\n";
            } else if (!isValidDate(scheduledArrival)) {
                valid = false;
                errorMessage += "Scheduled Arrival must be a valid date (YYYY-MM-DD).\n";
            }

            // If any validation fails, prevent form submission and show error messages
            if (!valid) {
                event.preventDefault();  // Prevent form submission
                showAlert(errorMessage, "warning");
            }
        });
    }

    // Helper function to check if a string is a valid date (YYYY-MM-DD)
    function isValidDate(dateString) {
        const regex = /^\d{4}-\d{2}-\d{2}$/; // Format: YYYY-MM-DD
        if (!regex.test(dateString)) return false;

        const date = new Date(dateString);
        const [year, month, day] = dateString.split("-");
        return date.getFullYear() === parseInt(year, 10) &&
            date.getMonth() + 1 === parseInt(month, 10) &&
            date.getDate() === parseInt(day, 10);
    }

});
