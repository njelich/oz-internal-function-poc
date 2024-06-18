const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { upgrades, ethers } = require("hardhat");

describe("Demo", function () {
  async function deployDemoFixture() {
    const Demo = await ethers.getContractFactory("Demo");
    const DemoProxy = await upgrades.deployProxy(Demo, []);
    const demo = Demo.attach(await DemoProxy.getAddress());
    const demoAddress = await demo.getAddress();

    return { demo, demoAddress };
  }

  describe("Deployment", function () {
    it("unsafe internal function failure", async function () {
      const { demo, demoAddress } = await loadFixture(deployDemoFixture);
      console.log("Demo deployment passed");
    });
  });
});
