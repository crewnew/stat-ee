import { JsonProperty, SerializableEntity } from "ts-jackson"

export default class ResponseEntity extends SerializableEntity {
    @JsonProperty()
    registCo: string
    @JsonProperty()
    model1y1: number
    @JsonProperty()
    model1y2: number
    @JsonProperty()
    model1y3: number
    @JsonProperty()
    model2y1: number
    @JsonProperty()
    model2y2: number
    @JsonProperty()
    model2y3: number
    @JsonProperty()
    model3y1: number
    @JsonProperty()
    model3y2: number
    @JsonProperty()
    model3y3: number
    @JsonProperty()
    model4y1: number
    @JsonProperty()
    model4y2: number
    @JsonProperty()
    model4y3: number
    @JsonProperty()
    sektorNo: number
    @JsonProperty()
    size_min: number
    @JsonProperty()
    size_max: number
    @JsonProperty()
    county: number
    @JsonProperty()
    kov: number
    @JsonProperty()
    LVKK: number
    @JsonProperty()
    MVK: number
    @JsonProperty()
    RK: number
    @JsonProperty()
    LLLK: number
    @JsonProperty()
    LLVK: number
    @JsonProperty()
    LLOK: number
    @JsonProperty()
    VaKK: number
    @JsonProperty()
    LVKaK: number
    @JsonProperty()
    VKK: number
    @JsonProperty()
    VK: number
    @JsonProperty()
    KOS: number
    @JsonProperty()
    LKKKK: number
    @JsonProperty()
    PKKKK: number
    @JsonProperty()
    AKM: number
    @JsonProperty()
    PKM: number
    @JsonProperty()
    ROA: number
    @JsonProperty()
    ROE: number
    @JsonProperty()
    EffSect: number
    @JsonProperty()
    EffSize: number
    @JsonProperty()
    EffCount: number
    @JsonProperty()
    LiqSect: number
    @JsonProperty()
    LiqSize: number
    @JsonProperty()
    LiqCount: number
    @JsonProperty()
    LevSect: number
    @JsonProperty()
    LevSize: number
    @JsonProperty()
    LevCount: number
    @JsonProperty()
    RetSect: number
    @JsonProperty()
    RetSize: number
    @JsonProperty()
    RetCount: number
    @JsonProperty()
    EmpSect: number
    @JsonProperty()
    EmpSize: number
    @JsonProperty()
    EmpCount: number


}