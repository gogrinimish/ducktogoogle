// Function to check if we should show the page action
function checkAndShowPageAction(tab) {
  if (tab.url && tab.url.startsWith('https://duckduckgo.com/')) {
    browser.pageAction.show(tab.id);
  } else {
    browser.pageAction.hide(tab.id);
  }
}

// Show the page action when the page is loaded or updated
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    checkAndShowPageAction(tab);
  }
});

// Show the page action when switching to a tab
browser.tabs.onActivated.addListener((activeInfo) => {
  browser.tabs.get(activeInfo.tabId).then(checkAndShowPageAction);
});

// Handle clicks on the page action
browser.pageAction.onClicked.addListener((tab) => {
  if (tab.url.startsWith('https://duckduckgo.com/')) {
    // Extract the search query from the DuckDuckGo URL
    const url = new URL(tab.url);
    const searchQuery = url.searchParams.get('q');
    
    if (searchQuery) {
      // Create the Google search URL
      const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      
      // Update the current tab with the Google search URL
      browser.tabs.update(tab.id, {
        url: googleUrl
      });
    }
  }
}); 