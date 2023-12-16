import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, ToggleButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBellSlash } from "@fortawesome/free-solid-svg-icons";
import "./notificationSetting.css";

const NotificationSettings = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    receiveEmails: true,
    receivePushNotifications: true,
  });

  const toggleNotificationSetting = (settingKey) => {
    setNotificationSettings({
      ...notificationSettings,
      [settingKey]: !notificationSettings[settingKey],
    });
  };

  const NotificationSettingItem = ({ settingKey, label, isEnabled }) => (
    <div className="notification-setting">
      <label>{label}:</label>
      <ToggleButton
        id={`toggle-${settingKey}`}
        type="checkbox"
        variant={isEnabled ? "success" : "danger"}
        checked={isEnabled}
        onChange={() => toggleNotificationSetting(settingKey)}
      >
        <FontAwesomeIcon icon={isEnabled ? faBell : faBellSlash} />
      </ToggleButton>
    </div>
  );

  return (
    <div className="notification-settings">
      {Object.keys(notificationSettings).map((settingKey) => (
        <NotificationSettingItem
          key={settingKey}
          settingKey={settingKey}
          label={settingKey.charAt(0).toUpperCase() + settingKey.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}
          isEnabled={notificationSettings[settingKey]}
        />
      ))}
    </div>
  );
};

export default NotificationSettings;
