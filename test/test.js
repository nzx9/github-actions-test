import { equal } from "assert";
import { say_hello, add } from "../main.js";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("main", function () {
  describe("add", function () {
    it("should return 3", function () {
      equal(add(1, 2), 3);
    });
  });
});

describe("print_hello", function () {
  it("should return Hello", function () {
    equal(say_hello(), "Hello");
  });
});
