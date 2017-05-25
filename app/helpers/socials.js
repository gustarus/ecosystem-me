let triggered = false;
export default {
  renderWidgets() {
    if (!triggered) {
      const script = document.createElement('script');
      script.src = '//platform.twitter.com/widgets.js';
      document.head.appendChild(script);
    } else {
      twttr.widgets.load();
    }
  }
};
