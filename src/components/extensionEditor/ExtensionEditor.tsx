import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { RootState } from 'state/store';

import { ButtonDownload } from 'components/smallComponents';
import AttributeEditor from 'components/extensionEditor/attributeEditor/AttributeEditor';
import Navbar from 'components/navbar/Navbar';

const ExtensionEditor: React.FC<{}> = () => {
  const { loading, extensionStructureDefinition } = useSelector(
    (state: RootState) => {
      return state.resourceSlice;
    }
  );

  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <React.Fragment>
      <Navbar />
      <a
        href={
          'data:json/plain;charset=utf-8,' +
          encodeURIComponent(
            JSON.stringify(extensionStructureDefinition, null, 2)
          )
        }
        download={extensionStructureDefinition?.name + '.json'}
      >
        <button>Download</button>
      </a>

      {extensionStructureDefinition && (
        <React.Fragment>
          <div>
            <Paper>
              <ButtonDownload
                text="Download extension"
                toDownload={extensionStructureDefinition}
              />
            </Paper>
            <div>
              <Typography variant="h1">
                {extensionStructureDefinition.id}
              </Typography>
              <Paper>
                <div>
                  <Typography variant="h1">Metadata</Typography>
                  <Typography variant="h1">Value</Typography>
                  <AttributeEditor
                    structureDefinition={extensionStructureDefinition}
                  />
                </div>
              </Paper>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ExtensionEditor;
