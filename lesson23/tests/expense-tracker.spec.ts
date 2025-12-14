// 🧪 Automated Tests for Expense Tracker App
// These tests automatically check if the app works correctly

import { test, expect, Page } from '@playwright/test';

// Test 1: Check if the app loads and shows the header
test('should display the app header', async ({ page }: { page: Page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Expense Tracker App' })).toBeVisible();
});

// Test 2: Check if balance starts at $0.00
test('should show initial balance as $0.00', async ({ page }: { page: Page }) => {
    await page.goto('/');

    const balance = page.locator('#balance');
    await expect(balance).toHaveText('$0.00');
});

// Test 3: Add income (positive amount) and check balance
test('should add an income transaction', async ({ page }) => {
    await page.goto('/');
    await page.fill('#description', 'Salary');
    await page.fill('#transactionamount', '1000');
    await page.click('button:has-text("Add Transaction")');

    const balance = page.locator('#balance');
    await expect(balance).toHaveText('$1000.00');
});

// Test 4: Add expense (negative amount) and check balance
test('should add an expense transaction', async ({ page }) => {
    await page.goto('/');
    await page.fill('#description', 'Groceries');
    await page.fill('#transactionamount', '-50');
    await page.click('button:has-text("Add Transaction")');

    const balance = page.locator('#balance');
    await expect(balance).toHaveText('$-50.00');
});

// Test 5: Check if transactions appear in history
test('should display transaction in history', async ({ page }) => {
    await page.goto('/');
    await page.fill('#description', 'Coffee');
    await page.fill('#transactionamount', '-5');
    await page.click('button:has-text("Add Transaction")');

    await expect(page.getByRole('heading', { name: 'Transaction History' })).toBeVisible();

    await expect(page.getByText('Coffee')).toBeVisible();
});
