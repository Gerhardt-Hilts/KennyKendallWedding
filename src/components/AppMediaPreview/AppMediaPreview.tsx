import React from 'react';
import DefaultImage from '../../assets/img/DefaultImage.jpg';
import styles from './AppMediaPreview.module.scss';

interface Props {
  alt_text?: string,
  image_src?: string
}

interface State {
  alt_text: string,
  image_src: string
}

export default class AppMediaPreview extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    let image_src: string;
    let alt_text: string;

    if (this.props.image_src === undefined) {
      image_src = DefaultImage;
    } else {
      image_src = this.props.image_src;
    }
    if (this.props.alt_text === undefined) {
      alt_text = 'Default Image';
    } else {
      alt_text = this.props.alt_text;
    }

    this.state = {
      image_src: image_src,
      alt_text: alt_text
    }
  }

  render() {
    return (
        <img src={this.state.image_src} alt={this.state.alt_text} className={styles.image}/>
    );
  }
}