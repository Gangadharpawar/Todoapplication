import React from "react";

export default function Counter(initalValue) {
  var count = initalValue;
  return function GetNextcount() {
    return count++;
  };
}
