document.addEventListener("DOMContentLoaded", () => {
  const testBtn = document.getElementById("sendTestBtn");
  if (testBtn) {
    testBtn.addEventListener("click", sendTestToSheet);
  }
});

function sendTestToSheet() {
  const testData = [
    {
      invoiceCode: "TEST-1001",
      lineId: "001",
      product: "Test Mug",
      gender: "ولد",
      designCode: "HERO-001",
      childName: "زياد",
      image1: "https://example.com/image1.jpg",
      image2: "https://example.com/image2.jpg",
      notes: "ده طلب تجريبي"
    }
  ];

  fetch("https://script.google.com/macros/s/AKfycbzd-Dkvz9qMEeqqz7i8f5m61hBPyyliAUiyuT01O3S8WS485pq1suzc3zUuWfaoDqpp/exec", {
    method: "POST",
    body: JSON.stringify({ contents: testData }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => console.log("✅ تم الإرسال:", data))
  .catch(err => console.error("❌ حصل خطأ:", err));
}
