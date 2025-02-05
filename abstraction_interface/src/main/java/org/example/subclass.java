package org.example;
class Circle extends Structure implements areacalculator,perimetercalculator {
    double radius;

    Circle(double radius) {//constructor to initialize attributes
        this.radius=radius;
    }

    public void calculate() {//overrides parent class
        area=Math.PI*radius*radius;
    }


    public void perimeter() {//overrides parent class
        peri=2*Math.PI*radius;
    }

}
