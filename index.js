function changeTab(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Get the tab's ID
        const tabId = event.target.id.replace('tab-', '');

        // Get all the content sections
        const tabContents = document.querySelectorAll('.flex-wrap');

        // Loop through the contents
        tabContents.forEach(content => {
            if (content.id === tabId) {
                // If the tab ID matches, add the active-content class
                content.classList.add('active-content');
                content.classList.remove('hidden'); // Ensure it is visible
            } else if (content.classList.contains('active-content')) {
                // If it has the active-content class, hide it
                content.classList.remove('active-content');
                content.classList.add('hidden');
            }
        });

        // Remove active class from all tabs and add to the clicked tab
        const tabs = document.querySelectorAll('.tab-link');
        tabs.forEach(tab => {
            tab.classList.remove('bg-red-700');
            tab.classList.add('bg-gray-700');
        });
        event.target.classList.add('bg-red-700');
    }
