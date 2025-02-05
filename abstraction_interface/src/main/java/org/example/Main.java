package org.example;

abstract class Structure { //abstract class
    double area;
    double peri;

    abstract void calculate();//abstract method

    abstract void perimeter();

    void area() {
        System.out.println("AREA=" + area);//concrete method
    }

    void peri() {
        System.out.println("Perimeter=" +peri);//concrete method
    }
}

