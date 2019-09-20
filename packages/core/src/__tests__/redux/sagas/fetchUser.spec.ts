import { call } from "redux-saga/effects";

const addNumber = (num1: number, num2: number) => num1 + num2;

let number = 0;
function* simpleMath() {
    number = yield call(addNumber, number, 1);

    console.log(number);

    number = yield call(addNumber, number, 2);

    yield number;
}

it("foo test", () => {
    /* Executed This Line -> */ const gen = simpleMath();

    expect(gen.next().value).toEqual(call(addNumber, number, 1));

    expect(gen.next(1).value).toEqual(call(addNumber, number, 2));

    expect(gen.next(6).value).toEqual(6);

    expect(gen.next().value).toBeUndefined();
});
