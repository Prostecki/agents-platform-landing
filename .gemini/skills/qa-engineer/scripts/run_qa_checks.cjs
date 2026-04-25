/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * QA Check Script for Athlete AI
 * Performs: Linting, Type Checking, Accessibility, and Design System Audit.
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
  const componentDir = path.join(__dirname, '../../app');
  const hardcodedColors = /(?<!var\()#[0-9a-fA-F]{6}\b/g;
  const violations = [];

  const ignoredFiles = ['globals.css', 'tokens.css', 'design.css', 'tailwind.config'];

  function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);

      if (ignoredFiles.some(ignored => file.includes(ignored))) return;

      if (fs.statSync(filePath).isDirectory()) {
        if (!['node_modules', '.next'].includes(file)) walk(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const matches = content.match(hardcodedColors);
        if (matches) {
          violations.push({
            file: path.relative(process.cwd(), filePath),
            matches: [...new Set(matches)],
          });
        }
      }
    });
  }

  try {
    walk(componentDir);
    if (violations.length > 0) {
      console.warn(`⚠️ Found hardcoded colors in ${violations.length} files. Use CSS variables (var(--bg), var(--green), etc.)`);
      violations.slice(0, 5).forEach(v => {
        console.log(`  - ${v.file}: ${v.matches.join(', ')}`);
      });
      if (violations.length > 5) console.log(`  ... and ${violations.length - 5} more files.`);
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
  runStep('Accessibility', 'npx pa11y http://localhost:3000 --standard WCAG2AA --ignore "notice;warning"'),
  designSystemAudit(),
];

const passed = results.filter(Boolean).length;
const failed = results.filter(r => !r).length;

console.log('\n=================================');
console.log(`Checks: ${results.length} total, ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('✨ ALL QA CHECKS PASSED ✨');
  process.exit(0);
} else {
  console.log('⚠️ SOME CHECKS FAILED. Please review the output above.');
  process.exit(1);
}