import { members } from '@site/src/data/members';
import React from 'react';
import styles from './Members.module.css';

export const Members = () => {
  return (
    <div className={styles.container}>
      {members.map((member, i) => (
        <div key={i} className={styles.member}>
          <a href={`imokencomponent/${member.userName}`}>
            <img
              src={`https://avatars.githubusercontent.com/${member.userName}`}
              alt={`${member}'s image`}
            />
          </a>
        </div>
      ))}
    </div>
  );
};
