package org.example;

class Square extends Structure implements areacalculator,perimetercalculator  {
    double edge;

    Square(double edge) {//constructor to initialize attributes
        this.edge=edge;
    }
    @Override
    public void calculate() {//overrides parent class
        area=edge*edge;
    }

    public void perimeter() {//overrides parent class
        peri=4*edge;
    }
}