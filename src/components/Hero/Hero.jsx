import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Halo, Nama Saya Fabian</h1>
        <p className={styles.description}>
          Saya Adalah Web Developer, Keahlian Saya Dibidang Javascript, HTML, Dan PHP. Salam kenal
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Hubungi Saya
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Gambar Hero Saya"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
