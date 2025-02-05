package org.example;

import java.util.HashMap;

public class Questions implements ShowQuestions {
    private final HashMap<Integer, String> question = new HashMap<>();

    public Questions() {

        question.put(1, "What is the number after 1");
        question.put(2, "What is the number after 2");
        question.put(3, "What is the number after 3");
        question.put(4, "What is the number after 4");
        question.put(5, "What is the number after 5");
    }

    @Override
    public void showQuestion(int number) {
        System.out.println("Q " + number + " : " + question.get(number));
    }
        public int getQuestionCount() {
            return question.size();
    }
}
