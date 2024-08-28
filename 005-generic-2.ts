interface User {
  firstName: string;
  lastName: string;
}

function getProp<T extends keyof User>(obj: User, prop: T): User[T] {
  return obj[prop];
}

const user: User = {
  firstName: "Adrian",
  lastName: "Majcher",
};

const firstName = getProp(user, "firstName");
