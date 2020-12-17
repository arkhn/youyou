import React from 'react';
import { Paper, Container, Typography } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { RootState } from 'state/store';
import clsx from 'clsx';

import { ButtonDownload } from 'components/smallComponents';
import AttributeEditor from 'components/extensionEditor/attributeEditor/AttributeEditor';
import Navbar from 'components/navbar/Navbar';

import useStyles from 'components/profileEditor/style';

const ExtensionEditor: React.FC<{}> = () => {
  const classes = useStyles();
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
          <div className={classes.mapping}>
            <Paper className={clsx(classes.paperLeft, classes.paper)}>
              <ButtonDownload
                text="Download extension"
                toDownload={extensionStructureDefinition}
              />
            </Paper>
            <Container className={classes.containerRight}>
              <Typography
                variant="h1"
                className={clsx(classes.capitalize, classes.marginBottom)}
              >
                {extensionStructureDefinition.id}
              </Typography>
              <Paper className={clsx(classes.paperRight, classes.paper)}>
                <div className={clsx(classes.paperRight, classes.paper)}>
                  <Typography variant="h1">Metadata</Typography>
                  <Typography variant="h1">Value</Typography>
                  <AttributeEditor
                    structureDefinition={extensionStructureDefinition}
                  />
                </div>
              </Paper>
            </Container>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ExtensionEditor;
