import React, { ChangeEvent, useContext } from "react";
import NameGeneratorContext from "../NameGeneratorContext";

const Settings = () => {
  const { settings, setSettings } = useContext(NameGeneratorContext);

  const handleShowFormattedWordsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;

    setSettings({
      ...settings,
      showFormattedWords: checked,
    })
  };

  const renderShowFormattedWordsSetting = () => {
    return (
      <>
        <label>
          <input
            checked={settings.showFormattedWords}
            onChange={(e) => handleShowFormattedWordsChange(e)}
            type="checkbox"
          />

          Show Formatted Words
        </label>
      </>
    );
  };

  return (
    <>
      <h2>Settings:</h2>

      {renderShowFormattedWordsSetting()}
    </>
  );
};

export default Settings;