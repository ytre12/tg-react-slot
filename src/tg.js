function tgInit() {
  const tg = window.Telegram?.WebApp;

  if (!tg) return;

  tg.ready();
  return tg;
}

export default tgInit();
