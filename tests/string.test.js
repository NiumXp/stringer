const hello = "Hello, world!";
const empty = '';
const loremStr = "Lorem ipsum dolor sit amet ..."
const loremArr = ["Lorem", "ipsum", "dolor", "sit", "amet", "..."];


function assert(tests, fn)
{
    for (const testCase of tests)
    {
        const func = fn.bind(testCase.str);
        let result;
        if (testCase.arg)
            result = func(testCase.arg)
        else if (testCase.args)
            result = func(...testCase.args);
        else
            result = func();
        expect(result).toBe(testCase.expected);
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

const baseSplitTestCases = [
    { str: loremStr, args: [empty], expected: empty },
    { str: loremStr, args: [' ', { limit: 0 }], expected: [loremStr] },
    { str: loremStr, args: [' ', { limit: 9 }], expected: loremArr },
    { str: loremStr, arg: ' ', expected: loremArr },
    { str: loremStr, expected: loremArr },
    { str: ' '.repeat(10), arg: ' ', expected: Array(11).fill('') },
    { str: ' '.repeat(10), args: [' ', { allowReturnEmptyStr: false }], expected: [] },
    { str: "Hello  Nium", arg: ' ', expected: ["Hello", '', "Nium"] },
    { str: "Hello      Nium", args: [' ', { allowReturnEmptyStr: false }], expected: ["Hello", "Nium"] },
    { str: loremStr, arg: "helloo", expected: [loremStr] },
];

test("leftSplit", () => {
    const fn = String.prototype.leftSplit;
    expect(fn).not.toBe(undefined);

    const str = loremStr;
    assert([
        ...baseSplitTestCases,
        { str, args: [' ', { limit: 1 }], expected: ["Lorem", "ipsum dolor sit amet ..."] },
        { str, args: [' ', { limit: 3 }], expected: ["Lorem", "ipsum", "dolor", "sit amet ..."] },
        { str, args: [{ limit: 1 }], expected: ["Lorem", "ipsum dolor sit amet ..."] },
        { str, args: [{ limit: 3 }], expected: ["Lorem", "ipsum", "dolor", "sit amet ..."] },
        { str: "Hello  Nium", args: [' ', { limit: 1 }], expected: ["Hello ", "Nium"] },
    ], fn);
})

test("rightSplit", () => {
    const fn = String.prototype.rightSplit;
    expect(fn).not.toBe(undefined);

    const str = loremStr;
    assert([
        ...baseSplitTestCases,
        { str, args: [' ', { limit: 1 }], expected: ["Lorem ipsum dolor sit amet", "..."] },
        { str, args: [' ', { limit: 3 }], expected: ["Lorem ipsum dolor", "sit", "amet", "..."] },
        { str, args: [{ limit: 1 }], expected: ["Lorem ipsum dolor sit amet", "..."] },
        { str, args: [{ limit: 3 }], expected: ["Lorem ipsum dolor", "sit", "amet", "..."] },
        { str: "Hello  Nium", args: [' ', { limit: 1 }], expected: ["Hello", " Nium"] },
    ], fn);
})

test("wrap", () => {
    const fn = String.prototype.wrap;
    expect(fn).not.toBe(undefined);

    const str = "Hello";
    assert([
        { str, arg: "..", expected: "..Hello.." },
        { str, args: ["<b>", "</b>"], expected: "<b>Hello</b>" },
        { str, args: ['b', { asHTMLTag: true }], expected: "<b>Hello</b>" },
        { str, arg: '', expected: str },
        { str, args: ['', ''], expected: str },
        { str, args: ['', '!'], expected: "Hello!" },
        { str, args: ['!', ''], expected: "!Hello" },
    ], fn);
})
