const TG = window.Telegram?.WebApp;

if (TG) {
  TG.ready();
}

export default TG;
