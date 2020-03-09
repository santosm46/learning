// move strategy
interface MoveBehavior {
    public void move(Animal a);
}
//  concrete move behaviors
class Fly implements MoveBehavior{
    public void move(Animal a) {
        System.out.println("My name is " + a.name + " and i'm flying");
    }
}
class Walk implements MoveBehavior{
    public void move(Animal a) {
        System.out.println("My name is " + a.name + " and i'm walking");
    }
}


// Animal definitions

abstract class Animal {
    String name = null;
    MoveBehavior mb;
    public Animal(String name, MoveBehavior mb) {
        this.name = name;
        this.mb = mb;
    }

    public final void move() {
        mb.move(this);
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name, new Walk());
    }
}

class Bird extends Animal {
    public Bird(String name) {
        super(name, new Fly());
    }
}

class Bat extends Animal {
    public Bat(String name) {
        // there is no need to reimplement fly method, just pass fly behavior
        super(name, new Fly());
    }
}


// main program
class AnimalProgram {
    public static void main(String args[]){
        Dog d = new Dog("Rex");
        Bird b = new Bird("Billy");
        Bat bat = new Bat("Cego");

        d.move();
        b.move();
        bat.move();
    }
}
