import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './SectionWhy.module.sass';

const SectionWhy = () => {
  return (
    <section className={styles['section-why']}>
      <div className={styles['why-container']}>
        <div className={styles['why-container-info']}>
          <div className={styles['why-info-first']}>
            <div className={styles['why-info-first-content']}>
              <h3>Find The Perfect Brand Name Today!</h3>
              <div className={styles['why-info-first-content-button']}>
                <Link to="#" className={styles['button']}>Explore Names for Sale
                  <ion-icon name="arrow-redo"></ion-icon>
                </Link>
                <span>or</span>
                <Link to="#" className={styles['button']}>I want a Custom Name</Link>
              </div>
            </div>
          </div>
          <div className={styles['why-info-second']}>
            <h3>Why Squadhelp?</h3>
            <div className={styles['why-info-second-content-item']}>
              <h4>Disrupting The Traditional Agency Model</h4>
              <p>
                Squadhelp is reimagining how naming is done, providing fast,
                affordable, high-quality, soup-to-nuts solutions unlike anyone
                else.
              </p>
            </div>
            <div className={styles['why-info-second-content-item']}>
              <h4>Satisfaction Guarantee</h4>
              <p>
                We have policies in place to ensure that you are satisfied with
                your experience.
              </p>
            </div>
            <div className={styles['why-info-second-content-button']}>
              <Link to="#">Contest Policies</Link>
              <Link to="#">Marketplace Policies</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWhy;