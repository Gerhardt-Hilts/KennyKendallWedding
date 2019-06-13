import React from 'react';
import AppMediaPreview from '../AppMediaPreview/AppMediaPreview';
import styles from './AppMediaContainer.module.scss';

interface Props {

}

interface State {
  date: Date,
  imageSource: string
}

export default class AppMediaContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      date: new Date(),
      imageSource: ''
    }
  }

  render() {
    return (
      <div className={styles.layout}>
        <AppMediaPreview/>
        <div>
          <div className={styles.textGroup}>
            <div className={styles.mainText}>1943-10-28</div>
            <div className={styles.hintText}>Date Uploaded</div>
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}