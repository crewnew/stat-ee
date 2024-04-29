import { JsonProperty, SerializableEntity } from "ts-jackson";

export default class CompanyDTO extends SerializableEntity {
    // Company ID
    @JsonProperty({ path: 'JYKOOD'})
    public readonly companyID?: number;

    // Year
    @JsonProperty({ path: 'AASTA' })
    public readonly year?: number;

    // Enterprise code
    @JsonProperty({ path: 'EMTAK' })
    public readonly emtak?: string;

    // Sector number
    @JsonProperty({ path: 'Sektor_nr' })
    public readonly sectorNumber?: number;

    // Sector text
    @JsonProperty({ path: 'Sektor_txt' })
    public readonly sectorText?: string;

    // Cluster number
    @JsonProperty({ path: 'Klaster' })
    public readonly cluster?: number;

    // ???
    @JsonProperty({ path: 'TARV_H' })
    public readonly requirementH?: number;

    // Legal form
    @JsonProperty({ path: 'OIG_VORM' })
    public readonly legalForm?: string;

    // Company size class
    @JsonProperty({ path: 'Ettevotte_suurusklass' })
    public readonly companySizeClass?: string;

    // Institution Code
    @JsonProperty({ path: 'ASU_KOOD' })
    public readonly institutionCode?: number;

    // Municipality code
    @JsonProperty({ path: 'KOV' })
    public readonly municipalityCode?: number;

    // County code
    @JsonProperty({ path: 'Maakond' })
    public readonly countyCode?: number;

    // Assets
    @JsonProperty({ path: 'Kaibevarad' })
    public readonly assets?: number;

    // Raha
    @JsonProperty({ path: 'Raha' })
    public readonly cash?: number;

    // Short-term receivables
    @JsonProperty({ path: 'Lyhiajalised_nouded' })
    public readonly shortTermReceivables?: number;

    // Short-term financial investments
    @JsonProperty({ path: 'Lyhiajalised_finantsinvesteeringud' })
    public readonly shortTermFinancialInvestments?: number;

    // Inventories
    @JsonProperty({ path: 'Varud' })
    public readonly inventories?: number;

    // Fixed assets
    @JsonProperty({ path: 'Pohivarad' })
    public readonly fixedAssets?: number;

    // Long-term receivables
    @JsonProperty({ path: 'Pikaajalised_nouded' })
    public readonly longTermReceivables?: number; // 

    // Long-term financial investments
    @JsonProperty({ path: 'Pikaajalised_finantsinvesteeringud' })
    public readonly longTermFinancialInvestments?: number;

    // Real estate investments
    @JsonProperty({ path: 'Kinnisvarainvesteeringud' })
    public readonly realEstateInvestments?: number;

    // Tangible assets
    @JsonProperty({ path: 'Materiaalne_pohivara' })
    public readonly tangibleAssets?: number;

    // Intangible assets
    @JsonProperty({ path: 'Immateriaalne_pohivara' })
    public readonly intangibleAssets?: number;

    // Total assets
    @JsonProperty({ path: 'Varad_kokku' })
    public readonly totalAssets?: number;

    // Short-term liabilities
    @JsonProperty({ path: 'Lyhiajalised_kohustused' })
    public readonly shortTermLiabilities?: number;

    // Short-term debts
    @JsonProperty({ path: 'Lyhiajalised_volad' })
    public readonly shortTermDebts?: number;

    // Short-term loans
    @JsonProperty({ path: 'Lyhiajalised_laenud' })
    public readonly shortTermLoans?: number;

    // Long-term liabilities
    @JsonProperty({ path: 'Pikaajalised_kohustused' })
    public readonly longTermLiabilities?: number;

    // Long-term debts
    @JsonProperty({ path: 'Pikaajalised_volad' })
    public readonly longTermDebts?: number;

    // Long-term loans
    @JsonProperty({ path: 'Pikaajalised_laenud' })
    public readonly longTermLoans?: number;

    // Total liabilities
    @JsonProperty({ path: 'Kohustused_kokku' })
    public readonly totalLiabilities?: number;

    // Equity
    @JsonProperty({ path: 'Omakapital' })
    public readonly equity?: number;

    // Liabilities and equity
    @JsonProperty({ path: 'Kohustused_Omakapital_kokku' })
    public readonly liabilitiesAndEquity?: number;

    // Sales revenue
    @JsonProperty({ path: 'Myygitulu' })
    public readonly salesRevenue?: number;

