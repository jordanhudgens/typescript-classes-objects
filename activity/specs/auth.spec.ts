import Auth, { Login } from "../auth.js";
import "jasmine";

describe("auth", () => {
  it("should be able to create a Login object with a email and password", () => {
    const user = new Login({
      email: "admin@example.com",
      password: "secret123"
    });
    expect(user.email).toBe("admin@example.com");
    expect(user.password).toBe("secret123");
  });
});
