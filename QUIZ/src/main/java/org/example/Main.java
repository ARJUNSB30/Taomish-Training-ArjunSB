package org.example;

import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please Enter Your Name : ");
        String name = scanner.nextLine();

        System.out.println("Hello "+name+" lets begin the Test");

        Questions question = new Questions();
        Options option = new Options();
        Answers answer = new Answers();
        Score score = new Score();


        for (int i = 1; i <=question.getQuestionCount(); i++) {
            question.showQuestion(i);

            option.showAnswer(i);

            System.out.print("ENTER YOUR OPTIONS IN UPPER CASE : ");
            String ans = scanner.nextLine();


            if (answer.checkAnswer(i, ans)) {
                System.out.println("Correct!");
                score.incrementScore();
            } else {
                System.out.print("Wrong! The correct answer was " );
                answer.showAnswer(i);

            }
        }

            System.out.print("GOOD "+name+" You have completed the test");
            System.out.print("YOUR "+name+" You score is "+score.fetchScore()+"/5");

            scanner.close();

    }
}


