import getMembersProfile from "./getMembersProfile";

describe("getMembersProfile", () => {
  it("全員のプロフィールを取得することができる", () => {
    expect(getMembersProfile()).toMatchSnapshot();
  });

  it("指定した人のプロフィールだけ取得することができる", () => {
    expect(getMembersProfile("hanako")).toMatchSnapshot();
  });
});

describe("getMembersProfile[unused snapshot]", () => {
  it("全員のプロフィールを取得することができる", () => {
    const expectedProfile = [
      {
        name: "taro",
        age: 41
      },
      {
        name: "hanako",
        age: 32
      },
      {
        name: "jiro",
        age: 21
      }
    ];
    expect(getMembersProfile()).toStrictEqual(expectedProfile);
  });

  it("指定した人のプロフィールだけ取得することができる", () => {
    const expectedProfile = [
      {
        name: "hanako",
        age: 32
      }
    ];
    expect(getMembersProfile("hanako")).toStrictEqual(expectedProfile);
  });
});

describe("getMembersProfile[used inlineSnapshot]", () => {
  it("全員のプロフィールを取得することができる", () => {
    expect(getMembersProfile()).toMatchInlineSnapshot(`
                  Array [
                    Object {
                      "age": 41,
                      "name": "taro",
                    },
                    Object {
                      "age": 32,
                      "name": "hanako",
                    },
                    Object {
                      "age": 21,
                      "name": "jiro",
                    },
                  ]
            `);
  });

  it("指定した人のプロフィールだけ取得することができる", () => {
    expect(getMembersProfile("hanako")).toMatchInlineSnapshot(`
      Array [
        Object {
          "age": 32,
          "name": "hanako",
        },
      ]
    `);
  });
});