    // Other operating income
    @JsonProperty({ path: 'Muud_aritulud' })
    public readonly otherOperatingIncome?: number;

    // Other operating expenses
    @JsonProperty({ path: 'Muud_arikulud' })
    public readonly otherOperatingExpenses?: number;

    // Personnel expenses
    @JsonProperty({ path: 'Toojoukulud' })
    public readonly personnelExpenses?: number;

    // Operating profit
    @JsonProperty({ path: 'Arikasum' })
    public readonly operatingProfit?: number;

    // Interest expenses
    @JsonProperty({ path: 'Intressikulud' })
    public readonly interestExpenses?: number;

    // Net profit
    @JsonProperty({ path: 'Aruandeaasta_kasum' })
    public readonly netProfit?: number;

    // Turnover assets T1
    @JsonProperty({ path: 'Kaibevarad_t1' })
    public readonly turnoverAssetsT1?: number;

    // LVKK
    @JsonProperty({ path: 'LVKK' })
    public readonly LVKK?: number;

    // MVK
    @JsonProperty({ path: 'MVK' })
    public readonly MVK?: number;

    // RK
    @JsonProperty({ path: 'RK' })
    public readonly RK?: number;

    // LLLK
    @JsonProperty({ path: 'LLLK' })
    public readonly LLLK?: number;

    // LLVK
    @JsonProperty({ path: 'LLVK' })
    public readonly LLVK?: number;

    // LLOK
    @JsonProperty({ path: 'LLOK' })
    public readonly LLOK?: number;

    // VaKK
    @JsonProperty({ path: 'VaKK' })
    public readonly VaKK?: number;

    // LVKaK
    @JsonProperty({ path: 'LVKaK' })
    public readonly LVKaK?: number;

    // VKK
    @JsonProperty({ path: 'VKK' })
    public readonly VKK?: number;

    // VK
    @JsonProperty({ path: 'VK' })
    public readonly VK?: number;

    // KOS
    @JsonProperty({ path: 'KOS' })
    public readonly KOS?: number;

    // IKK
    @JsonProperty({ path: 'IKK' })
    public readonly IKK?: number;

    // LKKKK
    @JsonProperty({ path: 'LKKKK' })
    public readonly LKKKK?: number;

    // PKK
    @JsonProperty({ path: 'PKKKK' })
    public readonly PKK?: number;

    // AKM
    @JsonProperty({ path: 'AKM' })
    public readonly AKM?: number;

    // PKM
    @JsonProperty({ path: 'PKM' })
    public readonly PKM?: number;

    // ROA
    @JsonProperty({ path: 'ROA' })
    public readonly ROA?: number;

    // ROE
    @JsonProperty({ path: 'ROE' })
    public readonly ROE?: number;

    // Turnover assets (ds)
    @JsonProperty({ path: 'ds_Kaibevarad' })
    public readonly dsTurnoverAssets?: number;

    // Cash (ds)
    @JsonProperty({ path: 'ds_Raha' })
    public readonly dsCash?: number;

    // Short-term receivables (ds)
    @JsonProperty({ path: 'ds_Lyhiajalised_nouded' })
    public readonly dsShortTermReceivables?: number;

    // Short-term financial investments (ds)
    @JsonProperty({ path: 'ds_Lyhiajalised_finantsinvesteeringud' })
    public readonly dsShortTermFinancialInvestments?: number;

    // Inventories (ds)
    @JsonProperty({ path: 'ds_Varud' })
    public readonly dsInventories?: number;

    // Fixed assets (ds)
    @JsonProperty({ path: 'ds_Pohivarad' })
    public readonly dsFixedAssets?: number;

    // Long-term receivables (ds)
    @JsonProperty({ path: 'ds_Pikaajalised_nouded' })
    public readonly dsLongTermReceivables?: number;

    // Long-term financial investments (ds)
    @JsonProperty({ path: 'ds_Pikaajalised_finantsinvesteeringud' })
    public readonly dsLongTermFinancialInvestments?: number;

    // Real estate investments (ds)
    @JsonProperty({ path: 'ds_Kinnisvarainvesteeringud' })
    public readonly dsRealEstateInvestments?: number;

    // Tangible assets (ds)
    @JsonProperty({ path: 'ds_Materiaalne_pohivara' })
    public readonly dsTangibleAssets?: number;

    // Intangible assets (ds)
    @JsonProperty({ path: 'ds_Immateriaalne_pohivara' })
    public readonly dsIntangibleAssets?: number;

