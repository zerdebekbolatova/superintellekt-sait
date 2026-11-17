// Бұл файлға тимеңіз. Мәтін мен баға: config.js
(function () {
  var s = window.SITE || {};
  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  var setText = function (id, text) { var n = $(id); if (n) n.textContent = text || ""; };
  var list = function (v) { return Array.isArray(v) ? v : []; };

  document.title = [s.name, s.city].filter(Boolean).join(" · ") || "Сайт";
  var meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", s.about || s.title || "");
  if (/^#[0-9a-fA-F]{3,8}$/.test(s.color || "")) {
    document.documentElement.style.setProperty("--accent", s.color);
  }

  setText("brand", s.name);
  setText("city", s.city);
  setText("title", s.title);
  setText("about", s.about);
  setText("address", s.address);
  setText("hours", s.hours);
  setText("foot", "© " + new Date().getFullYear() + " " + (s.name || ""));

  var phone = String(s.whatsapp || "").replace(/\D/g, "");
  var wa = phone ? "https://wa.me/" + phone + (s.whatsappText ? "?text=" + encodeURIComponent(s.whatsappText) : "") : "";
  ["wa-top", "wa-hero", "wa-bottom"].forEach(function (id) {
    var a = $(id); if (!a) return;
    if (wa) a.href = wa; else a.hidden = true;
  });

  var bot = String(s.telegramBot || "").replace(/^@/, "").trim();
  ["tg-hero", "tg-bottom"].forEach(function (id) {
    var a = $(id); if (!a) return;
    if (bot) a.href = "https://t.me/" + bot; else a.hidden = true;
  });

  var services = $("services");
  list(s.services).forEach(function (x) {
    var c = el("article", "card");
    c.appendChild(el("h3", "", x.title));
    c.appendChild(el("p", "", x.text));
    services.appendChild(c);
  });
  if (!list(s.services).length) $("services-block").hidden = true;

  var prices = $("prices");
  list(s.prices).forEach(function (x) {
    var li = el("li");
    li.appendChild(el("span", "", x.name));
    li.appendChild(el("b", "", x.price));
    prices.appendChild(li);
  });
  if (!list(s.prices).length) $("prices-block").hidden = true;

  var reviews = $("reviews");
  list(s.reviews).forEach(function (x) {
    var c = el("article", "card");
    c.appendChild(el("p", "quote", "«" + x.text + "»"));
    c.appendChild(el("p", "who", x.name));
    reviews.appendChild(c);
  });
  if (!list(s.reviews).length) $("reviews-block").hidden = true;
})();
