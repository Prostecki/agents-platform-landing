/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * QA Check Script for Athlete AI
 * Performs: Linting, Type Checking, and Design System Audit.
 */

function runStep(name, command) {
  console.log(`\n--- Running: ${name} ---`);
  try {
    const output = execSync(command, { encoding: 'utf-8', stdio: 'pipe' });
    console.log(`✅ ${name} passed.`);
    if (output) console.log(output.slice(0, 500) + (output.length > 500 ? '...' : ''));
    return true;
  } catch (error) {
    console.error(`❌ ${name} failed.`);
    console.error(error.stdout || error.message);
    return false;
  }
}

function designSystemAudit() {
  console.log(`\n--- Running: Design System Audit ---`);
  const componentDir = path.join(process.cwd(), 'app');
  const hardcodedColors = /\b#[0-9a-fA-F]{3,6}\b|rgba?\(.*\)/g;
  const violations = [];

  function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        if (!['node_modules', '.next'].includes(file)) walk(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const matches = content.match(hardcodedColors);
        if (matches) {
          violations.push({ file: path.relative(process.cwd(), filePath), matches: [...new Set(matches)] });
        }
      }
    });
  }

  try {
    walk(componentDir);
    if (violations.length > 0) {
      console.warn(`⚠️ Found hardcoded colors in ${violations.length} files. Consider using CSS variables (var(--bg), var(--green), etc.)`);
      violations.slice(0, 5).forEach(v => {
        console.log(`  - ${v.file}: ${v.matches.join(', ')}`);
      });
      if (violations.length > 5) console.log(`  ... и еще в ${violations.length - 5} файлах.`);
    } else {
      console.log(`✅ No hardcoded colors found in components.`);
    }
    return true;
  } catch (e) {
    console.error(`❌ Audit failed: ${e.message}`);
    return false;
  }
}

console.log('🚀 Starting QA Pipeline...');

const results = [
  runStep('Linting', 'npm run lint'),
  runStep('Type Check', 'npx tsc --noEmit'),
  designSystemAudit()
];

const allPassed = results.every(r => r);
console.log('\n=================================');
if (allPassed) {
  console.log('✨ ALL QA CHECKS PASSED ✨');
  process.exit(0);
} else {
  console.log('⚠️ SOME CHECKS FAILED. Please review the output above.');
  process.exit(1);
}
