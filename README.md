# Shop WebApp

A simple web application for product lookup and inventory management.

## Features

- Product lookup by code
- Product display with images and pricing
- Mark items as sold functionality
- Local storage for transaction records

## Branch Protection

This repository implements comprehensive branch protection rules to ensure code quality and security:

- **Automated CI/CD**: All code changes are validated through GitHub Actions
- **Code Review Requirements**: All changes require approval from repository owners
- **Quality Gates**: HTML, JavaScript, and JSON validation
- **Security Checks**: Basic security issue detection
- **Accessibility Validation**: Basic accessibility compliance checks

### For Repository Owners

See [`.github/BRANCH_PROTECTION.md`](.github/BRANCH_PROTECTION.md) for detailed setup instructions.

### For Contributors

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all checks pass
5. Submit a pull request

## Usage

1. Open `index.html` in a web browser
2. Enter a product code (e.g., "A123" or "B456")
3. Click "Lookup" to view product details
4. Click "Mark as Sold" to record a transaction

## File Structure

```
├── index.html          # Main application interface
├── app.js             # Application logic
├── products.json      # Product database
├── images/            # Product images
├── .github/           # GitHub configuration
│   ├── workflows/     # GitHub Actions workflows
│   ├── CODEOWNERS     # Code review requirements
│   └── BRANCH_PROTECTION.md  # Setup guide
└── README.md          # This file
```

## Development

The application uses vanilla HTML, CSS, and JavaScript with no external dependencies.

All changes are automatically validated for:
- HTML structure and syntax
- JavaScript syntax
- JSON format validation
- Basic security issues
- Accessibility compliance

## Security

- Branch protection prevents unauthorized changes to main branch
- Code review requirements ensure quality control
- Automated security scanning for common issues
- No external dependencies to minimize attack surface