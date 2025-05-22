# EB3 Automation

Automated testing suite for EB3 application using Playwright.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Place test files in `assets` folder:
- `RATE_UPLOAD_SHEET  - test.xlsx`
- Other required test files

## Running Tests

### Run All Tests
```bash
node node_modules/@playwright/test/cli.js test --project=chromium --headed
```

### Run Specific Test Files
```bash
# Run booklet tests
node node_modules/@playwright/test/cli.js test tests/booklet.spec.js --project=chromium --headed

# Run company tests
node node_modules/@playwright/test/cli.js test tests/company.spec.js --project=chromium --headed

# Run login tests
node node_modules/@playwright/test/cli.js test tests/login.spec.js --project=chromium --headed

# Run profile tests
node node_modules/@playwright/test/cli.js test tests/profile.spec.js --project=chromium --headed
```

### Run Tests in UI Mode
```bash
npx playwright test --ui
```

### Run Tests in Debug Mode
```bash
npx playwright test --debug
```

## Test Files

- `tests/booklet.spec.js` - Booklet creation tests
- `tests/company.spec.js` - Company management tests
- `tests/login.spec.js` - Login functionality tests

## Test Structure

Each test file follows the Page Object Model pattern:
- `pages/` - Contains page objects with methods for interacting with the application
- `locators/` - Contains element locators for each page
- `tests/` - Contains test specifications

## Test Data

Test data is managed within each test file. Make sure to update the following before running tests:
- Login credentials in `login.spec.js`
- Company data in `company.spec.js`
- Booklet data in `booklet.spec.js`

## Common Issues and Solutions

1. **Timeout Issues**
   - Increase timeout in test files using `test.setTimeout(80000)`
   - Check network connectivity
   - Verify application is accessible

2. **Element Not Found**
   - Verify locators are correct
   - Check if element is visible/clickable
   - Add appropriate waits

## Best Practices

1. Always run tests in headed mode during development
2. Use UI mode for debugging
3. Keep test data up to date
4. Add appropriate waits for network requests
5. Handle dynamic elements properly

## Contributing

1. Follow the existing code structure
2. Add appropriate comments
3. Update README.md for new features
4. Test changes thoroughly

## Support

For any issues or questions, please contact the development team. 