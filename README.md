swapr-client
============

The SWAPR front-end thin client.

## Installation

Note: this guide is a rough draft, and may not be complete.

First, make sure you have NodeJS and NPM installed before you continue with installation.
You will also need to have the Grunt CLI installed (please see http://gruntjs.com/getting-started)

1. Clone this repository onto your file system.
2. `cd` into the project directory.
3. Open your terminal and execute these commands:

```
npm install
bower install
grunt dev
```

4. Open the resulting index.html file within the `dist` folder in your favorite browser.

You're done!

Note: In the near future we will use the live reload grunt task to auto-serve and update pages. For now though, try using Python's localhost server or using the one Webstorm provides.

## Conventions

### JavaScript
Use single quotes for strings.
Example:

```javascript
var a = 'hello there!';
```