package org.example;

public class Score implements FetchScore {
    private int score=0;

    public void incrementScore() {
        score++;
    }
    public int fetchScore () {
        return score;

    }
}