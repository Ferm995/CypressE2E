# CypressE2E

# Cypress Automation Framework

This project is an end-to-end testing framework built with [Cypress](https://www.cypress.io/) for automated UI testing. It includes a structured project layout, CI/CD integration with GitHub Actions, and HTML reporting.

---

## 📁 Project Structure
── e2e/ # Cypress test specs (organized by features) 
── fixtures/ # Test data files in JSON format 
── pages/ # Page Object Model (POM) classes for UI elements 
── reports/ # Generated HTML reports 
── .github/ # GitHub Actions workflows for CI/CD 
── cypress.config.js # Cypress configuration 
── package.json # Project dependencies and scripts

# 🚀 Getting Started

# 1. 📦 Install Dependencies

npm install
# 2. Run tests locally
npx cypress open
to run headless mode: npx cypress run

# 3. Test Structure
- e2e/: Stores test cases (.cy.js or .cy.ts files) for various features.
- fixtures/: Stores static test data (e.g., user.json, config.json).
- pages/: Implements the Page Object Model to encapsulate UI elements and actions.

# 4. Test Reports
After running tests, HTML reports are generated in the /reports/ directory using tools like Mochawesome (or whichever tool you want to configured).

# 5. Continuous Integration (CI)
GitHub Actions are configured in the .github/workflows/ directory. These workflows automatically run tests on every push or pull request.

Example workflow snippet:
name: Cypress Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Dependencies
        run: npm install
      - name: Run Cypress Tests
        run: npx cypress run

# 6. Scripts
npm run test: Run tests in headless mode.
npm run cypress:open: Launch Cypress test runner.
npm run report: Generate test reports (if configured).

# 7. Useful resources

https://docs.github.com/en/actions
https://github.com/adamgruber/mochawesome
https://docs.cypress.io/app/get-started/why-cypress

# 8. Author
Maintained by QA Team
Feel free to contribute or raise issues!