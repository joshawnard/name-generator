import React from "react";
import { ParsedRootInterface } from "../interfaces/rootWordInterface";

const renderGenerated = (
  generatedNames: {[p: string]: ParsedRootInterface[]}[],
): JSX.Element | null => {
  if (generatedNames.length) {
    return (
      <>
        <h2>
          Names generated: {generatedNames.length}
        </h2>

        {
          generatedNames.map((generatedNameObj) => {
            const name = Object.keys(generatedNameObj)[0];
            const rootArr = Object.values(generatedNameObj)[0];

            return (
              <div
                className="name-card"
                key={name}
              >
                <h3>
                  {name}
                </h3>

                <hr style={{ margin: "10px" }} />

                {
                  rootArr.map((root, index) => {
                    return (
                      <div
                        key={`${name}-${root.translation}-${index}`}
                      >
                        <h4 style={{ marginBottom: "5px" }}>
                          {root.language}
                        </h4>

                        <small>
                          <strong>{root.translation}</strong> - <em>{root.englishMeaning}</em>
                        </small>
                      </div>
                    );
                  })
                }
              </div>
            );
          })
        }
      </>
    );
  }

  return null;
};

export default renderGenerated;