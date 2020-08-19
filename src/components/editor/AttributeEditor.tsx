import React, { useState } from 'react';
import { ElementDefinition, UnsignedInt, String } from "../../resources/ts/proto/r4/core/datatypes_pb"
import { StructureDefinition } from '../../resources/ts/proto/r4/core/resources/structure_definition_pb';

type AttributeEditorProps = {
    attribute: ElementDefinition.AsObject | null,
    profile: StructureDefinition.AsObject | null
}

const AttributeEditor: React.FC<AttributeEditorProps> = ({attribute, profile}) =>  {
    const [minState, setMinState] = useState(Number(attribute?.base?.min));
    const [maxState, setMaxState] = useState(attribute?.base?.max?.toString());

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
        setMinState(Number(cardiTab[0]));
        setMaxState(cardiTab[1]);
    }

    const changeProfile = () => {
        if (attribute){
            const cardinalityEditor = attribute;
            //const profileEditor = profile;
            cardinalityEditor.min = minState as unknown as UnsignedInt.AsObject;
            cardinalityEditor.max = maxState as unknown as String.AsObject;
/*             profileEditor.snapshot.element.map((attrib) => {
                if (attrib.id = attribute.id){
                    console.log(attribute)
                }
            }) */            
        }
    }

    const handleCardinality = () => {
        const cardiMax: string | undefined = attribute?.base?.max?.toString();
        const cardiMin: number | undefined = Number(attribute?.base?.min);
        
        
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