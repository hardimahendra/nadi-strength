"use client";

import { useState } from "react";
import Image from "next/image";

const programs = [
  [
    "01",
    "Strength base",
    "Gerak dasar, beban yang terukur, dan teknik yang bisa dibawa ke mana saja.",
  ],
  [
    "02",
    "Conditioning",
    "Sesi intensitas yang dibuat untuk kapasitas, bukan sekadar kelelahan.",
  ],
  [
    "03",
    "Open floor",
    "Ruang latihan mandiri dengan pelatih yang tersedia saat kamu butuh arah.",
  ],
];

export default function Page() {
  const [interest, setInterest] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <main>
      <header>
        <a className="brand" href="#mulai">
          <b>NADI</b>
          <span>
            STRENGTH
            <br />
            CLUB
          </span>
        </a>
        <p>JAKARTA · EST. 2026</p>
        <a className="header-link" href="#program">
          PROGRAM
        </a>
      </header>
      <section className="hero" id="mulai">
        <div className="campaign-photo" aria-hidden="true">
          <Image
            src="/images/gym-campaign.png"
            alt=""
            fill
            priority
            sizes="(max-width:720px) 100vw, 60vw"
          />
        </div>
        <div className="hero-index">01 / MOVE WITH INTENT</div>
        <div className="hero-copy">
          <p>STUDIO LATIHAN BERBASIS KEKUATAN</p>
          <h1>
            Bangun tenaga.
            <br />
            <i>Jaga ritme.</i>
          </h1>
          <button onClick={() => setInterest(true)}>
            Coba satu sesi <span>↗</span>
          </button>
        </div>
        <div className="metric">
          <b>04</b>
          <span>
            format latihan
            <br />
            setiap pekan
          </span>
        </div>
        <div className="rings" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </section>
      <section className="moments" aria-labelledby="moments-title">
        <div className="moments-head">
          <p>LATIHAN YANG TERLIHAT</p>
          <h2 id="moments-title">Datang sendiri. Bergerak bersama.</h2>
        </div>
        <div className="moments-grid">
          <figure className="moments-main">
            <div>
              <Image
                src="/images/gym-campaign.png"
                alt="Atlet berlatih barbell di studio kekuatan"
                fill
                sizes="(max-width:720px) 100vw, 60vw"
              />
            </div>
            <figcaption>
              <b>01 · FOKUS</b>
              <span>
                Ruang dan peralatan untuk memberi perhatian pada satu rep
                berikutnya.
              </span>
            </figcaption>
          </figure>
          <figure>
            <div>
              <Image
                src="/images/gym-coaching.png"
                alt="Pelatih memberi arahan teknik kepada atlet"
                fill
                sizes="(max-width:720px) 100vw, 35vw"
              />
            </div>
            <figcaption>
              <b>02 · ARAH</b>
              <span>Teknik diperhatikan, bukan hanya dihitung.</span>
            </figcaption>
          </figure>
          <figure>
            <div>
              <Image
                src="/images/gym-community.png"
                alt="Komunitas latihan menyelesaikan sesi di studio"
                fill
                sizes="(max-width:720px) 100vw, 35vw"
              />
            </div>
            <figcaption>
              <b>03 · RITME</b>
              <span>
                Progres lebih mudah dijaga saat punya ruang untuk kembali.
              </span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="statement">
        <p>LATIHAN BUKAN HUKUMAN</p>
        <h2>
          Tempat untuk membangun tubuh yang <em>lebih siap menjalani hidup.</em>
        </h2>
        <span>
          Kelas kecil. Beban nyata. Pelatih yang memperhatikan progresmu, bukan
          hanya catatan waktumu.
        </span>
      </section>
      <section className="programs" id="program">
        <div className="section-head">
          <p>FORMAT LATIHAN</p>
          <span>03 JALUR UTAMA</span>
        </div>
        {programs.map(([number, title, body]) => (
          <article key={number}>
            <b>{number}</b>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={() => setInterest(true)}>
              Lihat jadwal <span>→</span>
            </button>
          </article>
        ))}
      </section>
      <section className="schedule">
        <p>RITME MINGGU INI</p>
        <div>
          <strong>SEN / RAB</strong>
          <span>Strength base · 06.30 / 18.30</span>
        </div>
        <div>
          <strong>SEL / KAM</strong>
          <span>Conditioning · 07.00 / 19.00</span>
        </div>
        <div>
          <strong>SABTU</strong>
          <span>Open floor + coaching · 08.00—12.00</span>
        </div>
      </section>
      <footer>
        <b>
          NADI
          <br />
          STRENGTH
        </b>
        <span>
          Datang untuk satu sesi.
          <br />
          Pulang dengan alasan untuk kembali.
        </span>
        <button onClick={() => setInterest(true)}>Mulai percakapan ↗</button>
      </footer>
      {interest && (
        <div
          className="layer"
          role="presentation"
          onClick={() => setInterest(false)}
        >
          <section
            className="dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="trial-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close"
              aria-label="Tutup"
              onClick={() => setInterest(false)}
            >
              ×
            </button>
            {sent ? (
              <>
                <p>SESI PERCOBAAN</p>
                <h2 id="trial-title">Kami sudah mencatat minatmu.</h2>
                <span>
                  Ini adalah formulir demo. Dalam versi produksi, tim Nadi akan
                  menghubungimu untuk memilih slot latihan.
                </span>
                <button onClick={() => setInterest(false)}>Kembali</button>
              </>
            ) : (
              <>
                <p>SESI PERCOBAAN</p>
                <h2 id="trial-title">Mulai dari ritmemu sendiri.</h2>
                <form
                  noValidate
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (!event.currentTarget.reportValidity()) return;
                    setSent(true);
                  }}
                >
                  <label>
                    Nama
                    <input
                      required
                      placeholder="Nama kamu"
                      autoComplete="name"
                    />
                  </label>
                  <label>
                    Waktu yang kamu inginkan
                    <select defaultValue="" required>
                      <option value="" disabled>
                        Pilih waktu
                      </option>
                      <option>Pagi</option>
                      <option>Sore</option>
                      <option>Akhir pekan</option>
                    </select>
                  </label>
                  <button type="submit">
                    Kirim minat <span>↗</span>
                  </button>
                </form>
                <small>Demo front-end · tidak ada data yang dikirim.</small>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
