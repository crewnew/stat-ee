import { JsonProperty, SerializableEntity } from "ts-jackson";

export default class CompanyDataSmart extends SerializableEntity {
    // Company ID
    public registCo?: number;

    public static fromJson(json: any): CompanyDataSmart {
        
    }

   
    

    

    
    
}


export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}