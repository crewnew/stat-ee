import GrowthEntity from "src/entities/growth_entity";
import { checkMissingProperties } from "src/utils";
import { JsonProperty, SerializableEntity } from "ts-jackson";


export async function getMonthly(klaster: string): Promise<Monthly> {
    throw new Error('Not implemented');
}

export async function getMonthlyArray(klaster: string): Promise<number[]> {
    const monthly = await getMonthly(klaster);
    const data = GrowthEntity.deserialize(monthly.serialize()).clamp();
    checkMissingProperties(data, 3);
    return data.toArray();
}

export  class Monthly extends SerializableEntity {
    @JsonProperty()
    kood: string;
    @JsonProperty()
    emtak08: number;
    @JsonProperty()
    emtak_estat: string;
    @JsonProperty()
    maa: number;
    @JsonProperty()
    vald: number;
    @JsonProperty()
    tarv_h: number;
    @JsonProperty()
    oig_grupp: string;
    @JsonProperty()
    sektor_nr: number;
    @JsonProperty()
    sektor: string;
    @JsonProperty()
    kmd_m_min12: number;
    @JsonProperty()
    kmd_m_min11: number;
    @JsonProperty()
    kmd_m_min10: number;
    @JsonProperty()
    kmd_m_min9: number;
    @JsonProperty()
    kmd_m_min8: number;
    @JsonProperty()
    kmd_m_min7: number;
    @JsonProperty()
    kmd_m_min6: number;
    @JsonProperty()
    kmd_m_min5: number;
    @JsonProperty()
    kmd_m_min4: number;
    @JsonProperty()
    kmd_m_min3: number;
    @JsonProperty()
    kmd_m_min2: number;
    @JsonProperty()
    kmd_m_min1: number;
    @JsonProperty()
    tsd_m_min12: number;
    @JsonProperty()
    tsd_m_min11: number;
    @JsonProperty()
    tsd_m_min10: number;
    @JsonProperty()
    tsd_m_min9: number;
    @JsonProperty()
    tsd_m_min8: number;
    @JsonProperty()
    tsd_m_min7: number;
    @JsonProperty()
    tsd_m_min6: number;
    @JsonProperty()
    tsd_m_min5: number;
    @JsonProperty()
    tsd_m_min4: number;
    @JsonProperty()
    tsd_m_min3: number;
    @JsonProperty()
    tsd_m_min2: number;
    @JsonProperty()
    tsd_m_min1: number;
    @JsonProperty()
    tor_m_min12: number;
    @JsonProperty()
    tor_m_min11: number;
    @JsonProperty()
    tor_m_min10: number;
    @JsonProperty()
    tor_m_min9: number;
    @JsonProperty()
    tor_m_min8: number;
    @JsonProperty()
    tor_m_min7: number;
    @JsonProperty()
    tor_m_min6: number;
    @JsonProperty()
    tor_m_min5: number;
    @JsonProperty()
    tor_m_min4: number;
    @JsonProperty()
    tor_m_min3: number;
    @JsonProperty()
    tor_m_min2: number;
    @JsonProperty()
    tor_m_min1: number;
    @JsonProperty()
    kmd_tsd_min1: number;
    @JsonProperty()
    kmd_tsd_min2: number;
    @JsonProperty()
    kmd_tsd_suht: number;
    @JsonProperty()
    suurusgrupp: string;
    @JsonProperty()
    protsentiil_sektor: number;
    @JsonProperty()
    sektor_n: number;
    @JsonProperty()
    protsentiil_vald: number;
    @JsonProperty()
    vald_n: number;
    @JsonProperty()
    protsentiil_suurusgrupp: number;
    @JsonProperty()
    suurusgrupp_n: number;
    @JsonProperty()
    valjavottekuu: string;
    @JsonProperty()
    klaster: string;
}