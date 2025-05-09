document.addEventListener("DOMContentLoaded", () => {
  // declaration of variables and assigning values to it
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');
  const slackDisplayName = document.querySelector(
    '[data-testid="slackDisplayName"]'
  );
  const slackEmail = document.querySelector('[data-testid="slackEmail"]');
  const profilePicture = document.querySelector(
    '[data-testid="slackProfilePicture"]'
  );

  // Function to update time and day
  function updateTimeAndDay() {
    const now = new Date();
    const utcTime =
      now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZone: "UTC",
        hour12: true,
      }) + " (UTC)";

    const dayOfWeek = now.toLocaleString("en-US", {
      weekday: "long",
      timeZone: "UTC",
    });

    currentTimeUTC.textContent = utcTime;
    currentDay.textContent = dayOfWeek;
  }

  // Function to fetch Slack information (simulated)
  function fetchSlackInfo() {
    // Simulated data fetch
    const slackData = {
      displayName: "geliettech",
      email: "julietogechi27@gmail.com",
      profilePicture:
        "https://ca.slack-edge.com/T07466B189M-U07ARKG3PC0-499960a28945-48",
    };
    slackDisplayName.textContent = slackData.displayName;
    slackEmail.textContent = slackData.email;
    profilePicture.src = slackData.profilePicture;
  }

  // Call the time function initially
  updateTimeAndDay();
  // Fetch Slack information
  fetchSlackInfo();
  // Update the time every sec
  setInterval(updateTimeAndDay, 1000);
});
