# Суперинтеллект · бизнес сайтының шаблоны

Бір беттік сайт: қызметтер, бағалар, пікірлер, WhatsApp батырмасы, Telegram-бот сілтемесі. Телефонға бейімделген. Cloudflare-де тегін тұрады.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/zerdebekbolatova/superintellekt-sait)

## Іске қосу (телефоннан, 10–15 минут)

1. Жоғарыдағы **Deploy to Cloudflare** батырмасын басыңыз.
2. Cloudflare мен GitHub-қа кіріңіз → репо атауын қалдырыңыз → **Create and deploy**. Шаблон сіздің GitHub-қа көшеді.
3. 1–2 минуттан кейін `superintellekt-sait.<атыңыз>.workers.dev` ашылады, әзірге мысал мәтінімен.
4. Claude → Code → сіздің репо → «public/config.js-ті менің бизнесіме ауыстыр: [бриф]. Басқа файлды өзгертпе».
5. Агент біткенде → Create PR → Merge. 1–2 минуттан сайт жаңарады.

## Өз бизнесіңізге ауыстыру

Өзгертетін жалғыз файл: [`public/config.js`](public/config.js): атау, мәтін, қызметтер, бағалар, пікірлер, WhatsApp нөмірі, бот, мекенжай, түс.
