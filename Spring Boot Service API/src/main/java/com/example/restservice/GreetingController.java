package com.example.restservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.*;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    private ArrayList<String> list = new ArrayList<>();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    @PostMapping("/add")
    public List<String> add(@RequestParam(value = "value") String value, @RequestParam(value = "index") String index, @RequestParam(value = "action") String action) throws Exception {
        if (Objects.equals(action, "add")) {
            list.add(Integer.parseInt(index), value);
        } else if (action.equals("remove")) {
            list.remove(Integer.parseInt(index));
        } else {
            throw new Exception("Invalid action");
        }
        return list;
    }

    @PutMapping("/update")
    public List<String> update(@RequestParam(value = "index") int index, @RequestParam(value = "value") String value) {
        if (index >= 0 && index < list.size()) {
            list.set(index, value);
        } else {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
        return list;
    }

    @PatchMapping("/patch")
    public List<String> patch(@RequestParam(value = "index") int index, @RequestParam(value = "value", required = false) String value) {
        if (index >= 0 && index < list.size()) {
            if (value != null) {
                list.set(index, value);
            }
        } else {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
        return list;
    }

    @DeleteMapping("/delete")
    public List<String> delete(@RequestParam(value = "index") int index) {
        if (index >= 0 && index < list.size()) {
            list.remove(index);
        } else {
            throw new IndexOutOfBoundsException("Index out of bounds");
        }
        return list;
    }

    public record Greeting(long id, String content) {}
}
