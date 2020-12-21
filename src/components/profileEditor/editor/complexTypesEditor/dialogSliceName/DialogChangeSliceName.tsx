import React, { useState } from 'react';
import { Button, Dialog } from '@material-ui/core';
import { InputTooltip } from 'components/smallComponents';
import { changeSliceName } from 'state/reducers/resource';
import { useAppDispatch } from 'state/store';
import { RenderAttributesTree } from 'types';

type DialogChangeSliceNameProps = {
  item: RenderAttributesTree;
  sliceName: string;
  id: string;
  open: boolean;
  onCloseClick: () => void;
  onOpenClick: () => void;
};

const DialogChangeSliceName: React.FC<DialogChangeSliceNameProps> = ({
  item,
  sliceName,
  id,
  open,
  onCloseClick,
  onOpenClick
}) => {
  const dispatch = useAppDispatch();
  const [newSliceName, setNewSliceName] = useState(sliceName);

  return (
    <>
      <Button onClick={(): void => onOpenClick()}>Change Slice Name</Button>
      <Dialog open={open}>
        <InputTooltip
          label={`${item.name}*`}
          value={sliceName}
          tool={item.definition}
          onBlur={(e): void => setNewSliceName(e.target.value)}
        />
        <Button
          onClick={(e): void => {
            e.preventDefault();
            dispatch(changeSliceName({ newSliceName, id }));
            onCloseClick();
          }}
        >
          Change slice name
        </Button>
      </Dialog>
    </>
  );
};

export default DialogChangeSliceName;
