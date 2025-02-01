```javascript
// Example of a Tailwind CSS configuration file (tailwind.config.js)
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```html
<!-- Example of an HTML file using Tailwind CSS -->
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind CSS Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <div class="bg-gray-200 p-4 rounded-lg">
  This is some text
  </div>
</body>
</html>
```
Uncommon Bug: Incorrect PurgeCSS Configuration

This bug arises when PurgeCSS, the tool that removes unused CSS from your Tailwind CSS project, is misconfigured.  This leads to unexpected styling issues, including:

* **Missing styles:** Styles that should be applied are not present.
* **Unexpected styles:** Styles that shouldn't be present remain.
* **Inconsistent styling:** Styles applied inconsistently across different parts of the app.

This commonly happens when the `content` array in your `tailwind.config.js` file does not accurately reflect the files where your Tailwind classes are used. For example, you might be missing an important directory, use an incorrect file extension, or have typos in file paths. 