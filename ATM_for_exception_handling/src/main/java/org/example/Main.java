package org.example;

import java.util.Scanner;

class Main {
    private double balance;

    public Main(double balance) {
        this.balance = balance;
    }

    public void withdraw(double amount) {
        try {
            if (amount <= 0) {
                throw new IllegalArgumentException("Withdrawal amount must be greater than zero.");
            }

            if (amount > balance) {
                throw new ArithmeticException("Insufficient balance! Your current balance is: " + balance);
            }

            balance -= amount;
            System.out.println("Withdrawal successful! Remaining balance: " + balance);
        } catch (IllegalArgumentException | ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Main myATM = new Main(5000); // Initial balance: 5000

        try {
            System.out.print("Enter withdrawal amount: ");
            double amount = scanner.nextDouble();
            myATM.withdraw(amount);
        } catch (Exception e) {
            System.out.println("Invalid input! Please enter a numeric value.");
        } finally {
            scanner.close();
        }
    }
}
