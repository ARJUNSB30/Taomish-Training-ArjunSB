package org.example;

import java.util.*;

public class Options implements ShowAnswer {
    private final HashMap<Integer, List<String>> option = new HashMap<>();

    public Options() {

        option.put(1, List.of("A) 2 is the number", "B) 5 is number", "C) 6 is number ", "D) 7 is the number"));
        option.put(2, List.of("A) 2 is the number", "B) 3 is number", "C) 3 is number ", "D) 9 is the number"));
        option.put(3, List.of("A) 9 is the number", "B) 7 is number", "C) 4 is number ", "D) 1 is the number"));
        option.put(4, List.of("A) 0 is the number", "B) 1 is number", "C) 1 is number ", "D) 5 is the number"));
        option.put(5, List.of("A) 6 is the number", "B) 0 is number", "C) 4 is number ", "D) 8 is the number"));
    }
        public void showAnswer(int number) {
            List<String> opt = option.get(number);
            for (String o : opt) {
                System.out.println(o);
            }
        }

}

