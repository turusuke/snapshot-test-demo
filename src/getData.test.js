import getData from "./getDate";
describe("getDate", () => {
  it("時刻, id, code を持っているデータを返せていること", () => {
    expect(getData()).toMatchInlineSnapshot(
      { date: expect.any(Date), id: expect.any(Number) },
      `
      Object {
        "code": 123,
        "date": Any<Date>,
        "id": Any<Number>,
      }
    `
    );
  });
});
