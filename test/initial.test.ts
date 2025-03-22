import axios from "axios";

beforeAll(() => {
  axios.defaults.baseURL = "http://localhost:5050";
});
describe("initial server health check", () => {
  it("should return 200 and hello world ", async () => {
    const resp = await axios.get("/");
    expect(resp.status).toBe(200);
    expect(resp.data).toBe("hello world");
  });
});

describe("route 1 test case", () => {
  it("should return this is home ", async () => {
    const resp = await axios.get("/home");
    expect(resp.status).toBe(200);
    expect(resp.data).toMatch(/home/);
  });
});