    // Total assets (ds)
    @JsonProperty({ path: 'ds_Varad_kokku' })
    public readonly dsTotalAssets?: number;

    // Short-term liabilities (ds)
    @JsonProperty({ path: 'ds_Lyhiajalised_kohustused' })
    public readonly dsShortTermLiabilities?: number;

    // Short-term debts (ds)
    @JsonProperty({ path: 'ds_Lyhiajalised_volad' })
    public readonly dsShortTermDebts?: number;

    // Short-term loans (ds)
    @JsonProperty({ path: 'ds_Lyhiajalised_laenud' })
    public readonly dsShortTermLoans?: number;

    // Long-term liabilities (ds)
    @JsonProperty({ path: 'ds_Pikaajalised_kohustused' })
    public readonly dsLongTermLiabilities?: number;

    // Long-term debts (ds)
    @JsonProperty({ path: 'ds_Pikaajalised_volad' })
    public readonly dsLongTermDebts?: number;

    // Long-term loans (ds)
    @JsonProperty({ path: 'ds_Pikaajalised_laenud' })
    public readonly dsLongTermLoans?: number;

    // Total liabilities (ds)
    @JsonProperty({ path: 'ds_Kohustused_kokku' })
    public readonly dsTotalLiabilities?: number;

    // Equity (ds)
    @JsonProperty({ path: 'ds_Omakapital' })
    public readonly dsEquity?: number;

    // Liabilities and equity (ds)
    @JsonProperty({ path: 'ds_Kohustused_Omakapital_kokku' })
    public readonly dsLiabilitiesAndEquity?: number;

    // Sales revenue (ds)
    @JsonProperty({ path: 'ds_Myygitulu' })
    public readonly dsSalesRevenue?: number;

    // Other operating income (ds)
    @JsonProperty({ path: 'ds_Muud_aritulud' })
    public readonly dsOtherOperatingIncome?: number;

    // Other operating expenses (ds)
    @JsonProperty({ path: 'ds_Muud_arikulud' })
    public readonly dsOtherOperatingExpenses?: number;

    // Personnel expenses (ds)
    @JsonProperty({ path: 'ds_Toojoukulud' })
    public readonly dsPersonnelExpenses?: number;

    // Operating profit (ds)
    @JsonProperty({ path: 'ds_Arikasum' })
    public readonly dsOperatingProfit?: number;

    // Interest expenses (ds)
    @JsonProperty({ path: 'ds_Intressikulud' })
    public readonly dsInterestExpenses?: number;

    // Net profit (ds)
    @JsonProperty({ path: 'ds_Aruandeaasta_kasum' })
    public readonly dsNetProfit?: number;

    // Number of companies in sector
    @JsonProperty({ path: 'ettevõtete_arv_sektoris' })
    public readonly numberOfCompaniesInSector?: number;

    // Score 1: Liquidity
    @JsonProperty({ path: 'skoor_1_likviidsus' })
    public readonly score1Liquidity?: number;

    // Score 2: Efficiency
    @JsonProperty({ path: 'skoor_2_efektiivsus' })
    public readonly score2Efficiency?: number;

    // Score 3: Structure
    @JsonProperty({ path: 'skoor_3_struktuur' })
    public readonly score3Structure?: number;

    // Score 4: Profitability
    @JsonProperty({ path: 'skoor_4_tasuvus' })
    public readonly score4Profitability?: number;

    // Yearly Score 1: Liquidity
    @JsonProperty({ path: 'y_skoor_1_likviidsus' })
    public readonly yScore1Liquidity?: number;

    // Yearly Score 2: Efficiency
    @JsonProperty({ path: 'y_skoor_2_efektiivsus' })
    public readonly yScore2Efficiency?: number;

    // Yearly Score 3: Structure
    @JsonProperty({ path: 'y_skoor_3_struktuur' })
    public readonly yScore3Structure?: number;

    // Yearly Score 4: Profitability
    @JsonProperty({ path: 'y_skoor_4_tasuvus' })
    public readonly yScore4Profitability?: number;

    // GDP at Current Prices
    @JsonProperty({ path: 'SKP_jooksevhindades' })
    public readonly GDPCurrentPrices?: number;

    // GDP Nominal Growth
    @JsonProperty({ path: 'SKP_nominaalkasv' })
    public readonly GDPNominalGrowth?: number;

