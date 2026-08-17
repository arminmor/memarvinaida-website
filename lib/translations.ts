export type Lang = "en" | "fa";

export interface Translations {
  brand: string;
  navAbout: string; navGallery: string; navMemory: string; navNews: string; navCta: string;
  heroKicker: string;
  heroTitle: string;
  heroDates: string;
  heroIntro: string;
  heroCta1: string; heroCta2: string;
  aboutKicker: string; aboutTitle: string;
  aboutIntro: string;
  arvinName: string;
  arvinBio: string;
  aidaName: string;
  aidaBio: string;
  aboutLoss: string;
  galleryKicker: string; galleryTitle: string;
  memoryKicker: string; memoryTitle: string;
  memoryIntro: string;
  card1Tag: string; card1Title: string;
  card1Body: string;
  instagram: string; facebook: string;
  card2Tag: string; card2Title: string;
  card2Body: string;
  card2Cta: string;
  card3Tag: string; card3Title: string;
  card3Body: string;
  card3Cta: string;
  card4Tag: string; card4Title: string;
  card4Body: string;
  card4Cta: string;
  card5Tag: string; card5Title: string;
  card5Body: string;
  card5Cta1: string; card5Cta2: string;
  bookletTag: string; bookletTitle: string;
  bookletSubtitle: string;
  labelName: string; placeholderName: string;
  labelRelation: string; placeholderRelation: string;
  labelMessage: string; placeholderMessage: string;
  submitLabel: string; submitLabelDone: string;
  thanks: string;
  newsKicker: string; newsTitle: string;
  news1Tag: string; news1Date: string; news1Title: string;
  news1Body: string;
  news2Tag: string; news2Date: string; news2Title: string;
  news2Body: string;
  news3Tag: string; news3Date: string; news3Title: string;
  news3Body: string;
  contactTag1: string;
  contactEtsLine: string;
  contactEtsContribute: string; contactEtsQuestions: string;
  contactTag2: string;
  contactAssocContact: string; contactAssocFacebook: string; contactAssocDonate: string;
  footer: string;
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  en: {
    brand: "Arvin & Aida",
    navAbout: "Their Story", navGallery: "In Pictures", navMemory: "Keep Their Memory Alive", navNews: "News", navCta: "Leave a note",
    heroKicker: "In loving memory",
    heroTitle: "Arvin Morattab & Aida Farzaneh",
    heroDates: "August 1, 1984 – January 8, 2020 · November 9, 1986 – January 8, 2020",
    heroIntro: "Arvin and Aida were among the 176 people killed when Flight PS752 was shot down near Tehran on January 8, 2020. This is a place to remember them, and to keep their memory alive.",
    heroCta1: "Leave a note", heroCta2: "Read their story",
    aboutKicker: "Their Story", aboutTitle: "Sanandaj to Montréal",
    aboutIntro: "Arvin was born on August 1, 1984, in Sanandaj — the capital of Iran's Kurdistan Province — together with his twin brother, Armin. Aida Farzaneh was born on November 9, 1986, in the same city. They met in Iran, and in 2011 they married in Montréal, where they had both come to build their careers.",
    arvinName: "Arvin Morattab",
    arvinBio: "Arvin earned his PhD in Electrical Engineering from École de technologie supérieure (ÉTS) in Montréal in 2018. He carried Sanandaj with him wherever he went, and stayed close to his twin brother, Armin, throughout his life.",
    aidaName: "Aida Farzaneh",
    aidaBio: "Aida earned her PhD in Construction Engineering from ÉTS in 2019. She built a life and a career in Montréal alongside Arvin, the city where they married in 2011.",
    aboutLoss: "On January 8, 2020, Arvin and Aida were killed alongside 176 others when Flight PS752 was shot down shortly after takeoff from Tehran. In their memory, ÉTS established the Scholarship in Memory of Aida Farzaneh & Arvin Morattab, supporting students who follow the path they built.",
    galleryKicker: "In Pictures", galleryTitle: "Their Story in Pictures",
    memoryKicker: "Keep Their Memory Alive", memoryTitle: "Ways to remember Arvin and Aida",
    memoryIntro: "Their memory lives on through the people who carry it forward. Here are ways to be part of that.",
    card1Tag: "Social media", card1Title: "Share their memory",
    card1Body: "Post a memory, a photo, or a thought about Arvin and Aida on social media with #memarvinaida, so their story keeps being told.",
    instagram: "Instagram", facebook: "Facebook",
    card2Tag: "Memorial booklet", card2Title: "Leave a note",
    card2Body: "Write a message in the memorial booklet below. Every note becomes part of how Arvin and Aida are remembered here.",
    card2Cta: "Go to booklet",
    card3Tag: "Photos & videos", card3Title: "Send us a memory",
    card3Body: "If you have a photo or video of Arvin or Aida you'd like to share, send it to us and we'll add it to their story.",
    card3Cta: "Get in touch",
    card4Tag: "ÉTS scholarship", card4Title: "Give to their scholarship",
    card4Body: "The Scholarship in Memory of Aida Farzaneh & Arvin Morattab supports students at École de technologie supérieure (ÉTS) in Montréal.",
    card4Cta: "Contribute at ÉTS",
    card5Tag: "Association of Families of Flight PS752 Victims", card5Title: "Join the fight for justice",
    card5Body: "Families of the 176 victims continue to seek accountability and justice for Flight PS752. Become a member of the Association, or support its work.",
    card5Cta1: "Become a member", card5Cta2: "Donate",
    bookletTag: "Memorial booklet", bookletTitle: "Leave a note for Arvin and Aida",
    bookletSubtitle: "Your message will stay here as part of their memorial.",
    labelName: "Your name", placeholderName: "Name",
    labelRelation: "Your connection to them", placeholderRelation: "Friend, colleague, family...",
    labelMessage: "Your message", placeholderMessage: "Share a memory or a message...",
    submitLabel: "Add my note", submitLabelDone: "Note added",
    thanks: "Thank you — your note has been added to the memorial booklet.",
    newsKicker: "Latest News", newsTitle: "Updates",
    news1Tag: "Legal", news1Date: "March 27, 2026", news1Title: "ICAO adopts Annex 13 reform",
    news1Body: "After six years of advocacy by the Association of Families of Flight PS752 Victims, ICAO adopted Amendment 20 to Annex 13. The same day, four states filed their Counter-Memorial with the ICJ in response to Iran's appeal. The case remains active.",
    news2Tag: "Scholarship", news2Date: "Winter 2026", news2Title: "Farzaneh-Morattab Award at ÉTS",
    news2Body: "The $2,000 Farzaneh-Morattab Award, granted for a master's thesis at ÉTS, closed its Winter 2026 application period. The scholarship continues in memory of Aida and Arvin.",
    news3Tag: "Anniversary", news3Date: "January 8", news3Title: "Sixth anniversary memorial",
    news3Body: "January 8, 2026 marked six years since Flight PS752 was shot down. The program for the 2027 memorial has not yet been announced.",
    contactTag1: "Scholarship & contact",
    contactEtsLine: "Scholarship in Memory of Aida Farzaneh & Arvin Morattab, École de technologie supérieure (ÉTS), Montréal.",
    contactEtsContribute: "Contribute:", contactEtsQuestions: "Questions:",
    contactTag2: "Association of Families of Flight PS752 Victims",
    contactAssocContact: "Contact:", contactAssocFacebook: "Facebook:", contactAssocDonate: "Donate:",
    footer: "In loving memory of Arvin Morattab (1984–2020) and Aida Farzaneh (1986–2020). Share their story with #memarvinaida."
  },
  fa: {
    brand: "آروین و آیدا",
    navAbout: "داستان زندگی", navGallery: "تصاویر", navMemory: "یاد آن‌ها را زنده نگه دارید", navNews: "اخبار", navCta: "یادداشت بگذارید",
    heroKicker: "به یاد گرامی‌شان",
    heroTitle: "آروین مرتب و آیدا فرزانه",
    heroDates: "۱ اوت ۱۹۸۴ – ۸ ژانویه ۲۰۲۰ · ۹ نوامبر ۱۹۸۶ – ۸ ژانویه ۲۰۲۰",
    heroIntro: "آروین و آیدا از میان ۱۷۶ نفری بودند که در ۸ ژانویه ۲۰۲۰ با سرنگونی پرواز PS752 در نزدیکی تهران جان باختند. این صفحه محلی است برای یادآوری آن‌ها و زنده نگه داشتن خاطره‌شان.",
    heroCta1: "یادداشت بگذارید", heroCta2: "داستان زندگی‌شان را بخوانید",
    aboutKicker: "داستان زندگی", aboutTitle: "از سنندج تا مونترال",
    aboutIntro: "آروین در ۱ اوت ۱۹۸۴ در سنندج، مرکز استان کردستان ایران، همراه با برادر دوقلویش آرمین به دنیا آمد. آیدا فرزانه نیز در ۹ نوامبر ۱۹۸۶ در همان شهر متولد شد. آن‌ها در ایران با هم آشنا شدند و در سال ۲۰۱۱ در مونترال، جایی که هر دو برای ساختن آینده‌ی شغلی خود به آنجا رفته بودند، ازدواج کردند.",
    arvinName: "آروین مرتب",
    arvinBio: "آروین در سال ۲۰۱۸ دکترای مهندسی برق خود را از دانشگاه ای‌تی‌اس (ÉTS) مونترال دریافت کرد. او هر کجا که می‌رفت سنندج را با خود همراه داشت و در تمام زندگی‌اش با برادر دوقلویش آرمین رابطه‌ای نزدیک داشت.",
    aidaName: "آیدا فرزانه",
    aidaBio: "آیدا در سال ۲۰۱۹ دکترای مهندسی عمران خود را از ای‌تی‌اس دریافت کرد. او در کنار آروین در مونترال، شهری که در سال ۲۰۱۱ در آن ازدواج کردند، زندگی و مسیر شغلی خود را ساخت.",
    aboutLoss: "در ۸ ژانویه ۲۰۲۰، آروین و آیدا به همراه ۱۷۶ نفر دیگر جان خود را از دست دادند، زمانی که پرواز PS752 اندکی پس از برخاستن از تهران سرنگون شد. به یاد آن‌ها، دانشگاه ای‌تی‌اس بورسیه‌ی «یادبود آیدا فرزانه و آروین مرتب» را بنیان نهاد تا از دانشجویانی که مسیر آن‌ها را دنبال می‌کنند حمایت کند.",
    galleryKicker: "تصاویر", galleryTitle: "داستان زندگی‌شان در قاب تصویر",
    memoryKicker: "یاد آن‌ها را زنده نگه دارید", memoryTitle: "راه‌های به یاد ماندن آروین و آیدا",
    memoryIntro: "خاطره‌ی آن‌ها در وجود کسانی که آن را زنده نگه می‌دارند ادامه دارد. این‌ها راه‌هایی هستند که می‌توانید بخشی از آن باشید.",
    card1Tag: "شبکه‌های اجتماعی", card1Title: "خاطره‌شان را به اشتراک بگذارید",
    card1Body: "خاطره‌ای، عکسی یا یادداشتی درباره‌ی آروین و آیدا را با هشتگ #memarvinaida در شبکه‌های اجتماعی منتشر کنید تا داستان آن‌ها همچنان گفته شود.",
    instagram: "اینستاگرام", facebook: "فیسبوک",
    card2Tag: "دفتر یادبود", card2Title: "یادداشت بگذارید",
    card2Body: "پیامی در دفتر یادبود زیر بنویسید. هر یادداشت بخشی از یاد و خاطره‌ای می‌شود که از آروین و آیدا در اینجا نگه‌داری می‌شود.",
    card2Cta: "رفتن به دفتر یادبود",
    card3Tag: "عکس و ویدیو", card3Title: "خاطره‌ای برای ما بفرستید",
    card3Body: "اگر عکس یا ویدیویی از آروین یا آیدا دارید که می‌خواهید به اشتراک بگذارید، آن را برای ما ارسال کنید تا به داستان زندگی‌شان اضافه کنیم.",
    card3Cta: "تماس با ما",
    card4Tag: "بورسیه‌ی ای‌تی‌اس", card4Title: "به بورسیه‌ی آن‌ها کمک کنید",
    card4Body: "بورسیه‌ی «یادبود آیدا فرزانه و آروین مرتب» از دانشجویان دانشگاه ای‌تی‌اس (ÉTS) در مونترال حمایت می‌کند.",
    card4Cta: "کمک مالی از طریق ای‌تی‌اس",
    card5Tag: "انجمن خانواده‌های جان‌باختگان پرواز PS752", card5Title: "به مبارزه برای عدالت بپیوندید",
    card5Body: "خانواده‌های ۱۷۶ جان‌باخته همچنان در پی پاسخ‌گویی و عدالت برای پرواز PS752 هستند. به عضویت انجمن درآیید یا از فعالیت‌های آن حمایت کنید.",
    card5Cta1: "عضویت در انجمن", card5Cta2: "کمک مالی",
    bookletTag: "دفتر یادبود", bookletTitle: "برای آروین و آیدا یادداشتی بگذارید",
    bookletSubtitle: "پیام شما به‌عنوان بخشی از یادبود آن‌ها اینجا باقی خواهد ماند.",
    labelName: "نام شما", placeholderName: "نام",
    labelRelation: "نسبت شما با آن‌ها", placeholderRelation: "دوست، همکار، خانواده...",
    labelMessage: "پیام شما", placeholderMessage: "خاطره یا پیامی بنویسید...",
    submitLabel: "ثبت یادداشت", submitLabelDone: "یادداشت ثبت شد",
    thanks: "سپاسگزاریم — یادداشت شما به دفتر یادبود افزوده شد.",
    newsKicker: "آخرین اخبار", newsTitle: "به‌روزرسانی‌ها",
    news1Tag: "حقوقی", news1Date: "۲۷ مارس ۲۰۲۶", news1Title: "ایکائو اصلاحیه‌ی ضمیمه‌ی ۱۳ را تصویب کرد",
    news1Body: "پس از شش سال پیگیری از سوی انجمن خانواده‌های جان‌باختگان پرواز PS752، ایکائو اصلاحیه‌ی شماره‌ی ۲۰ ضمیمه‌ی ۱۳ را تصویب کرد. در همان روز، چهار کشور لایحه‌ی متقابل خود را در پاسخ به تجدیدنظرخواهی ایران به دیوان بین‌المللی دادگستری ارائه کردند. این پرونده همچنان در جریان است.",
    news2Tag: "بورسیه", news2Date: "زمستان ۲۰۲۶", news2Title: "جایزه‌ی فرزانه-مرتب در ای‌تی‌اس",
    news2Body: "جایزه‌ی ۲٬۰۰۰ دلاری فرزانه-مرتب که برای پایان‌نامه‌ی کارشناسی ارشد در ای‌تی‌اس اهدا می‌شود، دوره‌ی ثبت‌نام زمستان ۲۰۲۶ خود را به پایان رساند. این بورسیه همچنان به یاد آیدا و آروین ادامه دارد.",
    news3Tag: "سالگرد", news3Date: "۸ ژانویه", news3Title: "مراسم ششمین سالگرد",
    news3Body: "۸ ژانویه‌ی ۲۰۲۶ ششمین سالگرد سرنگونی پرواز PS752 بود. برنامه‌ی مراسم سال ۲۰۲۷ هنوز اعلام نشده است.",
    contactTag1: "بورسیه و اطلاعات تماس",
    contactEtsLine: "بورسیه‌ی یادبود آیدا فرزانه و آروین مرتب، دانشگاه ای‌تی‌اس (ÉTS)، مونترال.",
    contactEtsContribute: "کمک مالی:", contactEtsQuestions: "پرسش‌ها:",
    contactTag2: "انجمن خانواده‌های جان‌باختگان پرواز PS752",
    contactAssocContact: "تماس:", contactAssocFacebook: "فیسبوک:", contactAssocDonate: "کمک مالی:",
    footer: "به یاد گرامی آروین مرتب (۱۹۸۴–۲۰۲۰) و آیدا فرزانه (۱۹۸۶–۲۰۲۰). داستان آن‌ها را با هشتگ #memarvinaida به اشتراک بگذارید."
  }
};

export interface GalleryImage {
  src: string;
  alt: string;
  colSpan: number;
  rowSpan: number;
  pos: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "/assets/together-4.jpg", alt: "Arvin and Aida in Montréal", colSpan: 2, rowSpan: 2, pos: "50% 50%" },
  { src: "/assets/aida-3.jpg", alt: "Aida in the snow", colSpan: 1, rowSpan: 1, pos: "50% 20%" },
  { src: "/assets/together-9.jpg", alt: "Arvin and Aida at home", colSpan: 1, rowSpan: 1, pos: "50% 25%" },
  { src: "/assets/arvin-child.jpg", alt: "Arvin as a child with his twin brother Armin", colSpan: 1, rowSpan: 1, pos: "50% 50%" },
  { src: "/assets/together-1.jpg", alt: "Arvin and Aida travelling together", colSpan: 1, rowSpan: 1, pos: "50% 20%" },
  { src: "/assets/together-6.jpg", alt: "Arvin and Aida by the water", colSpan: 2, rowSpan: 1, pos: "50% 30%" },
  { src: "/assets/together-2.jpg", alt: "Aida", colSpan: 1, rowSpan: 1, pos: "50% 50%" }
];
