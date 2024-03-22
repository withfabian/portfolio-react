import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Tentang Saya</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Saya duduk dengan laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Ikon kursor" />
            <div className={styles.aboutItemText}>
              <h3>Pengembang Frontend</h3>
              <p>
                Saya seorang pengembang frontend dengan pengalaman dalam membangun situs yang responsif dan dioptimalkan
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Ikon server" />
            <div className={styles.aboutItemText}>
              <h3>Pengembang Pawn</h3>
              <p>
                Saya memiliki pengalaman dalam mengembangkan Game SAMP Menggunakan Bahasa Pemprogramman Pawn
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Ikon UI" />
            <div className={styles.aboutItemText}>
              <h3>Desainer UI</h3>
              <p>
                Saya telah mendesain beberapa halaman landing dan telah membuat sistem desain juga
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
