import React, { ChangeEvent, useContext } from "react";
import NameGeneratorContext from "../NameGeneratorContext";

const Settings = () => {
  const {
    settings,
    setSelectedWords,
    setSettings,
  } = useContext(NameGeneratorContext);

  const handleShowFormattedWordsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;

    setSettings({
      ...settings,
      showFormattedWords: checked,
    })
  };

  const handleClearAll = () => {
    setSelectedWords({});
  };

  const renderShowFormattedWordsSetting = () => {
    return (
      <div style={{
          marginLeft: "0.5rem",
        }}
      >
        <label>
          <input
            checked={settings.showFormattedWords}
            onChange={(e) => handleShowFormattedWordsChange(e)}
            type="checkbox"
          />

          Show translation lists
        </label>
      </div>
    );
  };

  const renderClearAll = () => {
    return (
      <button
        onClick={handleClearAll}
        style={{
          marginLeft: "1rem",
        }}
      >
        Clear all
      </button>
    );
  };

  return (
    <>
      <h2>Settings:</h2>

      {renderShowFormattedWordsSetting()}
      {renderClearAll()}
    </>
  );
};

export default Settings;