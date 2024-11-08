document.addEventListener('DOMContentLoaded', function () {
  const regionButton = document.getElementById('region-button');
  const backButton = document.getElementById('back-button');
  const regionSelect = document.getElementById('display-settings-region');
  const currencySelect = document.getElementById('display-settings-currency');
  const saveButton = document.getElementById('display-settings-save-btn');
  const toastNotification = document.getElementById('toast-notification');

  // Function to update the region button
  function updateRegionButton() {
      const selectedOption = regionSelect.options[regionSelect.selectedIndex];
      const flag = selectedOption.getAttribute('data-flag');
      regionButton.innerHTML = `${flag} ${selectedOption.text}`;
  }

  // Update currency based on region selection
  regionSelect.addEventListener('change', function () {
      const selectedOption = regionSelect.options[regionSelect.selectedIndex];
      const currency = selectedOption.getAttribute('data-currency');
      currencySelect.value = currency;
      updateRegionButton();
  });

  // Save button click event
  saveButton.addEventListener('click', function () {
      showToast();
      setTimeout(() => {
          window.history.back();
      }, 1500);
  });

  // Function to show toast notification
  function showToast() {
      toastNotification.style.display = 'block';
      setTimeout(() => {
          toastNotification.style.display = 'none';
      }, 1000);
  }
  backButton.addEventListener('click', function() {
    window.history.back();
  });
  // Initialize region button on load
  updateRegionButton();
});
