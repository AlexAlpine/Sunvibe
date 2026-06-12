import { useState } from 'react';
import styles from './Home.module.css';

type Language = 'ua' | 'ru' | 'de';

type Translation = {
  languageLabel: string;
  nav: {
    home: string;
    about: string;
    services: string;
    contacts: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    button: string;
  };
  footer: {
    copyright: string;
    impressum: string;
    privacy: string;
  };
};

const translations: Record<Language, Translation> = {
  ua: {
    languageLabel: 'Мова',
    nav: {
      home: 'Головна',
      about: 'Про нас',
      services: 'Послуги',
      contacts: 'Контакти',
    },
    hero: {
      eyebrow: 'Туристичні консультації та організація подорожей',
      title: 'Sunvibe Travel - ваш надійний партнер для продуманих подорожей.',
      text: 'Ми створюємо індивідуальні travel-досвіди з персональною підтримкою, уважним плануванням і сучасними рішеннями для мандрівників.',
      cta: 'Замовити консультацію',
    },
    about: {
      eyebrow: 'Про нас',
      title: 'Особисті поради, уважний сервіс і планування подорожей навколо ваших потреб.',
      body: [
        'Sunvibe Travel - сучасна туристична агенція, що спеціалізується на індивідуальних туристичних консультаціях і надійній організації подорожей. Ми допомагаємо перейти від ідеї до добре спланованої поїздки з ясністю та турботою.',
        'Наш підхід поєднує клієнтський сервіс, практичні знання про напрямки та цифрові туристичні рішення, щоб кожна подорож була комфортною, персональною та легкою для насолоди.',
      ],
    },
    services: {
      eyebrow: 'Послуги',
      title: 'Підтримка для мандрівників, турів і сучасної туристичної комунікації.',
      items: [
        {
          title: 'Індивідуальні туристичні консультації та планування',
          description:
            'Персональна туристична консультація, яка перетворює ваші терміни, бюджет і стиль подорожі на впевнений план.',
        },
        {
          title: 'Посередництво в турах і відпочинку',
          description:
            'Надійна підтримка в організації відпусток, турів і підібраних travel-досвідів від першої ідеї до бронювання.',
        },
        {
          title: 'Онлайн-маркетинг і створення туристичного контенту',
          description:
            'Концепції travel-контенту для TikTok, Instagram і YouTube, які поєднують напрямки з сучасною аудиторією.',
        },
      ],
    },
    contact: {
      eyebrow: 'Контакти',
      title: 'Готові спланувати наступну подорож?',
      name: "Ім'я",
      namePlaceholder: "Ваше ім'я",
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      message: 'Повідомлення',
      messagePlaceholder: 'Розкажіть нам про ваші плани подорожі',
      button: 'Надіслати повідомлення',
    },
    footer: {
      copyright: 'Всі права захищено',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
    },
  },
  ru: {
    languageLabel: 'Язык',
    nav: {
      home: 'Главная',
      about: 'О нас',
      services: 'Услуги',
      contacts: 'Контакты',
    },
    hero: {
      eyebrow: 'Туристические консультации и организация поездок',
      title: 'Sunvibe Travel - ваш надежный партнер для продуманных путешествий.',
      text: 'Мы создаем индивидуальные travel-впечатления с персональным сопровождением, внимательным планированием и современными решениями для путешественников.',
      cta: 'Заказать консультацию',
    },
    about: {
      eyebrow: 'О нас',
      title: 'Персональные советы, заботливый сервис и планирование поездок вокруг ваших целей.',
      body: [
        'Sunvibe Travel - современное туристическое агентство, которое специализируется на индивидуальных туристических консультациях и надежной организации поездок. Мы помогаем пройти путь от идеи до хорошо спланированного путешествия понятно и спокойно.',
        'Наш подход объединяет заботу о клиенте, практические знания направлений и цифровые туристические решения, чтобы каждая поездка была комфортной, персональной и легкой.',
      ],
    },
    services: {
      eyebrow: 'Услуги',
      title: 'Поддержка для путешественников, туров и современной туристической коммуникации.',
      items: [
        {
          title: 'Индивидуальные туристические консультации и планирование',
          description:
            'Персональная туристическая консультация, которая превращает ваши сроки, бюджет и стиль путешествия в понятный план.',
        },
        {
          title: 'Посредничество в турах и отдыхе',
          description:
            'Надежная поддержка в организации отпусков, туров и подобранных travel-впечатлений от первой идеи до бронирования.',
        },
        {
          title: 'Онлайн-маркетинг и создание туристического контента',
          description:
            'Концепции travel-контента для TikTok, Instagram и YouTube, которые связывают направления с современной аудиторией.',
        },
      ],
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Готовы спланировать следующую поездку?',
      name: 'Имя',
      namePlaceholder: 'Ваше имя',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      message: 'Сообщение',
      messagePlaceholder: 'Расскажите нам о ваших планах путешествия',
      button: 'Отправить сообщение',
    },
    footer: {
      copyright: 'Все права защищены',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
    },
  },
  de: {
    languageLabel: 'Sprache',
    nav: {
      home: 'Home',
      about: 'Über uns',
      services: 'Services',
      contacts: 'Kontakt',
    },
    hero: {
      eyebrow: 'Tourismusberatung und Reisevermittlung',
      title: 'Sunvibe Travel ist Ihr zuverlässiger Partner für smartere Reisen.',
      text: 'Wir gestalten maßgeschneiderte Reiseerlebnisse mit persönlicher Beratung, durchdachter Planung und modernen Lösungen für Reisende von heute.',
      cta: 'Beratung buchen',
    },
    about: {
      eyebrow: 'Über uns',
      title: 'Persönliche Beratung, aufmerksame Betreuung und Reiseplanung nach Ihren Wünschen.',
      body: [
        'Sunvibe Travel ist eine moderne Reiseagentur mit Fokus auf individueller Tourismusberatung und zuverlässiger Reisevermittlung. Wir begleiten Kundinnen und Kunden von der ersten Inspiration bis zur klar geplanten Reise.',
        'Unser Ansatz verbindet kundenorientierten Service, praktisches Destinationswissen und digitale Reiselösungen, damit jede Reise reibungslos, persönlich und angenehm wird.',
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Unterstützung für Reisende, Touren und moderne Reise-Kommunikation.',
      items: [
        {
          title: 'Individuelle Reiseberatung & Planung',
          description:
            'Persönliche Tourismusberatung, die Reisezeit, Budget und Reisestil in einen klaren und verlässlichen Plan übersetzt.',
        },
        {
          title: 'Tour- & Urlaubsvermittlung',
          description:
            'Zuverlässige Unterstützung bei Urlauben, Touren und kuratierten Reiseerlebnissen von der ersten Idee bis zur Buchung.',
        },
        {
          title: 'Online-Marketing & Travel Content Creation',
          description:
            'Travel-Content-Konzepte für TikTok, Instagram und YouTube, die Reiseziele mit modernen Zielgruppen verbinden.',
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Bereit, Ihre nächste Reise zu planen?',
      name: 'Name',
      namePlaceholder: 'Ihr Name',
      email: 'E-Mail',
      emailPlaceholder: 'sie@example.com',
      message: 'Nachricht',
      messagePlaceholder: 'Erzählen Sie uns von Ihren Reiseplänen',
      button: 'Nachricht senden',
    },
    footer: {
      copyright: 'Alle Rechte vorbehalten',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
    },
  },
};

const languageOptions: { label: string; value: Language }[] = [
  { label: 'UA', value: 'ua' },
  { label: 'RU', value: 'ru' },
  { label: 'DE', value: 'de' },
];

type HeaderProps = {
  currentLang: Language;
  onLanguageChange: (language: Language) => void;
  translation: Translation;
};

function Header({ currentLang, onLanguageChange, translation }: HeaderProps) {
  const navigationLinks = [
    { label: translation.nav.home, href: '#home' },
    { label: translation.nav.about, href: '#about' },
    { label: translation.nav.services, href: '#services' },
    { label: translation.nav.contacts, href: '#contact' },
  ];

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#home" aria-label="Sunvibe Travel home">
        Sunvibe Travel
      </a>

      <nav className={styles.nav} aria-label="Primary navigation">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className={styles.contactShortcut} href="tel:+491624583303">
        +49 162 4583303
      </a>

      <label className={styles.languageSelect}>
        <span>{translation.languageLabel}</span>
        <select
          value={currentLang}
          onChange={(event) => onLanguageChange(event.target.value as Language)}
          aria-label={translation.languageLabel}
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </header>
  );
}

function HeroSection({ translation }: { translation: Translation['hero'] }) {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <div>
          <p className={styles.eyebrow}>{translation.eyebrow}</p>
          <h1>{translation.title}</h1>
          <p className={styles.heroText}>{translation.text}</p>
          <a className={styles.primaryCta} href="#contact">
            {translation.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ translation }: { translation: Translation['about'] }) {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{translation.eyebrow}</p>
        <h2>{translation.title}</h2>
      </div>
      <div className={styles.aboutGrid}>
        {translation.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function ServicesSection({ translation }: { translation: Translation['services'] }) {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{translation.eyebrow}</p>
        <h2>{translation.title}</h2>
      </div>

      <div className={styles.servicesGrid}>
        {translation.items.map((service) => (
          <article className={styles.serviceCard} key={service.title}>
            <span className={styles.serviceMarker} aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ translation }: { translation: Translation['contact'] }) {
  return (
    <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{translation.eyebrow}</p>
        <h2>{translation.title}</h2>
      </div>

      <div className={styles.contactGrid}>
        <form className={styles.contactForm}>
          <label>
            {translation.name}
            <input type="text" name="name" placeholder={translation.namePlaceholder} />
          </label>
          <label>
            {translation.email}
            <input type="email" name="email" placeholder={translation.emailPlaceholder} />
          </label>
          <label>
            {translation.message}
            <textarea name="message" rows={5} placeholder={translation.messagePlaceholder} />
          </label>
          <button type="button">{translation.button}</button>
        </form>

        <address className={styles.contactDetails}>
          <a href="tel:+491624583303">+49 162 4583303</a>
          <a href="mailto:reisenhannover@gmail.com">reisenhannover@gmail.com</a>
          <span>Bahnhofstr. 23, 31698 Lindhorst</span>
        </address>
      </div>
    </section>
  );
}

function Footer({ translation }: { translation: Translation['footer'] }) {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright © {new Date().getFullYear()} Sunvibe Travel GbR. {translation.copyright}.
      </p>
      <div className={styles.legalLinks}>
        {/* Ссылки ведут на независимые страницы в корне домена */}
        <a href="/impressum.html" target="_blank" rel="noopener noreferrer">
          {translation.impressum}
        </a>
        <a href="/datenschutz.html" target="_blank" rel="noopener noreferrer">
          {translation.privacy}
        </a>
      </div>
    </footer>
  );
}

export function Home() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const translation = translations[currentLang];

  return (
    <div className={styles.pageShell} lang={currentLang === 'ua' ? 'uk' : currentLang}>
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        translation={translation}
      />
      <main>
        <HeroSection translation={translation.hero} />
        <AboutSection translation={translation.about} />
        <ServicesSection translation={translation.services} />
        <ContactSection translation={translation.contact} />
      </main>
      <Footer translation={translation.footer} />
    </div>
  );
}
