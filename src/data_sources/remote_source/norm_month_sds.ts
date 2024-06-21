import { JsonProperty, SerializableEntity } from "ts-jackson";

export async function getNormMonthSds(klaster: string): Promise<NormKuuSds> {
    throw new Error('Not implemented');
}

export  class NormKuuSds extends SerializableEntity {
    @JsonProperty()
    klaster: string;
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
}