"use strict";
class Creator {
    someOperation() {
        const product = this.factoryMethod();
        return "Creator: The same creator's code has just worked with ${product.operation()}";
    }
}
class ConcreteCreator1 extends Creator {
    factoryMethod() {
        return new ConcreteProduct1();
    }
}
class ConcreteCreator2 extends Creator {
    factoryMethod() {
        return new ConcreteProduct2();
    }
}
class ConcreteProduct1 {
    operation() {
        return '{Result of the ConcreteProduct1}';
    }
}
class ConcreteProduct2 {
    operation() {
        return '{Result of the ConcreteProduct2}';
    }
}
function clientCode(creator) {
    //...
    console.log("Client I'm not aware of the creator's class, but it works.");
    console.log(creator.someOperation());
    //...
}
console.log('App: Launched with the Concrete Creator 1.');
clientCode(new ConcreteCreator1());
console.log('');
console.log('App: Launched with the Concrete Creator 2.');
clientCode(new ConcreteCreator2());
//# sourceMappingURL=index.js.map