import React from 'react';
import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

type AttributeEditorProps = {
    attribute: IElementDefinition | null
}

const AttributeEditor: React.FC<AttributeEditorProps> = ({attribute}) =>  {
    console.log(attribute?.min, attribute?.max)

    // 0...*    00  01  0*  11  1*
    
    const isDisabledInput = (cardiMin: any, cardiMax: any, min: any, max: any) => {
        console.log(min, max, cardiMin, cardiMax)
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
        console.log(cardiMin, cardiMax)
        return (
            <form>
                <input type="text" placeholder={cardiMin} /><br />
                <input type="text" placeholder={cardiMax} /><br />
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