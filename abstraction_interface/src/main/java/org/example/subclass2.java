package org.example;

class Rectangle extends Structure implements areacalculator,perimetercalculator  {
    double width,height;

    Rectangle(double width, double height) {//constructor to initialize attributes
        this.width=width;
        this.height=height;
    }
    @Override
    public void calculate() {//overrides parent class
        area=width*height;
    }

    public void perimeter() {//overrides parent class
        peri=2*(width+height);
    }
}

