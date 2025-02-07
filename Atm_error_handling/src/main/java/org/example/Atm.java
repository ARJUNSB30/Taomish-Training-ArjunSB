package org.example;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Atm {
    private double balance;
    private static final String ERROR_LOG_FILE = "error_log.txt";

    public Atm(double balance) {
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
            writeErrorToFile(e.getMessage());
        } finally {
            System.out.println("Transaction completed. Thank you for using our ATM.");
        }
    }

    // Method to write error messages directly into a file
    private void writeErrorToFile(String errorMessage) {
        try (FileWriter fw = new FileWriter(ERROR_LOG_FILE, true);
             PrintWriter writer = new PrintWriter(fw)) {
            writer.println(errorMessage);
        } catch (IOException e) {
            System.out.println("Error writing to log file.");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Atm myAtm = new Atm(5000);

        System.out.print("Enter withdrawal amount: ");
        double amount = scanner.nextDouble();

        myAtm.withdraw(amount);

        scanner.close();
    }
}
