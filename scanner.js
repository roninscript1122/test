document.addEventListener("DOMContentLoaded", function() {
    let video = document.createElement("video");
    let canvasElement = document.getElementById("canvas");
    let canvas = canvasElement.getContext("2d");

    // ตั้งค่าการเรียกใช้กล้อง
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // โปรดทราบว่าบางบราวเซอร์อาจจะต้องการองค์ประกอบนี้
        video.play();
        requestAnimationFrame(tick);
    });

    function tick() {
        // ทำการเก็บภาพจากวิดีโอและนำไปวาดลงใน Canvas
        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
        requestAnimationFrame(tick);
    }
});
