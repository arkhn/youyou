import React, { useState } from 'react';
import { ElementDefinition } from "../../resources/ts/proto/r4/core/datatypes_pb"
import { StructureDefinition } from '../../resources/ts/proto/r4/core/resources/structure_definition_pb';

type AttributeEditorProps = {
    attribute: ElementDefinition.AsObject | null,
    profile: StructureDefinition.AsObject | null
}

const AttributeEditor: React.FC<AttributeEditorProps> = ({attribute, profile}) =>  {
    const [min, setMin] = useState(Number(attribute?.min));
    const [max, setMax] = useState(attribute?.max?.toString());

    console.log(min, max);

    const isDisabledInput = (cardiMin: number | undefined, cardiMax: string | undefined, min: number, max: string) => {
        if (cardiMin !== undefined && cardiMax !== undefined && min >= cardiMin){
            if (cardiMax === "1"){
                if (max === "1" || max ==="0"){
                    return false
                }
            } else if (cardiMax === "*"){
                if (max === "*" || max === "1" || max === "0"){
                    return false
                }
            }
        }
        return true;
    }

    const changeCardinality = (cardinality: string): void => {
        const cardiTab = cardinality.split("|");
        setMin(Number(cardiTab[0]));
        setMax(cardiTab[1]);
    }

    const changeProfile = () => {
        console.log("hello")
    }

    const handleCardinality = () => {
        const cardiMax: string | undefined = attribute?.max?.toString();
        const cardiMin: number | undefined = Number(attribute?.min);
        
        
        return (
            <form>
                <input type="radio" name="cardinality" onChange={(e) => changeCardinality(e.target.value)} value="0|0" disabled={isDisabledInput(cardiMin, cardiMax, 0, "0")}/><label>0...0</label><br />
                <input type="radio" name="cardinality" onChange={(e) => changeCardinality(e.target.value)} value="0|1" disabled={isDisabledInput(cardiMin, cardiMax, 0, "1")}/><label>0...1</label><br />
                <input type="radio" name="cardinality" onChange={(e) => changeCardinality(e.target.value)} value="0|*" disabled={isDisabledInput(cardiMin, cardiMax, 0, "*")}/><label>0...*</label><br />
                <input type="radio" name="cardinality" onChange={(e) => changeCardinality(e.target.value)} value="1|1" disabled={isDisabledInput(cardiMin, cardiMax, 1, "1")}/><label>1...1</label><br />
                <input type="radio" name="cardinality" onChange={(e) => changeCardinality(e.target.value)} value="1|*" disabled={isDisabledInput(cardiMin, cardiMax, 1, "*")}/><label>1...*</label><br />
                <input type="button" value="submit" onClick={() => changeProfile()}/>
            </form>
        )
    }

    return (
        <>
            <h2>AttributeEditor</h2>
            <p>Cardinality</p>
            <p>{attribute?.id}</p>
            {handleCardinality()}
        </>
    )
};

export default AttributeEditor;