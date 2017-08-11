import * as React from 'react';
import { Paper, BottomNavigation, BottomNavigationItem, FontIcon } from 'material-ui';

import ActionShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionRecordVoiceOver from 'material-ui/svg-icons/action/record-voice-over';

export interface ISnackAppBarState {
  selectedIndex: number;
}
export class SnackAppBar extends React.Component<{}, ISnackAppBarState> {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
  }

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Buy"
            icon={
              <ActionShoppingCart/>
            }
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Suggest"
            icon={
              <ActionRecordVoiceOver/>
            }
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Profile"
            icon={
              <ActionFace/>
            }
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
