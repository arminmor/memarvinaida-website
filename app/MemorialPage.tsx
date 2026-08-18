"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { GALLERY_IMAGES, TRANSLATIONS, type Lang } from "@/lib/translations";

interface BookletNote {
  _id: string;
  name: string;
  relation: string;
  message: string;
  createdAt: string;
}

export default function MemorialPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [formName, setFormName] = useState("");
  const [formRelation, setFormRelation] = useState("");
  const [formNote, setFormNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notes, setNotes] = useState<BookletNote[]>([]);
  const [notesLoading, setNotesLoading] = useState(true);
  const [spiralHeight, setSpiralHeight] = useState(4000);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const t = TRANSLATIONS[lang];
  const dir = lang === "fa" ? "rtl" : "ltr";
  const musicSide = lang === "fa" ? "left" : "right";

  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setNotesLoading(true);
        const res = await fetch('/api/booklet/list');
        const data = await res.json();
        setNotes(data.notes || []);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      } finally {
        setNotesLoading(false);
      }
    };

    fetchNotes();
  }, []);

  useEffect(() => {
    const measure = () => setSpiralHeight(document.documentElement.scrollHeight);
    measure();
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    const interval = setInterval(measure, 800);
    const stop = setTimeout(() => clearInterval(interval), 4000);

    const el = audioRef.current;
    if (el) {
      el.muted = true;
      el.play().then(() => setIsPlaying(true)).catch(() => {});
    }

    return () => {
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
      clearInterval(interval);
      clearTimeout(stop);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, nextImage, prevImage]);

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
    } else {
      el.muted = false;
      el.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleSubmit = async () => {
    if (!formName.trim() || !formNote.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/booklet/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          relation: formRelation,
          message: formNote,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormName("");
        setFormRelation("");
        setFormNote("");
        const refreshRes = await fetch('/api/booklet/list');
        const refreshData = await refreshRes.json();
        setNotes(refreshData.notes || []);
        setTimeout(() => setSubmitted(false), 2000);
      }
    } catch (error) {
      console.error('Failed to submit note:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const current = lightboxIndex !== null ? GALLERY_IMAGES[lightboxIndex] : null;

  return (
    <div style={{ direction: dir }} lang={lang}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: spiralHeight,
          zIndex: -1,
          backgroundImage: "url('/assets/spiral-pattern.svg?v=5')",
          backgroundRepeat: "repeat-y",
          backgroundPosition: "top center",
          backgroundSize: "100% 400px",
          pointerEvents: "none",
        }}
      />

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(20,18,16,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 40px",
          gap: 16,
        }}
      >
        <span style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 22, color: "#f3ede4" }}>
          {t.brand}
        </span>
        <div className="mem-nav-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <a className="mem-nav-link" href="#about">{t.navAbout}</a>
          <a className="mem-nav-link" href="#gallery">{t.navGallery}</a>
          <a className="mem-nav-link" href="#memory">{t.navMemory}</a>
          <a className="mem-nav-link" href="#news">{t.navNews}</a>
          <a
            href="https://www.instagram.com/memarvinaida/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            style={{ color: "rgba(243,237,228,0.85)", display: "flex" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/memarvinaida"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
            style={{ color: "rgba(243,237,228,0.85)", display: "flex" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999, overflow: "hidden" }}>
            <button type="button" className={`mem-lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
            <button type="button" className={`mem-lang-btn ${lang === "fa" ? "active" : ""}`} onClick={() => setLang("fa")}>فا</button>
          </div>
          <a href="#memory-booklet" className="mem-btn-primary">{t.navCta}</a>
        </div>
      </nav>

      <section style={{ position: "relative", minHeight: 640, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/together-5.jpg"
            alt="Arvin and Aida together, in autumn"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 30%", filter: "grayscale(0.5) brightness(0.5) contrast(1.05)" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(20,18,16,0.94) 0%, rgba(20,18,16,0.55) 55%, rgba(60,20,18,0.25) 100%)",
          }}
        />
        <div style={{ position: "relative", padding: "80px 40px", maxWidth: 1180, margin: "0 auto", width: "100%", boxSizing: "border-box", color: "#f3ede4" }}>
          <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.75, margin: "0 0 18px", color: "#f16657" }}>
            {t.heroKicker}
          </p>
          <h1 style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontWeight: 400, fontSize: "clamp(42px,6.5vw,74px)", margin: "0 0 20px", lineHeight: 1.15 }}>
            {t.heroTitle}
          </h1>
          <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 18, margin: "0 0 22px", opacity: 0.9 }}>
            {t.heroDates}
          </p>
          <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 16, maxWidth: "60ch", lineHeight: 1.8, margin: "0 0 32px", opacity: 0.85 }}>
            {t.heroIntro}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#memory-booklet" className="mem-btn-primary">{t.heroCta1}</a>
            <a href="#about" className="mem-btn-secondary">{t.heroCta2}</a>
          </div>
        </div>
      </section>

      <section id="about" className="mem-section">
        <p className="mem-kicker">{t.aboutKicker}</p>
        <h2 className="mem-h2">{t.aboutTitle}</h2>
        <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 17, lineHeight: 1.85, maxWidth: "74ch", color: "rgba(243,237,228,0.85)", margin: "0 0 56px" }}>
          {t.aboutIntro}
        </p>

        <div className="mem-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 56 }}>
          <div>
            <div style={{ borderRadius: 18, overflow: "hidden", marginBottom: 24 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/arvin-1.jpg"
                alt="Arvin Morattab"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: "50% 20%", filter: "grayscale(0.35) contrast(1.05) brightness(0.92)" }}
              />
            </div>
            <h3 style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontWeight: 400, fontSize: 26, margin: "0 0 10px", color: "#f3ede4" }}>
              {t.arvinName}
            </h3>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 15.5, lineHeight: 1.85, color: "rgba(243,237,228,0.75)", margin: 0 }}>
              {t.arvinBio}
            </p>
          </div>
          <div>
            <div style={{ borderRadius: 18, overflow: "hidden", marginBottom: 24 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/aida-1.jpg"
                alt="Aida Farzaneh"
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: "50% 20%", filter: "grayscale(0.35) contrast(1.05) brightness(0.92)" }}
              />
            </div>
            <h3 style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontWeight: 400, fontSize: 26, margin: "0 0 10px", color: "#f3ede4" }}>
              {t.aidaName}
            </h3>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 15.5, lineHeight: 1.85, color: "rgba(243,237,228,0.75)", margin: 0 }}>
              {t.aidaBio}
            </p>
          </div>
        </div>

        <div className="mem-card">
          <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 15.5, lineHeight: 1.85, color: "rgba(243,237,228,0.85)", margin: 0 }}>
            {t.aboutLoss}
          </p>
        </div>
      </section>

      <section id="gallery" className="mem-section">
        <p className="mem-kicker">{t.galleryKicker}</p>
        <h2 className="mem-h2">{t.galleryTitle}</h2>
        <div className="mem-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: 180, gap: 14 }}>
          {GALLERY_IMAGES.map((photo, i) => (
            <div
              key={photo.src}
              style={{ gridColumn: `span ${photo.colSpan}`, gridRow: `span ${photo.rowSpan}`, borderRadius: 18, overflow: "hidden", cursor: "pointer" }}
              onClick={() => setLightboxIndex(i)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: photo.pos, filter: "grayscale(0.35) brightness(0.92)" }}
              />
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && current && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(10,9,8,0.96)", display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightboxIndex(null)}
            style={{ position: "absolute", top: 24, right: 28, background: "none", border: "none", color: "#f3ede4", fontSize: 32, lineHeight: 1, cursor: "pointer", fontFamily: "'Manrope',sans-serif" }}
          >
            ×
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#f3ede4", fontSize: 40, lineHeight: 1, cursor: "pointer", padding: 12, fontFamily: "'Manrope',sans-serif" }}
          >
            ‹
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            style={{ maxWidth: "88vw", maxHeight: "82vh", objectFit: "contain", borderRadius: 8 }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#f3ede4", fontSize: 40, lineHeight: 1, cursor: "pointer", padding: 12, fontFamily: "'Manrope',sans-serif" }}
          >
            ›
          </button>
          <div style={{ position: "absolute", bottom: 28, left: 0, right: 0, textAlign: "center", fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 13, color: "rgba(243,237,228,0.6)" }}>
            {lightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}

      <section id="memory" className="mem-section">
        <p className="mem-kicker">{t.memoryKicker}</p>
        <h2 className="mem-h2">{t.memoryTitle}</h2>
        <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 16, lineHeight: 1.85, maxWidth: "70ch", color: "rgba(243,237,228,0.75)", margin: "0 0 44px" }}>
          {t.memoryIntro}
        </p>

        <div className="mem-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 36 }}>
          <div className="mem-card">
            <span className="mem-tag">{t.card1Tag}</span>
            <div style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 22, color: "#f3ede4", marginBottom: 10 }}>{t.card1Title}</div>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14.5, lineHeight: 1.75, color: "rgba(243,237,228,0.7)", margin: "0 0 16px" }}>{t.card1Body}</p>
            <div style={{ display: "flex", gap: 14 }}>
              <a href="https://www.instagram.com/memarvinaida/" target="_blank" rel="noopener" className="mem-nav-link">{t.instagram}</a>
              <a href="https://www.facebook.com/memarvinaida" target="_blank" rel="noopener" className="mem-nav-link">{t.facebook}</a>
            </div>
          </div>
          <div className="mem-card">
            <span className="mem-tag">{t.card2Tag}</span>
            <div style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 22, color: "#f3ede4", marginBottom: 10 }}>{t.card2Title}</div>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14.5, lineHeight: 1.75, color: "rgba(243,237,228,0.7)", margin: "0 0 16px" }}>{t.card2Body}</p>
            <a href="#memory-booklet" className="mem-btn-secondary">{t.card2Cta}</a>
          </div>
          <div className="mem-card">
            <span className="mem-tag">{t.card3Tag}</span>
            <div style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 22, color: "#f3ede4", marginBottom: 10 }}>{t.card3Title}</div>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14.5, lineHeight: 1.75, color: "rgba(243,237,228,0.7)", margin: "0 0 16px" }}>{t.card3Body}</p>
            <a href="#contact" className="mem-btn-secondary">{t.card3Cta}</a>
          </div>
          <div className="mem-card">
            <span className="mem-tag">{t.card4Tag}</span>
            <div style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 22, color: "#f3ede4", marginBottom: 10 }}>{t.card4Title}</div>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14.5, lineHeight: 1.75, color: "rgba(243,237,228,0.7)", margin: "0 0 16px" }}>{t.card4Body}</p>
            <a href="https://activitesphilanthropie.etsmtl.ca/BOURSEINT" target="_blank" rel="noopener" className="mem-btn-secondary">{t.card4Cta}</a>
          </div>
          <div className="mem-card" style={{ gridColumn: "span 2" }}>
            <span className="mem-tag">{t.card5Tag}</span>
            <div style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 22, color: "#f3ede4", marginBottom: 10 }}>{t.card5Title}</div>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14.5, lineHeight: 1.75, color: "rgba(243,237,228,0.7)", margin: "0 0 16px" }}>{t.card5Body}</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://ps752justice.com/en/contact" target="_blank" rel="noopener" className="mem-btn-secondary">{t.card5Cta1}</a>
              <a href="https://ps752justice.com/en/donate" target="_blank" rel="noopener" className="mem-btn-secondary">{t.card5Cta2}</a>
            </div>
          </div>
        </div>

        <div id="memory-booklet" className="mem-card" style={{ padding: 44, scrollMarginTop: 80 }}>
          <span className="mem-tag">{t.bookletTag}</span>
          <h3 style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontWeight: 400, fontSize: 28, margin: "0 0 8px", color: "#f3ede4" }}>
            {t.bookletTitle}
          </h3>
          <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14.5, color: "rgba(243,237,228,0.65)", margin: "0 0 28px" }}>
            {t.bookletSubtitle}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="mem-2col">
            <div>
              <label className="mem-label" htmlFor="mem-name">{t.labelName}</label>
              <input className="mem-input" id="mem-name" placeholder={t.placeholderName} value={formName} onChange={(e) => setFormName(e.target.value)} />
            </div>
            <div>
              <label className="mem-label" htmlFor="mem-relation">{t.labelRelation}</label>
              <input className="mem-input" id="mem-relation" placeholder={t.placeholderRelation} value={formRelation} onChange={(e) => setFormRelation(e.target.value)} />
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <label className="mem-label" htmlFor="mem-note">{t.labelMessage}</label>
            <textarea className="mem-input" id="mem-note" rows={4} placeholder={t.placeholderMessage} value={formNote} onChange={(e) => setFormNote(e.target.value)} />
          </div>
          <button type="button" className="mem-btn-primary" onClick={handleSubmit} disabled={submitting || !formName.trim() || !formNote.trim()}>
            {submitting ? t.submitLabel : submitted ? t.submitLabelDone : t.submitLabel}
          </button>
          {submitted && (
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14, color: "#f16657", margin: "14px 0 0" }}>
              {t.thanks}
            </p>
          )}

          {!notesLoading && notes.length > 0 && (
            <div style={{ marginTop: 44 }}>
              <h4 style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontWeight: 400, fontSize: 20, margin: "0 0 20px", color: "#f3ede4" }}>
                Shared Memories ({notes.length})
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }} className="mem-2col">
                {notes.map((note) => (
                  <div key={note._id} style={{ padding: 16, borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 16, color: "#f3ede4", marginBottom: 4 }}>
                      {note.name}
                    </div>
                    {note.relation && (
                      <div style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 13, color: "rgba(243,237,228,0.5)", marginBottom: 10 }}>
                        {note.relation}
                      </div>
                    )}
                    <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14, lineHeight: 1.6, color: "rgba(243,237,228,0.75)", margin: 0 }}>
                      {note.message}
                    </p>
                    {note.createdAt && (
                      <div style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 12, color: "rgba(243,237,228,0.4)", marginTop: 10 }}>
                        {new Date(note.createdAt).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="news" className="mem-section">
        <p className="mem-kicker">{t.newsKicker}</p>
        <h2 className="mem-h2">{t.newsTitle}</h2>
        <div className="mem-cards" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          <div className="mem-card">
            <span className="mem-tag">{t.news1Tag}</span>
            <div style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 13, color: "rgba(243,237,228,0.5)", marginBottom: 8 }}>{t.news1Date}</div>
            <div style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 21, color: "#f3ede4", marginBottom: 10 }}>{t.news1Title}</div>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(243,237,228,0.7)", margin: 0 }}>{t.news1Body}</p>
          </div>
          <div className="mem-card">
            <span className="mem-tag">{t.news2Tag}</span>
            <div style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 13, color: "rgba(243,237,228,0.5)", marginBottom: 8 }}>{t.news2Date}</div>
            <div style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 21, color: "#f3ede4", marginBottom: 10 }}>{t.news2Title}</div>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(243,237,228,0.7)", margin: 0 }}>{t.news2Body}</p>
          </div>
          <div className="mem-card">
            <span className="mem-tag">{t.news3Tag}</span>
            <div style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 13, color: "rgba(243,237,228,0.5)", marginBottom: 8 }}>{t.news3Date}</div>
            <div style={{ fontFamily: "'Newsreader','Vazirmatn',serif", fontSize: 21, color: "#f3ede4", marginBottom: 10 }}>{t.news3Title}</div>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14, lineHeight: 1.75, color: "rgba(243,237,228,0.7)", margin: 0 }}>{t.news3Body}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mem-section" style={{ paddingBottom: 100 }}>
        <div className="mem-card mem-2col" style={{ padding: 44, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44 }}>
          <div>
            <span className="mem-tag">{t.contactTag1}</span>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(243,237,228,0.8)", margin: 0 }}>
              {t.contactEtsLine}<br />
              {t.contactEtsContribute} <a href="https://activitesphilanthropie.etsmtl.ca/BOURSEINT" target="_blank" rel="noopener">activitesphilanthropie.etsmtl.ca/BOURSEINT</a><br />
              {t.contactEtsQuestions} <a href="https://www.etsmtl.ca/en/contact" target="_blank" rel="noopener">Info-ÉTS</a>
            </p>
          </div>
          <div>
            <span className="mem-tag">{t.contactTag2}</span>
            <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 15, lineHeight: 1.85, color: "rgba(243,237,228,0.8)", margin: 0 }}>
              {t.contactAssocContact} <a href="https://ps752justice.com/en/contact" target="_blank" rel="noopener">ps752justice.com/en/contact</a><br />
              {t.contactAssocFacebook} <a href="https://facebook.com/ps752justice" target="_blank" rel="noopener">facebook.com/ps752justice</a><br />
              {t.contactAssocDonate} <a href="https://ps752justice.com/en/donate" target="_blank" rel="noopener">ps752justice.com/en/donate</a>
            </p>
          </div>
        </div>
      </section>

      <audio ref={audioRef} src="/assets/allegro-emmit-fenn.mp3" loop />
      <button
        type="button"
        aria-label="Toggle music"
        onClick={togglePlay}
        style={{
          position: "fixed",
          bottom: 24,
          [musicSide]: 24,
          zIndex: 100,
          width: 52,
          height: 52,
          borderRadius: 999,
          background: "#c8352b",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
        }}
      >
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <rect x="5" y="4" width="5" height="16" rx="1" />
            <rect x="14" y="4" width="5" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 4l14 8-14 8z" />
          </svg>
        )}
      </button>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "44px 40px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 16 }}>
          <a href="https://www.instagram.com/memarvinaida/" target="_blank" rel="noopener" aria-label="Instagram" style={{ color: "rgba(243,237,228,0.7)", display: "flex" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" />
            </svg>
          </a>
          <a href="https://www.facebook.com/memarvinaida" target="_blank" rel="noopener" aria-label="Facebook" style={{ color: "rgba(243,237,228,0.7)", display: "flex" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 3h-2a5 5 0 0 0-5 5v3H6v4h2v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
        <p style={{ fontFamily: "'Manrope','Vazirmatn',sans-serif", fontSize: 14, color: "rgba(243,237,228,0.55)", margin: 0 }}>
          {t.footer}
        </p>
      </footer>
    </div>
  );
}
