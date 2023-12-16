import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, ToggleButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import "./privacySetting.css";

const PrivacySettings = () => {
  const [privacySettings, setPrivacySettings] = useState({
    showEmail: true,
    showLocation: true,
    showBirthdate: true,
  });

  const togglePrivacySetting = (settingKey) => {
    setPrivacySettings({
      ...privacySettings,
      [settingKey]: !privacySettings[settingKey],
    });
  };

  const PrivacySettingItem = ({ settingKey, label, isPublic }) => (
    <div className="privacy-setting">
      <label>{label}:</label>
      <ToggleButton
        id={`toggle-${settingKey}`}
        type="checkbox"
        variant={isPublic ? "success" : "danger"}
        checked={isPublic}
        onChange={() => togglePrivacySetting(settingKey)}
      >
        <FontAwesomeIcon icon={isPublic ? faUnlock : faLock} />
      </ToggleButton>
    </div>
  );

  return (
    <div className="privacy-settings">
      {Object.keys(privacySettings).map((settingKey) => (
        <PrivacySettingItem
          key={settingKey}
          settingKey={settingKey}
          label={settingKey.charAt(0).toUpperCase() + settingKey.slice(1)}
          isPublic={privacySettings[settingKey]}
        />
      ))}
    </div>
  );
};

export default PrivacySettings;
