import { EmptyState } from 'modules/common/components';
import { __ } from 'modules/common/utils';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NotificationRow } from './';
import {
  NotificationList,
  NotificationSeeAll,
  NotificationWrapper,
  PopoverContent
} from './styles';

type Props = {
  notifications: any[],
  markAsRead: () => void,
  update: () => void
};

class NotificationsLatest extends Component<Props> {
  componentDidMount() {
    // update popover position
    this.props.update();
  }

  render() {
    const { notifications, markAsRead } = this.props;
    const notifCount = notifications.length;

    const mainContent = (
      <Fragment>
        <NotificationList>
          {notifications.map((notif, key) => (
            <NotificationRow
              notification={notif}
              key={key}
              markAsRead={markAsRead}
            />
          ))}
        </NotificationList>
        <NotificationSeeAll>
          <Link to="/notifications">{__('See all')}</Link>
        </NotificationSeeAll>
      </Fragment>
    );

    const emptyContent = (
      <PopoverContent>
        <EmptyState
          text={__('No notifications').toString()}
          image="/images/robots/robot-05.svg"
        />
      </PopoverContent>
    );

    const content = () => {
      if (notifCount === 0) {
        return emptyContent;
      }
      return <NotificationWrapper>{mainContent}</NotificationWrapper>;
    };

    return content();
  }
}

export default NotificationsLatest;