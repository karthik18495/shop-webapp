# Branch Protection Setup Guide

This repository includes automated branch protection rules through GitHub Actions. To fully secure the main branch, repository owners should also configure GitHub's branch protection settings.

## Automated Protection (Already Implemented)

The repository now includes:

1. **GitHub Actions Workflows** (`.github/workflows/`)
   - `branch-protection.yml`: Validates that only authorized users can push to main
   - `ci.yml`: Runs code quality checks on all pushes and pull requests

2. **CODEOWNERS File** (`.github/CODEOWNERS`)
   - Requires code review from repository owner before merging
   - Applies to all files in the repository

## Additional GitHub Settings (Repository Owner Action Required)

To complete the branch protection setup, repository owners should configure these settings in GitHub:

### 1. Enable Branch Protection Rules

Go to **Settings** > **Branches** > **Add rule** for the `main` branch:

- ✅ **Require a pull request before merging**
  - ✅ Require approvals: 1 (minimum)
  - ✅ Dismiss stale PR approvals when new commits are pushed
  - ✅ Require review from CODEOWNERS

- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - Select status checks:
    - ✅ `code-quality`
    - ✅ `accessibility-check`
    - ✅ `check-authorization` (for direct pushes)
    - ✅ `validate-changes`

- ✅ **Require conversation resolution before merging**

- ✅ **Restrict pushes that create files**
  - ✅ Only allow repository owners and users with bypass permissions

- ✅ **Do not allow bypassing the above settings**
  - Only check this if you want to prevent even owners from bypassing rules

### 2. Configure Repository Settings

Go to **Settings** > **General**:

- ✅ **Allow merge commits**: Disabled (optional, for cleaner history)
- ✅ **Allow squash merging**: Enabled
- ✅ **Allow rebase merging**: Enabled (optional)
- ✅ **Automatically delete head branches**: Enabled

### 3. Configure Collaboration Settings

Go to **Settings** > **Manage access**:

- Add collaborators with appropriate permissions:
  - **Read**: For users who should only view code
  - **Write**: For trusted contributors (they can push to branches but not main)
  - **Admin**: For co-owners who need full access

### 4. Security Settings

Go to **Settings** > **Security**:

- ✅ Enable **Dependency graph**
- ✅ Enable **Dependabot alerts**
- ✅ Enable **Dependabot security updates**
- ✅ Enable **Secret scanning**

## How It Works

1. **Direct Push Protection**: The `branch-protection.yml` workflow prevents unauthorized direct pushes to main
2. **Code Quality Gates**: The `ci.yml` workflow ensures all code meets quality standards
3. **Review Requirements**: CODEOWNERS ensures the repository owner reviews all changes
4. **GitHub UI Protection**: Additional settings provide UI-level protection

## For Contributors

To contribute to this repository:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Ensure all checks pass locally
5. Submit a pull request to the main branch
6. Wait for review and approval from the repository owner

## Testing the Protection

You can test the protection by:

1. Creating a test branch
2. Making changes
3. Submitting a pull request
4. Verifying that all checks run and pass
5. Confirming that owner approval is required before merging

## Troubleshooting

If workflows fail:

1. Check the Actions tab for detailed error messages
2. Ensure your code passes all validation checks
3. Verify that all required files are present
4. Contact the repository owner if you believe there's an issue

## Customization

Repository owners can customize the protection rules by:

1. Editing `.github/workflows/branch-protection.yml` to modify authorization logic
2. Updating `.github/CODEOWNERS` to change review requirements
3. Modifying `.github/workflows/ci.yml` to add or remove quality checks
4. Adjusting GitHub branch protection settings as needed