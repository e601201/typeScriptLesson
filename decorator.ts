function Logging(message: string) {
  return function (constructor: Function) {
    console.log("logging...");
    console.log(message);
    console.log(constructor);
  };
}
function Component(template: string, selector: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log("Component decorator");
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

@Component("<h1>{{ name }}</h1>", "#app")
@Logging("Logging User")
class User {
  name = "Quill";
  age = 38;
  constructor() {
    console.log("User was created!");
  }
}

const user1 = new User();
const user22 = new User();
const user32 = new User();