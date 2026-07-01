const statusCard = document.getElementById('statusCard');

async function fetchStatus() {
  try {
    const response = await fetch('/api/status');
    const data = await response.json();
    statusCard.innerHTML = `
      <p class="status-label">${data.status === 'alive' ? 'All systems go' : 'Offline'}</p>
      <p>Message: ${data.message}</p>
      <p>Time: ${new Date(data.timestamp).toLocaleTimeString()}</p>
    `;
  } catch (error) {
    statusCard.innerHTML = `
      <p class="status-label">Unable to reach backend</p>
      <p>Please check your container or server.</p>
    `;
  }
}

fetchStatus();
