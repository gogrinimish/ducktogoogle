# Duck to Google

A Firefox browser extension that allows you to quickly switch from DuckDuckGo search results to Google search results.

## Features

- Shows up as an icon in the address bar when you're on DuckDuckGo
- One-click transfer of your search query from DuckDuckGo to Google
- Preserves your original search query
- Works with back/forward navigation

## Installation

### From Firefox Add-ons Store
1. Visit the [Firefox Add-ons Store](https://addons.mozilla.org/firefox/addon/duck-to-google/)
2. Click "Add to Firefox"

### Manual Installation (Development)
1. Download or clone this repository
2. Open Firefox and go to `about:debugging`
3. Click "This Firefox" on the left sidebar
4. Click "Load Temporary Add-on"
5. Navigate to the extension directory and select the `manifest.json` file

## Usage

1. Perform a search on DuckDuckGo
2. If you're not satisfied with the results, click the "G" icon in your address bar
3. The extension will automatically transfer your search to Google

## Development

This extension is built using the WebExtensions API and requires no build process. The main components are:

- `manifest.json`: Extension configuration
- `background.js`: Handles the URL transformation
- `icons/`: Contains the extension icons


## Privacy

This extension:
- Only runs on DuckDuckGo search pages
- Does not collect any user data
- Does not track user behavior
- Only modifies the URL when explicitly clicked

## License

MIT License - See [LICENSE](LICENSE) file for details 