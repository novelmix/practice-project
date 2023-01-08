import React from 'react';
import styles from './SectionServices.module.sass';
import { Link } from 'react-router-dom';

const SectionServices = () => {
  return (
    <section className={styles['services-container']}>
      <div>
        <h2 className={styles['services-title']}>All Branding Agency Services</h2>
        <p className={styles['services-sub-title']}>Let out Squad of 250K+ experts from around the world help you launch your brand!</p>
      </div>
      <div className={styles['services-container-card']}>
        <Link to="/">
          <div className={styles['services-card']}>
          <div>
          <h3><ion-icon name="star"></ion-icon>Premium Domains</h3>
          <p>Curated drandable domains available for immediaote purchase</p>
          </div>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        </Link>
        <Link to="/">
        <div className={styles['services-card']}>
          <div>
            <h3><ion-icon name="people"></ion-icon>Naming Contests</h3>
            <p>Crowdsourced Name ideas from our creative community</p>
          </div>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        </Link>
        <Link to="/">
        <div className={styles['services-card']}>
          <div>
            <h3><ion-icon name="person"></ion-icon>Managed Contests</h3>
            <p>Full Agency-level Experience, led by Branding Consultant</p>
          </div>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        </Link>
        <Link to="/">
        <div className={styles['services-card']}>
          <div>
            <h3><ion-icon name="pricetags"></ion-icon>Logo Contests</h3>
            <p>Professional logo design contests</p>
          </div>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        </Link>
        <Link to="/">
        <div className={styles['services-card']}>
          <div>
            <h3><ion-icon name="chatbubbles"></ion-icon>Tagline Contests</h3>
            <p>Taglines, slogan, and strapline ideas from our creative community</p>
          </div>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        </Link>
        <Link to="/">
        <div className={styles['services-card']}>
          <div>
            <h3><ion-icon name="videocam"></ion-icon>Video Creation</h3>
            <p>Get perfectly branded videos optimized for results</p>
          </div>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        </Link>
        <Link to="/">
        <div className={styles['services-card']}>
          <div>
            <h3><ion-icon name="bar-chart"></ion-icon>Audience Testing</h3>
            <p>Fast, effective naming and branding research with consumer test panels</p>
          </div>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        </Link>
        <Link to="/">
        <div className={styles['services-card']}>
          <div>
            <h3><ion-icon name="bag-check"></ion-icon>Trademark Research</h3>
            <p>Comprehensive Trademark Research across 100+ countries</p>
          </div>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        </Link>
        <Link to="/">
        <div className={styles['services-card']}>
          <div>
            <h3><ion-icon name="information-circle"></ion-icon>Trademark Filing</h3>
            <p>Trademark filing service by Licensed Trademark attorneys</p>
          </div>
          <ion-icon name="chevron-forward"></ion-icon>
        </div>
        </Link>
      </div>
    </section>
  );
}

export default SectionServices;
