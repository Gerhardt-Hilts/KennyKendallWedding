import React from 'react';
import AppMediaPreview from '../AppMediaPreview/AppMediaPreview';
import './AppMediaContainer.scss';

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
      <div className={'layout'}>
        <AppMediaPreview/>
        <div>
          <div className={'text_group'}>
            <div className={'main_text'}>1943-10-28</div>
            <div className={'hint_text'}>Date Uploaded</div>
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}