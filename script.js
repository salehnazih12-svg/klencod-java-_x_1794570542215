// ============================================================
// Welcome Page Logic
// ============================================================

const helloBtn = document.getElementById('helloBtn');
const message = document.getElementById('message');

if (helloBtn && message) {
  helloBtn.addEventListener('click', () => {
    const messages = [
      'مرحباً بك! 👋',
      'رائع! بدأت رحلتك في تطوير الويب 🚀',
      'استمر في التعلم، أنت تبلي حسناً ⭐',
      'جرب تعديل الملفات لرؤية التغييرات ✨'
    ];
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMsg;
  });
}

console.log('✅ KlencodIDE Web Project loaded successfully');
