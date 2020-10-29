import React from "react";

import Navbar from "components/navbar/Navbar";
import simplifierApi from "services/simplifierApi";
import {getApiResponseResources} from "../../utils/apiHelpers"
import { FHIR_API_Response, TypedBundle } from "types";
import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import ReactJson from 'react-json-view'
import useStyles from "./style";

const GetStructureDefExample: React.FC<{}> = () => {
    const [structureDefinition, setStructureDefinition] = React.useState(null as IStructureDefinition | TypedBundle<IStructureDefinition> | null );
    const classes = useStyles();
    const getStructureDefinition = async() => {
      const sd = getApiResponseResources(
        await simplifierApi.get<FHIR_API_Response<IStructureDefinition>>(
          `/StructureDefinition/diagnosisRank?`
        )
      )
      setStructureDefinition(sd)
    }
    getStructureDefinition()
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.jsonViewer}>
        {structureDefinition && <ReactJson src={structureDefinition} />}
      </div>
    </React.Fragment>
  );
};

export default GetStructureDefExample;
