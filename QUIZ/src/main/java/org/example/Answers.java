package org.example;

import java.util.HashMap;

public class Answers implements ShowAnswer, CheckAnswer {
    private final HashMap<Integer, String> answer;

    public Answers() {
        answer = new HashMap<>();
        answer.put(1, "A");
        answer.put(2, "B");
        answer.put(3, "C");
        answer.put(4, "D");
        answer.put(5, "A");
    }

    @Override
    public void showAnswer(int number) {
        System.out.println(" : " + answer.get(number));
    }

    @Override
    public boolean checkAnswer(int number, String useranswer) {
        return useranswer != null && useranswer.equalsIgnoreCase(answer.get(number));
    }
}