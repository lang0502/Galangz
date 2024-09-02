function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0001.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0002.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0003.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0004.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0005.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0006.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0007.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0008.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0009.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0010.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0011.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0012.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0013.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0014.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0015.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0016.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0017.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0018.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0019.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0020.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0021.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0022.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0023.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0024.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0025.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0026.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0027.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0028.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0029.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0030.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0031.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0032.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0033.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0034.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0035.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0036.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0037.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0038.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0039.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0040.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0041.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0042.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0043.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0044.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0045.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0046.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0047.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0048.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0049.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0050.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0051.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0052.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0053.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0054.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0055.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0056.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0057.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0058.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0059.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0060.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0061.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0062.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0063.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0064.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0065.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0066.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0067.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0068.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0069.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0070.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0071.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0072.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0073.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0074.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0075.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0076.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0077.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0078.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0079.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0080.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0081.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0082.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0083.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0084.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0085.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0086.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0087.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0088.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0089.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0090.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0091.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0092.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0093.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0094.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0095.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0096.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0097.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0098.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0099.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0100.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0101.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0102.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0103.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0104.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0105.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0106.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0107.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0108.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0109.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0110.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0111.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0112.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0113.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0114.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0115.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0116.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0117.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0118.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0119.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0120.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0121.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0122.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0123.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0124.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0125.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0126.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0127.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0128.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0129.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0130.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0131.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0132.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0133.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0134.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0135.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0136.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0137.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0138.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0139.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0140.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0141.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0142.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0143.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0144.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0145.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0146.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0147.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0148.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0149.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0150.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0151.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0152.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0153.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0154.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0155.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0156.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0157.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0158.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0159.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0160.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0161.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0162.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0163.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0164.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0165.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0166.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0167.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0168.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0169.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0170.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0171.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0172.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0173.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0174.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0175.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0176.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0177.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0178.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0179.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0180.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0181.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0182.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0183.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0184.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0185.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0186.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0187.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0188.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0189.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0190.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0191.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0192.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0193.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0194.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0195.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0196.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0197.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0198.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0199.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0200.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0201.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0202.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0203.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0204.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0205.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0206.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0207.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0208.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0209.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0210.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0211.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0212.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0213.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0214.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0215.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0216.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0217.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0218.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0219.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0220.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0221.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0222.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0223.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0224.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0225.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0226.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0227.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0228.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0229.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0230.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0231.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0232.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0233.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0234.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0235.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0236.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0237.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0238.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0239.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0240.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0241.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0242.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0243.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0244.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0245.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0246.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0247.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0248.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0249.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0250.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0251.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0252.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0253.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0254.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0255.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0256.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0257.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0258.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0259.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0260.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0261.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0262.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0263.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0264.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0265.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0266.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0267.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0268.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0269.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0270.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0271.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0272.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0273.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0274.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0275.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0276.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0277.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0278.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0279.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0280.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0281.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0282.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0283.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0284.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0285.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0286.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0287.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0288.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0289.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0290.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0291.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0292.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0293.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0294.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0295.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0296.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0297.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0298.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0299.png
     https://aadilkhan08.github.io/CYBERFICTION-SOURCE-CODE/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})

$(function() {

  $("#responsive-off").click(function() {
    $('meta[name="viewport"]').prop('content', 'width=initial');
  });
  $("#responsive-on").click(function() {
    $('meta[name="viewport"]').prop('content', 'width=device-width, initial-scale=1');
  });

});