#!/bin/bash

# Script to setup gh-pages branch for GitHub Pages deployment
# Usage: bash scripts/setup-gh-pages.sh

set -e

echo "🚀 Setting up gh-pages branch for GitHub Pages..."

# Check if git is initialized
if [ ! -d .git ]; then
  echo "❌ Not a git repository. Run 'git init' first."
  exit 1
fi

# Get the current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Check if gh-pages branch already exists
if git rev-parse --verify gh-pages >/dev/null 2>&1; then
  echo "✅ gh-pages branch already exists"
else
  echo "📝 Creating gh-pages branch..."
  # Create orphan branch (no history)
  git checkout --orphan gh-pages
  
  # Remove all files from staging
  git rm -rf .
  
  # Create a placeholder README
  echo "# GitHub Pages Deployment Branch" > README.md
  echo "This branch is automatically managed by GitHub Actions." >> README.md
  echo "" >> README.md
  echo "Built from: \`npm run generate\`" >> README.md
  
  # Add and commit
  git add README.md
  git commit -m "Initial gh-pages branch setup"
  
  echo "✅ gh-pages branch created"
fi

# Switch back to the original branch
git checkout $CURRENT_BRANCH

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Push branches to GitHub: git push origin main gh-pages"
echo "2. Go to Settings → Pages in your GitHub repo"
echo "3. Select 'Deploy from a branch' source"
echo "4. Choose 'gh-pages' branch"
echo "5. Save"
echo ""
echo "🚀 Your site will be deployed automatically!"
