import React, { useState } from 'react';

import { Button } from '@material-ui/core';

import { changeSliceName } from 'state/reducers/resource';
import { useAppDispatch } from 'state/store';

import SliceDialogBox from 'components/profileEditor/sliceDialogBox/SliceDialogBox';
import { OpenDialogState } from 'components/profileEditor/ProfileEditor';

import useStyles from 'components/profileEditor/editor/complexTypesEditor/dialogSliceName/style';

type DialogChangeSliceNameProps = {
  sliceName: string;
  id: string;
};

const DialogChangeSliceName: React.FC<DialogChangeSliceNameProps> = ({
  sliceName,
  id
}) => {
  const dispatch = useAppDispatch();
  const [newSliceName, setNewSliceName] = useState(sliceName);
  const classes = useStyles();

  const [open, setOpen] = useState<OpenDialogState>({ open: false });

  return (
    <>
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        onClick={() =>
          setOpen({
            open: true,
            add: true,
            message: { title: 'Change slice name', text: '' }
          })
        }
      >
        Change Slice Name
      </Button>
      <SliceDialogBox
        attributeSelected={open}
        onCloseClick={() => setOpen({ open: false })}
        onChangeName={(e) => setNewSliceName(e.target.value)}
        onFormSubmit={(e) => {
          e.preventDefault();
          dispatch(changeSliceName({ newSliceName, id }));
          setOpen({ open: false });
        }}
        sliceNameError={{ error: false, message: '' }}
      />
    </>
  );
};

export default DialogChangeSliceName;
