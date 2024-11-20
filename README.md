# End-to-end (E2E) Tests

## Introduction:

End-to-end.
[Playwright](https://playwright.dev/) as the test runner, powered by the Chrome browser (stable channel).

## Architecture:

- `pages` - Page objects expose atomic actions that can be perform on a specific page by interacting with the DOM. Each page also exposes locators to objects that are interacted with on that specific page.

- `steps` - Step objects expose methods that perform a series of actions that perform a certain activity.

- `tests` - This directory contains all the test files for the project.

## Viewing results

Test runs are logged both as videos and traces in the `test-results` folder.

# Manual task

- `manual-test-cases.txt` contains the P0 test cases for the login flow in a structured format.