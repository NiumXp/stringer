const hello = "Hello, world!";
const empty = '';


function assert(tests, fn)
{
    for (const testCase of tests)
    {
        const func = fn.bind(testCase.str);
        const data = func(testCase.arg);
        expect(data).toBe(testCase.expected);
    }
}

test("removePrefix", () => {
    const fn = String.prototype.removePrefix;
    expect(fn).not.toBe(undefined);

    assert([
        { str: hello, arg: "Hello, ", expected: "world!" },
        { str: hello, arg: "Nothing", expected: hello },
        { str: empty, arg: empty, expected: empty },
        { str: empty, arg: "Hey", expected: empty },
        { str: "Hey", arg: empty, expected: "Hey" },
        { str: "Hey", arg: "Hey", expected: empty },
    ], fn);
});

test("removeSuffix", () => {
    const fn = String.prototype.removeSuffix;
    expect(fn).not.toBe(undefined);

    assert([
        { str: hello, arg: ", world!", expected: "Hello" },
        { str: hello, arg: "Nothing", expected: hello },
        { str: empty, arg: empty, expected: empty },
        { str: empty, arg: "Hey", expected: empty },
        { str: "Hey", arg: empty, expected: "Hey" },
        { str: "Hey", arg: "Hey", expected: empty },
    ], fn);
});
