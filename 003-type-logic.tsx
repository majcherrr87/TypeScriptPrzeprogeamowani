type User = {
  firstName: string;
  lastName: string;
};

type Identifiable = {
  id: string;
};

type Greetable = {
  greet: () => string;
};

type ComplexUser = User & Identifiable & Greetable;

const user: ComplexUser = {
  firstName: "Adrian",
  lastName: "Majcher",
  id: "xxxxx",
  greet() {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
};
