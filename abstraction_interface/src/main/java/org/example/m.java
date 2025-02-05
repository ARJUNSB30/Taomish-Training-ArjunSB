package org.example;

class Main {
    public static void main(String[] args) {
        Circle c = new Circle(5);
        c.calculate();
        c.perimeter();
        System.out.println("Area of circle");
        c.area();
        c.peri();
        Rectangle r = new Rectangle(3,2);
        r.calculate();
        r.perimeter();
        System.out.println("Area of Rectangle");
        r.area();
        r.peri();
        Square s = new Square(5.3);
        s.calculate();
        s.perimeter();
        System.out.println("Area of Square");
        s.area();
        s.peri();
    }
}