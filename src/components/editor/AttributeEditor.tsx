import React from 'react';
import { ElementDefinition } from "../../resources/ts/r4/core/datatypes_pb"

type AttributeEditorProps = {
    attribute: ElementDefinition.AsObject | null
}

const AttributeEditor: React.FC<AttributeEditorProps> = ({attribute}) =>  {
    const isDisabledInput = (cardiMin: any, cardiMax: any, min: Number, max: String) => {
        if (min >= cardiMin){
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

    const handleCardinality = (cardiMin: any, cardiMax: any) => {
        return (
            <form>
                <input type="text" placeholder="0" /><br />
                <input type="text" placeholder="*" /><br />
                <input type="button" value="0...0" disabled={isDisabledInput(cardiMin, cardiMax, 0, "0")} /><br />
                <input type="button" value="0...1" disabled={isDisabledInput(cardiMin, cardiMax, 0, "1")}/><br />
                <input type="button" value="0...*" disabled={isDisabledInput(cardiMin, cardiMax, 0, "*")}/><br />
                <input type="button" value="1...1" disabled={isDisabledInput(cardiMin, cardiMax, 1, "1")}/><br />
                <input type="button" value="1...*" disabled={isDisabledInput(cardiMin, cardiMax, 1, "*")}/><br />
            </form>
        )
    }

    return (
        <>
            <h2>AttributeEditor</h2>
            <p>Cardinality</p>
            <p>{attribute?.id}</p>
            {handleCardinality(attribute?.min, attribute?.max)}
        </>
    )
};

export default AttributeEditor;