// 1. เรียกใช้งาน Module ที่ชื่อว่า 'http' ซึ่งเป็นระบบพื้นฐานของ Node.js สำหรับทำเซิร์ฟเวอร์
const http = require('http');

// 2. กำหนดช่องทาง (Port) ที่เซิร์ฟเวอร์จะใช้สื่อสาร โดยใช้ของที่ Cloud กำหนดมา
const port = process.env.PORT || 3000;

// รูปโปรไฟล์เจ้าของเซิร์ฟเวอร์ (แปลงเป็น Base64 ฝังไว้ในไฟล์เดียว)
const profileImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAAD[...]

// 3. สร้างเครื่องแม่ข่าย (Server) ที่คอยรับคำขอ (req) และตอบกลับ (res)
const server = http.createServer((req, res) => {
  // 3.1 ตั้งรหัสสถานะ 200 หมายถึง "ทำงานสำเร็จ (OK)"
  res.statusCode = 200;

  // 3.2 บอกเบราว์เซอร์ของผู้ใช้ว่า สิ่งที่ส่งกลับไปคือไฟล์ข้อความแบบ HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // 3.3 สร้างหน้าเว็บ HTML ที่มีการตกแต่งสวยงาม
  const html = `
  <!DOCTYPE html>
  <html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Web Server - ลักษิกา เกตุศรีแก้ว</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(91, 141, 255, 0.5), 0 0 40px rgba(70, 120, 255, 0.3); }
        50% { box-shadow: 0 0 30px rgba(91, 141, 255, 0.8), 0 0 60px rgba(70, 120, 255, 0.5); }
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.4; }
      }

      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      @keyframes float-particles {
        0% {
          transform: translateY(0) translateX(0) rotate(0deg);
          opacity: 0;
        }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% {
          transform: translateY(-100vh) translateX(100px) rotate(360deg);
          opacity: 0;
        }
      }

      body {
        min-height: 100vh;
        font-family: 'Sarabun', 'Segoe UI', Tahoma, sans-serif;
        background: linear-gradient(-45deg, #050a1a, #0b1730, #142b52, #1a3a6b, #050a1a);
        background-size: 400% 400%;
        animation: gradientShift 15s ease infinite;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 20px;
        color: #e6ecff;
        position: relative;
        overflow: hidden;
      }

      body::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 20% 50%, rgba(70, 120, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(91, 141, 255, 0.1) 0%, transparent 50%);
        pointer-events: none;
        z-index: 1;
      }

      .particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
      }

      .particle {
        position: absolute;
        width: 4px;
        height: 4px;
        background: radial-gradient(circle, #5b8dff, rgba(91, 141, 255, 0.3));
        border-radius: 50%;
        filter: blur(1px);
        animation: float-particles linear infinite;
      }

      .card {
        width: 100%;
        max-width: 650px;
        background: rgba(15, 25, 50, 0.65);
        border: 2px solid rgba(120, 160, 255, 0.35);
        border-radius: 25px;
        padding: 45px 40px;
        box-shadow: 0 25px 80px rgba(0, 10, 40, 0.7),
                    0 0 0 1px rgba(90, 130, 220, 0.15) inset,
                    0 0 40px rgba(70, 120, 255, 0.15);
        backdrop-filter: blur(10px);
        position: relative;
        overflow: hidden;
        text-align: center;
        animation: slideIn 0.8s ease-out;
        z-index: 2;
      }

      .card::before {
        content: "";
        position: absolute;
        top: -100px;
        right: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(70, 120, 255, 0.4), transparent 70%);
        border-radius: 50%;
        animation: float 6s ease-in-out infinite;
      }

      .card::after {
        content: "";
        position: absolute;
        bottom: -100px;
        left: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(91, 141, 255, 0.3), transparent 70%);
        border-radius: 50%;
        animation: float 8s ease-in-out infinite reverse;
      }

      .content-wrapper {
        position: relative;
        z-index: 10;
      }

      .avatar {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #5b8dff;
        box-shadow: 0 0 0 8px rgba(91, 141, 255, 0.15),
                    0 15px 40px rgba(0, 0, 0, 0.6);
        margin: 0 auto 25px auto;
        display: block;
        animation: glow 3s ease-in-out infinite, float 3.5s ease-in-out infinite;
        transition: transform 0.3s ease;
      }

      .avatar:hover {
        transform: scale(1.08);
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: linear-gradient(135deg, rgba(40, 200, 130, 0.15), rgba(40, 200, 130, 0.05));
        border: 1.5px solid rgba(40, 200, 130, 0.5);
        color: #4ee6a5;
        padding: 8px 16px;
        border-radius: 999px;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 25px;
        box-shadow: 0 0 20px rgba(40, 200, 130, 0.2),
                    inset 0 0 20px rgba(40, 200, 130, 0.05);
        animation: slideIn 0.8s ease-out 0.2s both;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #4ee6a5;
        box-shadow: 0 0 10px #4ee6a5;
        animation: pulse 1.5s infinite;
      }

      h1 {
        font-size: 32px;
        background: linear-gradient(90deg, #8fb8ff 0%, #5b8dff 40%, #a4c8ff 70%, #5b8dff 100%);
        background-size: 300% 100%;
        animation: gradientShift 6s ease infinite;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin-bottom: 8px;
        line-height: 1.5;
        font-weight: 700;
        animation: slideIn 0.8s ease-out 0.3s both;
      }

      .subtitle {
        color: #9fb3e0;
        font-size: 16px;
        margin-bottom: 30px;
        font-weight: 500;
        animation: slideIn 0.8s ease-out 0.4s both;
        letter-spacing: 0.5px;
      }

      .divider {
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(120, 160, 255, 0.5), transparent);
        margin: 28px 0;
        animation: slideIn 0.8s ease-out 0.5s both;
      }

      .info-title {
        font-size: 19px;
        font-weight: 700;
        background: linear-gradient(90deg, #cfe0ff, #8fb8ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        animation: slideIn 0.8s ease-out 0.6s both;
        font-size: 18px;
      }

      .info-title::before {
        content: "👤";
        font-size: 24px;
        filter: drop-shadow(0 0 8px rgba(91, 141, 255, 0.4));
      }

      .info-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;
        text-align: left;
      }

      .info-list li {
        display: flex;
        gap: 12px;
        font-size: 15px;
        color: #dbe6ff;
        background: linear-gradient(135deg, rgba(90, 130, 220, 0.12), rgba(70, 120, 255, 0.05));
        border: 1.5px solid rgba(90, 130, 220, 0.25);
        border-radius: 12px;
        padding: 12px 16px;
        transition: all 0.3s ease;
        animation: slideIn 0.6s ease-out backwards;
        position: relative;
        overflow: hidden;
      }

      .info-list li::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(120, 160, 255, 0.3), transparent);
        transform: translateX(-100%);
        animation: shimmer 3s infinite;
      }

      .info-list li:nth-child(1) { animation-delay: 0.7s; }
      .info-list li:nth-child(2) { animation-delay: 0.75s; }
      .info-list li:nth-child(3) { animation-delay: 0.8s; }
      .info-list li:nth-child(4) { animation-delay: 0.85s; }
      .info-list li:nth-child(5) { animation-delay: 0.9s; }
      .info-list li:nth-child(6) { animation-delay: 0.95s; }
      .info-list li:nth-child(7) { animation-delay: 1s; }

      .info-list li:hover {
        background: linear-gradient(135deg, rgba(90, 130, 220, 0.25), rgba(70, 120, 255, 0.15));
        border-color: rgba(120, 160, 255, 0.5);
        box-shadow: 0 8px 25px rgba(70, 120, 255, 0.2),
                    inset 0 0 20px rgba(91, 141, 255, 0.1);
        transform: translateX(8px);
      }

      .info-list li:hover .label {
        color: #8fb8ff;
        text-shadow: 0 0 10px rgba(91, 141, 255, 0.5);
      }

      .info-list .label {
        color: #7fa4ff;
        font-weight: 700;
        min-width: 100px;
        flex-shrink: 0;
        transition: all 0.3s ease;
      }

      footer {
        margin-top: 35px;
        text-align: center;
        font-size: 13.5px;
        color: #6b83b8;
        animation: slideIn 0.8s ease-out 1.1s both;
        font-weight: 500;
      }

      footer::before {
        content: "✨ ";
        filter: drop-shadow(0 0 5px rgba(91, 141, 255, 0.5));
      }

      footer::after {
        content: " ✨";
        filter: drop-shadow(0 0 5px rgba(91, 141, 255, 0.5));
      }

      @media (max-width: 480px) {
        .card {
          padding: 35px 28px;
          border-radius: 20px;
        }

        h1 {
          font-size: 26px;
        }

        .avatar {
          width: 110px;
          height: 110px;
        }

        .info-list li {
          flex-direction: column;
          gap: 6px;
        }

        .info-list .label {
          min-width: auto;
        }
      }
    </style>
  </head>
  <body>
    <div class="particles" id="particles"></div>

    <div class="card">
      <div class="content-wrapper">
        <img class="avatar" src="\${profileImage}" alt="รูปโปรไฟล์ ลักษิกา เกตุศรีแก้ว" />

        <div class="status-badge">
          <span class="status-dot"></span>
          เครื่องแม่ข่ายทำงานปกติบน Railway
        </div>

        <h1>สวัสดีค่ะ! 👋<br />นี่คือ Web Server ของ<br />นางสาวลักษิกา เกตุศรีแก้ว</h1>
        <p class="subtitle">รหัสนักศึกษา 69319010400</p>

        <div class="divider"></div>

        <div class="info-title">ข้อมูลส่วนตัวเจ้าของ Server</div>
        <ul class="info-list">
          <li><span class="label">ชื่อ-สกุล</span> นางสาวลักษิกา เกตุศรีแก้ว</li>
          <li><span class="label">ห้อง/รหัส</span> HIT.1/2</li>
          <li><span class="label">ชื่อเล่น</span> แพน</li>
          <li><span class="label">วันเกิด</span> 17/04</li>
          <li><span class="label">สถานศึกษา</span> วิทยาลัยเทคโนโลยีชลบุรี</li>
          <li><span class="label">ระดับชั้น</span> ปวส.1</li>
          <li><span class="label">สาขา</span> เทคโนโลยีสารสนเทศ</li>
        </ul>

        <footer>Powered by Node.js & Railway 🚀</footer>
      </div>
    </div>

    <script>
      // สร้างอนุภาคเคลื่อนที่
      const particlesContainer = document.getElementById('particles');
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        particlesContainer.appendChild(particle);
      }
    </script>
  </body>
  </html>
  `;

  // 3.4 ส่งข้อมูลหน้าเว็บกลับไปหาผู้ใช้
  res.end(html);
});

// 4. สั่งให้เซิร์ฟเวอร์เริ่มต้นเปิดรับฟังการเชื่อมต่อตาม Port ที่กำหนดไว้
server.listen(port, () => {
  console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง:: ${port}`);
});
