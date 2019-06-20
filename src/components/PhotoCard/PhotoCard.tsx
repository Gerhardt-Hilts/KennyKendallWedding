// Libraries
import React from 'react';

import StarSVG from '../../assets/svg/StarIcon.svg';
import FlagSVG from '../../assets/svg/FlagIcon.svg';

// Styles
import styles from './PhotoCard.module.scss';
import AppMediaContainer from "../AppMediaContainer/AppMediaContainer";


interface Props {
  date?: Date
}

interface State {
  date: string
}

export default class PhotoCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // date placeholder here
    let date = '1943-10-28';

    this.state = {
      date: date
    };
  }


  render() {
    return (
      <div className={styles.container}>
        <AppMediaContainer>
          <div className={styles.info}>
            <div className={styles.date}>
              <div>{this.state.date}</div>
              <div>Date Uploaded</div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.votes}>
                <object className={styles.svg} type={"image/svg+xml"} data={StarSVG}>Star - Your browser does not support SVG</object>
              </div>
              <div className={styles.flag}>
                <object className={styles.flagSvg} type={"image/svg+xml"} data={FlagSVG}>Flag - Your browser does not support SVG</object>
              </div>
            </div>
          </div>
        </AppMediaContainer>
      </div>
    );
  }
}