import type { SdsDocument } from './types';

const sdsDocuments: SdsDocument[] = [
  {
    id: 'acetone-xyz',
    productName: 'Acetone',
    productCode: 'XYZ-1001',
    manufacturer: 'XYZ Chemicals Inc.',
    lastUpdated: '2023-10-26',
    currentVersion: '3.1',
    versions: [
      { version: '3.1', date: '2023-10-26', author: 'J. Doe', summary: 'Updated Section 8 for new PPE recommendations.' },
      { version: '3.0', date: '2022-09-15', author: 'J. Doe', summary: 'Major revision to align with GHS Rev. 8.' },
      { version: '2.5', date: '2021-05-20', author: 'A. Smith', summary: 'Minor correction in Section 11.' },
    ],
    sections: [
      { title: 'Section 1: Identification', content: 'Product Identifier: Acetone. Other means of identification: 2-Propanone, Dimethyl Ketone. Recommended use: Solvent. Manufacturer: XYZ Chemicals Inc., 123 Chemical Lane, ChemCity, USA.' },
      { title: 'Section 2: Hazard(s) identification', content: 'Classification: Flammable liquids (Category 2), Eye irritation (Category 2A), Specific target organ toxicity — single exposure (Category 3), Central nervous system. Signal word: Danger. Hazard statements: Highly flammable liquid and vapor. Causes serious eye irritation. May cause drowsiness or dizziness.' },
      { title: 'Section 3: Composition/information on ingredients', content: 'Substance: Acetone. CAS Number: 67-64-1. Purity: >99.5%.' },
      { title: 'Section 4: First-aid measures', content: 'Inhalation: Move to fresh air. Eye Contact: Rinse with water for several minutes. Skin Contact: Wash with soap and water. Ingestion: Do NOT induce vomiting. Call a poison center or doctor.' },
      { title: 'Section 5: Fire-fighting measures', content: 'Extinguishing media: Use alcohol-resistant foam, carbon dioxide (CO2), or dry chemical. Specific hazards: Vapors may form explosive mixtures with air. Vapors may travel to source of ignition and flash back.' },
      { title: 'Section 6: Accidental release measures', content: 'Personal precautions: Wear respiratory protection. Remove all sources of ignition. Environmental precautions: Prevent entry into waterways. Methods for cleaning up: Absorb with liquid-binding material (sand, diatomite, acid binders, universal binders, sawdust).' },
      { title: 'Section 7: Handling and storage', content: 'Precautions for safe handling: Keep away from heat, sparks, and open flame. Keep container tightly closed. Ground/bond container and receiving equipment. Storage conditions: Store in a well-ventilated place. Keep cool.' },
      { title: 'Section 8: Exposure controls/personal protection', content: 'Exposure limits: ACGIH TLV: 250 ppm TWA, 500 ppm STEL. Engineering controls: Ensure adequate ventilation. Personal protective equipment: Safety glasses, chemical-resistant gloves (butyl rubber), vapor respirator if ventilation is inadequate.' },
      { title: 'Section 9: Physical and chemical properties', content: 'Appearance: Colorless liquid. Odor: Sweetish, mint-like. Boiling point: 56 °C (132.8 °F). Flash point: -20 °C (-4 °F).' },
      { title: 'Section 10: Stability and reactivity', content: 'Reactivity: No dangerous reaction known under conditions of normal use. Chemical stability: Stable under recommended storage conditions. Conditions to avoid: Heat, flames, and sparks. Incompatible materials: Strong oxidizing agents, strong reducing agents, strong bases.' },
      { title: 'Section 11: Toxicological information', content: 'Acute toxicity: LD50 Oral - Rat - 5,800 mg/kg. LD50 Dermal - Rabbit - 7,426 mg/kg. Skin corrosion/irritation: May cause mild skin irritation. Serious eye damage/eye irritation: Causes serious eye irritation.' },
      { title: 'Section 12: Ecological information', content: 'Toxicity to fish: LC50 - Oncorhynchus mykiss (rainbow trout) - 5,540 mg/l - 96 h. Toxicity to daphnia: EC50 - Daphnia magna (Water flea) - 8,800 mg/l - 48 h.' },
      { title: 'Section 13: Disposal considerations', content: 'Dispose of in accordance with local, state, and federal regulations. Must not be disposed of together with household garbage.' },
      { title: 'Section 14: Transport information', content: 'UN number: 1090. UN proper shipping name: Acetone. Transport hazard class: 3. Packing group: II.' },
      { title: 'Section 15: Regulatory information', content: 'SARA 311/312 Hazards: Fire Hazard, Acute Health Hazard. California Prop. 65: This product does not contain any chemicals known to the State of California to cause cancer, birth defects, or any other reproductive harm.' },
      { title: 'Section 16: Other information', content: 'Date of preparation: 2023-10-26. Disclaimer: The information provided is believed to be correct but does not purport to be all inclusive and shall be used only as a guide.' },
    ],
  },
  {
    id: 'isopropyl-alcohol-abc',
    productName: 'Isopropyl Alcohol',
    productCode: 'ABC-2022',
    manufacturer: 'ABC Solutions',
    lastUpdated: '2024-01-10',
    currentVersion: '2.0',
    versions: [
      { version: '2.0', date: '2024-01-10', author: 'L. Chan', summary: 'Biennial review and update of all sections.' },
      { version: '1.0', date: '2022-01-09', author: 'L. Chan', summary: 'Initial document creation.' },
    ],
    sections: [
        { title: 'Section 1: Identification', content: 'Product Identifier: Isopropyl Alcohol. Other means of identification: Isopropanol, IPA, 2-Propanol. Recommended use: Disinfectant, solvent. Manufacturer: ABC Solutions, 456 Industrial Park, Factoria, USA.' },
        { title: 'Section 2: Hazard(s) identification', content: 'Classification: Flammable liquids (Category 2), Eye irritation (Category 2A), Specific target organ toxicity — single exposure (Category 3). Signal word: Danger. Hazard statements: Highly flammable liquid and vapor. Causes serious eye irritation. May cause drowsiness or dizziness.' },
        { title: 'Section 3: Composition/information on ingredients', content: 'Substance: Isopropyl alcohol. CAS Number: 67-63-0. Purity: 99.9%.' },
        { title: 'Section 4: First-aid measures', content: 'Inhalation: Remove victim to fresh air. Eye Contact: Immediately flush eyes with plenty of water for at least 15 minutes. Skin Contact: Wash off with soap and plenty of water. Ingestion: Rinse mouth with water. Consult a physician.' },
        { title: 'Section 5: Fire-fighting measures', content: 'Extinguishing media: Use water spray, alcohol-resistant foam, dry chemical or carbon dioxide. Specific hazards: Flammable. Risk of vapor explosion.' },
        { title: 'Section 6: Accidental release measures', content: 'Personal precautions: Use personal protective equipment. Avoid breathing vapors, mist or gas. Ensure adequate ventilation. Environmental precautions: Do not let product enter drains. Methods for cleaning up: Contain spillage, and then collect with non-combustible absorbent material.' },
        { title: 'Section 7: Handling and storage', content: 'Precautions for safe handling: Avoid contact with skin and eyes. Avoid inhalation of vapor or mist. Keep away from sources of ignition - No smoking. Storage conditions: Keep container tightly closed in a dry and well-ventilated place.' },
        { title: 'Section 8: Exposure controls/personal protection', content: 'Exposure limits: OSHA PEL: 400 ppm TWA. NIOSH REL: 400 ppm TWA, 500 ppm STEL. Engineering controls: Use explosion-proof ventilation equipment. Personal protective equipment: Safety goggles, Neoprene gloves, respirator with organic vapor cartridge.' },
        { title: 'Section 9: Physical and chemical properties', content: 'Appearance: Clear, colorless liquid. Odor: Alcohol-like. Boiling point: 82.6 °C (180.7 °F). Flash point: 11.7 °C (53.1 °F).' },
        { title: 'Section 10: Stability and reactivity', content: 'Reactivity: No data available. Chemical stability: Stable under normal conditions. Incompatible materials: Oxidizing agents, Acid anhydrides, Aluminum, Halogenated compounds, Acids.' },
        { title: 'Section 11: Toxicological information', content: 'Acute toxicity: LD50 Oral - Rat - 5,045 mg/kg. LC50 Inhalation - Rat - 8 h - 16000 ppm. LD50 Dermal - Rabbit - 12,800 mg/kg.' },
        { title: 'Section 12: Ecological information', content: 'Toxicity to fish: LC50 - Pimephales promelas (fathead minnow) - 9,640.00 mg/l - 96 h. Toxicity to daphnia: EC50 - Daphnia magna (Water flea) - 5,102.00 mg/l - 24 h.' },
        { title: 'Section 13: Disposal considerations', content: 'Burn in a chemical incinerator equipped with an afterburner and scrubber but exert extra care in igniting as this material is highly flammable. Offer surplus and non-recyclable solutions to a licensed disposal company.' },
        { title: 'Section 14: Transport information', content: 'UN number: 1219. UN proper shipping name: Isopropanol. Transport hazard class: 3. Packing group: II.' },
        { title: 'Section 15: Regulatory information', content: 'TSCA: Listed. SARA 311/312: Fire Hazard, Acute Health Hazard, Chronic Health Hazard.' },
        { title: 'Section 16: Other information', content: 'Revision Date: 2024-01-10. This information is based on our present knowledge. However, this shall not constitute a guarantee for any specific product features.' },
    ],
  },
];

export function getAllSdsDocuments(): SdsDocument[] {
  return sdsDocuments;
}

export function getSdsDocumentById(id: string): SdsDocument | undefined {
  return sdsDocuments.find((doc) => doc.id === id);
}
