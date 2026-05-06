function startApp() {
  alert("Welcome to Acoin 🚀");
}

// تسجيل Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker Registered"));
}
