import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './CardPrice.module.sass';

const CardPrice = (props) => {
  const {name, price, text, content: {items}} = props;
  
  const renderItems = () => {
    if(items) {
      return items.map((item) => {
        const {itemText, iconsItem} = item;
        return (
          <>
          <li className={styles['list-item']}>
            <span>{typeof itemText === 'object' ? itemText.name : itemText} {typeof itemText === 'object' ? <Link to={itemText.href} className=''>{itemText.link}</Link> : null}</span>
          </li>
          {renderItemsWithIcons(iconsItem)}
          </>
          )
      })
    }
  }

  const renderItemsWithIcons = (array) => {
    if(array.length) {
      return array.map((item) => {
        return (
          <li className={styles['list-item']}>
            <ion-icon class="list-icon md hydrated" name="checkmark-outline" role="img" aria-label="checkmark outline"></ion-icon>
            <span>{typeof item === 'object' ? item.name : item} {typeof item === 'object' ? <Link to={item.href} className=''>{item.link}</Link> : null}</span>
          </li>
        )
      })
    }
  }

  return (
    <div className={`${styles['pricing-plan']} ${styles[props.pricingPlan]}`}>
      <header className={styles['plan-header']}>
        <p className={`${styles['plan-name']} ${styles[props.planName]}`}>{name}</p>
        <p className={styles['plan-price']}><span>$</span>{price}</p>
        <p className={styles['plan-text']}>{text}</p>
      </header>
      <ul className={styles['list']}>
        {renderItems()}
      </ul>
      <div className={styles['plan-sing-up']}>
        <Link to='/' className={`${styles['btn']} ${styles[props.classBtn]}`}>Start</Link>
      </div>
</div>
  );
}

export default CardPrice;