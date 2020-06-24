import * as React from "react";

import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import useStyles from "./style.js";

interface Props {
  setJson: Function;
}
const ExtensionMaker = ({ setJson }: Props) => {
  const classes = useStyles();
  const types = ["integer", "string", "dateTiime"];
  const minCards = [0, "1", "*"];
  const maxCards = ["1", "*"];

  const [id, setId] = React.useState("");

  const [title, setTitle] = React.useState("");

  const [description, setDescription] = React.useState("");

  const [comment, setComment] = React.useState("");

  const [definition, setDefinition] = React.useState("");

  const [short, setShort] = React.useState("");

  const [type, setType] = React.useState("");

  const [minCard, setMinCard] = React.useState("");
  const [maxCard, setMaxCard] = React.useState("");
  const [active, setActive] = React.useState(true);

  const loadJSON = () => {
    //todo
    return "";
  };
  return (
    <div className={classes.extensionMaker}>
      <div className={classes.extensionLine}>
        <FormControl>
          <TextField
            id="text-input"
            placeholder="Title"
            onChange={(evt: any) => {
              setTitle(evt.target.value);
            }}
          />
          <FormHelperText>
            Title of the extension that will be shown in Simplifier
          </FormHelperText>
        </FormControl>
      </div>
      <div className={classes.extensionLine}>
        <FormControl>
          <TextField
            id="text-input"
            placeholder="Name and id"
            onChange={(evt: any) => {
              setId(evt.target.value);
            }}
          />
          <FormHelperText>
            Name and id of the extension that will be shown in Simplifier
          </FormHelperText>
        </FormControl>
      </div>
      <FormControl>
        <TextField
          id="text-input"
          placeholder="Description"
          onChange={(evt: any) => {
            setDescription(evt.target.value);
          }}
        />
        <FormHelperText>Description of the extension</FormHelperText>
      </FormControl>
      <FormControl>
        <TextField
          id="text-input"
          placeholder="Comment"
          onChange={(evt: any) => {
            setComment(evt.target.value);
          }}
        />
        <FormHelperText>
          Used to indicate additional information about the name part and how it
          should be used
        </FormHelperText>
      </FormControl>
      <FormControl>
        <TextField
          id="text-input"
          placeholder="Definition"
          onChange={(evt: any) => {
            setDefinition(evt.target.value);
          }}
        />
        <FormHelperText>
          A set of codes each of which specifies a certain subcategory of the
          name part in addition to the main name part type
        </FormHelperText>
      </FormControl>
      <FormControl>
        <TextField
          id="text-input"
          placeholder="Short"
          onChange={(evt: any) => {
            setShort(evt.target.value);
          }}
        />
        <FormHelperText>
          {" "}
          (one of the codes) LS | AC | NB | PR | HON | BR | AD | SP | MID | CL |
          IN
        </FormHelperText>
      </FormControl>
      <FormGroup row>
        <FormControl>
          <FormControlLabel
            control={
              <Switch
                checked={active}
                name="checkedA"
                onChange={() => {
                  setActive((prev) => !prev);
                }}
              />
            }
            label="Status"
          />
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
        <FormControl>
          <Select
            className="bp3-fill"
            value={types}
            onChange={(evt: any) => {
              setType(evt.target.value);
            }}
          />
          <InputLabel>
            Minimum cardinality
            <Select
              value={minCards}
              onChange={(evt: any) => {
                setMinCard(evt.target.value);
              }}
            />
          </InputLabel>
          <InputLabel>
            Maximum cardinality
            <Select
              value={maxCards}
              onChange={(evt: any) => {
                setMaxCard(evt.target.value);
              }}
            />
          </InputLabel>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
      </FormGroup>
      <Button onClick={loadJSON}>Generate json extension</Button>
    </>
  );
};

export default ExtensionMaker;
