# Tailwind CSS PurgeCSS Misconfiguration Bug

This repository demonstrates a common but often tricky-to-diagnose bug in Tailwind CSS: incorrect configuration of PurgeCSS.  This results in missing or unexpected styling in your application.

## The Bug

The issue arises when the `content` array within your `tailwind.config.js` file is improperly specified, causing PurgeCSS to either remove necessary styles or fail to remove unused ones.

This can manifest in several ways:

* Styles that should be applied are missing.
* Unexpected styles remain, bloating your CSS bundle.
* Inconsistent styling across different components.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Observe the styling issues in `index.html`.

## Solution

The solution is to ensure the `content` array in `tailwind.config.js` correctly points to all files where Tailwind classes are used.  Pay close attention to file paths, extensions, and the inclusion of all relevant directories. 