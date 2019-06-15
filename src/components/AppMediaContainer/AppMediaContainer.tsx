import React from 'react';
import styles from './AppMediaContainer.module.scss';

import DefaultImage from '../../assets/img/DefaultImage.jpg';


interface Props {
  imageSource?: string,
  altText?: string
}

interface State {
  imageSource: string,
  altText: string,
}

export default class AppMediaContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    let imageSource = DefaultImage;
    let altText =  'default image';

    if (props.imageSource !== undefined) {
      imageSource = props.imageSource;
    }

    if (props.altText !== undefined) {
      altText = props.altText;
    }

    this.state = {
      imageSource: imageSource,
      altText: altText,
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={this.state.imageSource} alt={this.state.altText}/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
