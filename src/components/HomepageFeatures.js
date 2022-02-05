import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'МСТРБ',
    img_path: require('../../static/img/mstrb.png').default,
    link: "https://mst.by/ru/",
    description: (
      <>
        Мистерство Спорта и Туризма Республики Беларусь
      </>
    )
  },
  {
    title: 'БФЛА',
    img_path: require('../../static/img/bfla.png').default,
    link: "https://www.bfla.eu/",
    description: (
      <>
        Белорусская Федерация Легкой атлетики
      </>
    )
  },
  {
    title: 'ОСВОД',
    img_path: require('../../static/img/osvodm.png').default,
    link: "http://mgoosvod.by/",
    description: (
      <>
        ОСВОД МИНСК
      </>
    )
  }
];

function Feature({img_path, link, title, description}) {
  return (
    <div className={clsx('col col--4')}>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div className="text--center">
        <img class="dd" src={img_path} alt={title} />
      </div>
        <p><a href={link}> {description} </a></p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
