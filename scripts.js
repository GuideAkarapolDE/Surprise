document.getElementById("openButton").addEventListener("click", function () {
    const giftBox = document.getElementById("giftBox");
    const giftLid = document.getElementById("giftLid");
    const surpriseContent = document.getElementById("surpriseContent");
    const surpriseImage = document.getElementById("surpriseImage");
    const surpriseText = document.getElementById("surpriseText");
  
    // แสดงเซอร์ไพรส์
    surpriseImage.src = "Happy.png";
    surpriseText.innerHTML = `Happy New Year! I hope you were having a nice year, and everything was going your way.<br>So, I wish you to keep having the same wonderful year in 2025.<br>Stay health :D<br>Guide : (31/12/2024)`;
  
    // ซ่อนปุ่มเปิดกล่องของขวัญ
    this.style.display = "none";
  
    // เปิดแอนิเมชันการยกฝากล่อง
    giftLid.style.transform = "translateY(-120px)";
    giftBox.style.transform = "scale(0.8)"; // ทำให้กล่องเล็กลง
  
    // หน่วงเวลา 1 วินาทีเพื่อให้แอนิเมชันเสร็จสิ้นก่อนที่กล่องจะหาย
    setTimeout(function() {
      giftBox.style.display = "none"; // ซ่อนกล่อง
      surpriseContent.style.display = "block"; // แสดงเซอร์ไพรส์
      setTimeout(function() {
        surpriseContent.style.opacity = 1;
        surpriseContent.style.transform = "translateY(0)";
        surpriseImage.style.transform = "scale(1)";
      }, 100);
    }, 1000); // หน่วงเวลา 1 วินาที
  });
  