    // GDP at Persistent Prices
    @JsonProperty({ path: 'SKP_pysivhindades' })
    public readonly GDPPersistentPrices?: number;

    // GDP Real Growth
    @JsonProperty({ path: 'SKP_reaalkasv' })
    public readonly GDPRealGrowth?: number;

    // Consumer Price Index
    @JsonProperty({ path: 'Tarbijahinnaindeks' })
    public readonly ConsumerPriceIndex?: number;

    // Average Monthly Wage
    @JsonProperty({ path: 'Keskmine_kuupalk' })
    public readonly AverageMonthlyWage?: number;

    // Wage Growth
    @JsonProperty({ path: 'Palgakasv' })
    public readonly WageGrowth?: number;

    // Labor Productivity Growth
    @JsonProperty({ path: 'Tooviljakuse_kasv' })
    public readonly LaborProductivityGrowth?: number;

    // Sector Liquidity Percentile
    @JsonProperty({ path: 'sektor_likviidsus_protsentiil' })
    public readonly sectorLiquidityPercentile?: number;

    // Sector Efficiency Percentile
    @JsonProperty({ path: 'sektor_efektiivsus_protsentiil' })
    public readonly sectorEfficiencyPercentile?: number;

    // Sector Structure Percentile
    @JsonProperty({ path: 'sektor_struktuur_protsentiil' })
    public readonly sectorStructurePercentile?: number;

    // Sector Profitability Percentile
    @JsonProperty({ path: 'sektor_tasuvus_protsentiil' })
    public readonly sectorProfitabilityPercentile?: number;

    // Cluster Liquidity Percentile
    @JsonProperty({ path: 'klaster_likviidsus_protsentiil' })
    public readonly clusterLiquidityPercentile?: number;

    // Cluster Efficiency Percentile
    @JsonProperty({ path: 'klaster_efektiivsus_protsentiil' })
    public readonly clusterEfficiencyPercentile?: number;

    // Cluster Structure Percentile
    @JsonProperty({ path: 'klaster_struktuur_protsentiil' })
    public readonly clusterStructurePercentile?: number;

    // Cluster Profitability Percentile
    @JsonProperty({ path: 'klaster_tasuvus_protsentiil' })
    public readonly clusterProfitabilityPercentile?: number;

    // Municipality Liquidity Percentile
    @JsonProperty({ path: 'KOV_likviidsus_protsentiil' })
    public readonly municipalityLiquidityPercentile?: number;

    // Municipality Efficiency Percentile
    @JsonProperty({ path: 'KOV_efektiivsus_protsentiil' })
    public readonly municipalityEfficiencyPercentile?: number;

    // Municipality Structure Percentile
    @JsonProperty({ path: 'KOV_struktuur_protsentiil' })
    public readonly municipalityStructurePercentile?: number;

    // Municipality Profitability Percentile
    @JsonProperty({ path: 'KOV_tasuvus_protsentiil' })
    public readonly municipalityProfitabilityPercentile?: number;

    // County Liquidity Percentile
    @JsonProperty({ path: 'maakond_likviidsus_protsentiil' })
    public readonly countyLiquidityPercentile?: number;

    // County Efficiency Percentile
    @JsonProperty({ path: 'maakond_efektiivsus_protsentiil' })
    public readonly countyEfficiencyPercentile?: number;

    // County Structure Percentile
    @JsonProperty({ path: 'maakond_struktuur_protsentiil' })
    public readonly countyStructurePercentile?: number;

    // County Profitability Percentile
    @JsonProperty({ path: 'maakond_tasuvus_protsentiil' })
    public readonly countyProfitabilityPercentile?: number;

    // County x Cluster Liquidity Percentile
    @JsonProperty({ path: 'maakond_x_klaster_likviidsus_protsentiil' })
    public readonly countyXClusterLiquidityPercentile?: number;

    // County x Cluster Efficiency Percentile
    @JsonProperty({ path: 'maakond_x_klaster_efektiivsus_protsentiil' })
    public readonly countyXClusterEfficiencyPercentile?: number;

    // County x Cluster Structure Percentile
    @JsonProperty({ path: 'maakond_x_klaster_struktuur_protsentiil' })
    public readonly countyXClusterStructurePercentile?: number;

    // County x Cluster Profitability Percentile
    @JsonProperty({ path: 'maakond_x_klaster_tasuvus_protsentiil' })
    public readonly countyXClusterProfitabilityPercentile?: number;

