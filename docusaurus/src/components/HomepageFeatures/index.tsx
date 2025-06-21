import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Review Management',
    emoji: '🤖',
    description: (
      <>
        Leverage AI tools to monitor, gain insights, and respond to reviews efficiently. 
        Scale your ability to manage reviews across multiple platforms with smart automation.
      </>
    ),
  },
  {
    title: 'Centralized Review Dashboard',
    emoji: '📊',
    description: (
      <>
        Manage all client reviews in one place from countless sites. Monitor, track, 
        and respond to reviews from major platforms like Google and Facebook directly 
        from your dashboard.
      </>
    ),
  },
  {
    title: 'Competitive Analysis',
    emoji: '📈',
    description: (
      <>
        Show clients how they stack up to the competition with insightful reports. 
        Track sentiment analysis and review performance against competitors.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
