declare abstract class Creator {
    abstract factoryMethod(): Product;
    someOperation(): string;
}
interface Product {
    operation(): string;
}
declare class ConcreteCreator1 extends Creator {
    factoryMethod(): Product;
}
declare class ConcreteCreator2 extends Creator {
    factoryMethod(): Product;
}
declare class ConcreteProduct1 implements Product {
    operation(): string;
}
declare class ConcreteProduct2 implements Product {
    operation(): string;
}
declare function clientCode(creator: Creator): void;
