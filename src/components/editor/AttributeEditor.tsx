import React from 'react';
import { ElementDefinition } from "../../resources/ts/proto/r4/core/datatypes_pb"

type AttributeEditorProps = {
    attribute: ElementDefinition.AsObject | null
}

const AttributeEditor: React.FC<AttributeEditorProps> = ({attribute}) =>  {
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

    const handleCardinality = () => {
        const cardiMax: string | undefined = attribute?.max?.toString();
        const cardiMin: number | undefined = Number(attribute?.min)
        return (
            <form>
                <input type="text" placeholder="0" /><br />
                <input type="text" placeholder="*" /><br />
                <input type="button" value="0...0" disabled={isDisabledInput(cardiMin, cardiMax, 0, "0")} /><br />
                <input type="button" value="0...1" disabled={isDisabledInput(cardiMin, cardiMax, 0, "1")}/><br />
                <input type="button" value="0...*" disabled={isDisabledInput(cardiMin, cardiMax, 0, "*")}/><br />
                <input type="button" value="1...1" disabled={isDisabledInput(cardiMin, cardiMax, 1, "1")}/><br />
                <input type="button" value="1...*" disabled={isDisabledInput(cardiMin, cardiMax, 1, "*")}/><br />
                <input type="submit" value="submit" onClick={(e) => {e.preventDefault()}}/>
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