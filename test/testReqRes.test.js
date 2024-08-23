const { default: axios } = require("axios");
(async () => {
  const { expect } = await import("chai");
  // Your test code goes here
  const baseUrl = "https://reqres.in/api";

  describe("Verify reqres endpoints", () => {
    it("should test get users details", async () => {
      const response = await axios.get(`${baseUrl}/users`);
      expect(response.status).to.equal(200);
    });

    it("should test create user", async () => {
      const userData = { name: "John Doe", job: "Software Developer" };
      const response = await axios.post(`${baseUrl}/users`, userData);
      expect(response.status).to.equal(200);
      expect(response.data.name).to.include(userData);
    });
    it("should test update user", async () => {
      const userId = 2;
      const updateData = { name: "Jane Doe", job: "Project Manager" };
      const response = await axios.put(
        `${baseUrl}/users/${userId}`,
        updateData
      );
      expect(response.status).to.equal(200);
      expect(response.data).to.include(updateData);
    });
    it('should test delete user', async ()=>{
        const userId = 2;
        const response = await axios.delete(`${baseUrl}/users/${userId}`);
        expect(response.status).to.equal(204);
    })
  });
})();