    // Company Size Class Liquidity Percentile
    @JsonProperty({ path: 'suurusklass_likviidsus_protsentiil' })
    public readonly companySizeClassLiquidityPercentile?: number;

    // Company Size Class Efficiency Percentile
    @JsonProperty({ path: 'suurusklass_efektiivsus_protsentiil' })
    public readonly companySizeClassEfficiencyPercentile?: number;

    // Company Size Class Structure Percentile
    @JsonProperty({ path: 'suurusklass_struktuur_protsentiil' })
    public readonly companySizeClassStructurePercentile?: number;

    // Company Size Class Profitability Percentile
    @JsonProperty({ path: 'suurusklass_tasuvus_protsentiil' })
    public readonly companySizeClassProfitabilityPercentile?: number;

    // Sector Liquidity N
    @JsonProperty({ path: 'sektor_likviidsus_n' })
    public readonly sectorLiquidityN?: number;

    // Sector Efficiency N
    @JsonProperty({ path: 'sektor_efektiivsus_n' })
    public readonly sectorEfficiencyN?: number;

    // Sector Structure N
    @JsonProperty({ path: 'sektor_struktuur_n' })
    public readonly sectorStructureN?: number;

    // Sector Profitability N
    @JsonProperty({ path: 'sektor_tasuvus_n' })
    public readonly sectorProfitabilityN?: number;

    // Cluster Liquidity N
    @JsonProperty({ path: 'klaster_likviidsus_n' })
    public readonly clusterLiquidityN?: number;

    // Cluster Efficiency N
    @JsonProperty({ path: 'klaster_efektiivsus_n' })
    public readonly clusterEfficiencyN?: number;

    // Cluster Structure N
    @JsonProperty({ path: 'klaster_struktuur_n' })
    public readonly clusterStructureN?: number;

    // Cluster Profitability N
    @JsonProperty({ path: 'klaster_tasuvus_n' })
    public readonly clusterProfitabilityN?: number;

    // Municipality Liquidity N
    @JsonProperty({ path: 'KOV_likviidsus_n' })
    public readonly municipalityLiquidityN?: number;

    // Municipality Efficiency N
    @JsonProperty({ path: 'KOV_efektiivsus_n' })
    public readonly municipalityEfficiencyN?: number;

    // Municipality Structure N
    @JsonProperty({ path: 'KOV_struktuur_n' })
    public readonly municipalityStructureN?: number;

    // Municipality Profitability N
    @JsonProperty({ path: 'KOV_tasuvus_n' })
    public readonly municipalityProfitabilityN?: number;

    // County Liquidity N
    @JsonProperty({ path: 'maakond_likviidsus_n' })
    public readonly countyLiquidityN?: number;

    // County Efficiency N
    @JsonProperty({ path: 'maakond_efektiivsus_n' })
    public readonly countyEfficiencyN?: number;

    // County Structure N
    @JsonProperty({ path: 'maakond_struktuur_n' })
    public readonly countyStructureN?: number;

    // County Profitability N
    @JsonProperty({ path: 'maakond_tasuvus_n' })
    public readonly countyProfitabilityN?: number;

    // County x Cluster Liquidity N
    @JsonProperty({ path: 'maakond_x_klaster_likviidsus_n' })
    public readonly countyXClusterLiquidityN?: number;

    // County x Cluster Efficiency N
    @JsonProperty({ path: 'maakond_x_klaster_efektiivsus_n' })
    public readonly countyXClusterEfficiencyN?: number;

    // County x Cluster Structure N
    @JsonProperty({ path: 'maakond_x_klaster_struktuur_n' })
    public readonly countyXClusterStructureN?: number;

    // County x Cluster Profitability N
    @JsonProperty({ path: 'maakond_x_klaster_tasuvus_n' })
    public readonly countyXClusterProfitabilityN?: number;

    // Company Size Class Liquidity N
    @JsonProperty({ path: 'suurusklass_likviidsus_n' })
    public readonly companySizeClassLiquidityN?: number;

    // Company Size Class Efficiency N
    @JsonProperty({ path: 'suurusklass_efektiivsus_n' })
    public readonly companySizeClassEfficiencyN?: number;

    // Company Size Class Structure N
    @JsonProperty({ path: 'suurusklass_struktuur_n' })
    public readonly companySizeClassStructureN?: number;

    // Company Size Class Profitability N
    @JsonProperty({ path: 'suurusklass_tasuvus_n' })
    public readonly companySizeClassProfitabilityN?: number;
}