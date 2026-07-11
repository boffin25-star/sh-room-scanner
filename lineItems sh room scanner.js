// Curated Xactimate line items organized by detected object type
// Each object maps to an array of line items a restoration estimator would commonly need

export const LINE_ITEMS_DB = {
  "kitchen sink": [
    { id: "PLM-SINK-R1",  code: "PLM SINK",    category: "Plumbing",   description: "Remove kitchen sink – single basin",                unit: "EA",  price: 62.00 },
    { id: "PLM-SINK-R2",  code: "PLM SINK",    category: "Plumbing",   description: "Replace kitchen sink – single basin, stainless",    unit: "EA",  price: 285.00 },
    { id: "PLM-SINK-R3",  code: "PLM SINK",    category: "Plumbing",   description: "Replace kitchen sink – double basin, stainless",    unit: "EA",  price: 375.00 },
    { id: "PLM-FAUC-R1",  code: "PLM FAUC",    category: "Plumbing",   description: "Remove kitchen faucet",                             unit: "EA",  price: 45.00 },
    { id: "PLM-FAUC-R2",  code: "PLM FAUC",    category: "Plumbing",   description: "Replace kitchen faucet – single handle",            unit: "EA",  price: 195.00 },
    { id: "PLM-DRAIN-R1", code: "PLM DRAIN",   category: "Plumbing",   description: "Replace drain basket assembly",                     unit: "EA",  price: 48.00 },
    { id: "PLM-SUPL-R1",  code: "PLM SUPL",    category: "Plumbing",   description: "Replace supply lines – pair (hot/cold)",            unit: "EA",  price: 38.00 },
    { id: "PLM-TRAP-R1",  code: "PLM TRAP",    category: "Plumbing",   description: "Replace P-trap assembly",                           unit: "EA",  price: 52.00 },
    { id: "CAB-BASE-R1",  code: "CAB BASE",    category: "Cabinetry",  description: "Remove sink base cabinet",                          unit: "EA",  price: 85.00 },
    { id: "CAB-BASE-R2",  code: "CAB BASE",    category: "Cabinetry",  description: "Replace sink base cabinet – 36\"",                  unit: "EA",  price: 480.00 },
    { id: "CAR-DEMO-D1",  code: "CAR DEMO",    category: "Demo",       description: "Debris removal – haul off",                         unit: "HR",  price: 75.00 },
  ],

  "bathroom sink": [
    { id: "PLM-BSNK-R1",  code: "PLM BSNK",   category: "Plumbing",   description: "Remove bathroom sink – vanity top",                 unit: "EA",  price: 55.00 },
    { id: "PLM-BSNK-R2",  code: "PLM BSNK",   category: "Plumbing",   description: "Replace bathroom sink – drop-in porcelain",         unit: "EA",  price: 215.00 },
    { id: "PLM-BSNK-R3",  code: "PLM BSNK",   category: "Plumbing",   description: "Replace bathroom sink – undermount",                unit: "EA",  price: 265.00 },
    { id: "PLM-BFAU-R1",  code: "PLM BFAU",   category: "Plumbing",   description: "Remove bathroom faucet",                            unit: "EA",  price: 40.00 },
    { id: "PLM-BFAU-R2",  code: "PLM BFAU",   category: "Plumbing",   description: "Replace bathroom faucet – 4\" spread",              unit: "EA",  price: 165.00 },
    { id: "PLM-PTRAP-R1", code: "PLM TRAP",   category: "Plumbing",   description: "Replace P-trap and drain",                          unit: "EA",  price: 48.00 },
    { id: "PLM-STOP-R1",  code: "PLM STOP",   category: "Plumbing",   description: "Replace supply stop valves (pair)",                 unit: "EA",  price: 65.00 },
    { id: "VAN-TOP-R1",   code: "VAN TOP",    category: "Cabinetry",  description: "Replace vanity top – cultured marble 25\"",         unit: "LF",  price: 95.00 },
    { id: "VAN-CAB-R1",   code: "VAN CAB",    category: "Cabinetry",  description: "Replace vanity cabinet – 24\"",                     unit: "EA",  price: 380.00 },
  ],

  "toilet": [
    { id: "PLM-TOL-R1",   code: "PLM TOL",    category: "Plumbing",   description: "Remove toilet",                                     unit: "EA",  price: 70.00 },
    { id: "PLM-TOL-R2",   code: "PLM TOL",    category: "Plumbing",   description: "Replace toilet – standard 1.6 gpf",                 unit: "EA",  price: 395.00 },
    { id: "PLM-TOL-R3",   code: "PLM TOL",    category: "Plumbing",   description: "Replace toilet – ADA height, elongated",            unit: "EA",  price: 465.00 },
    { id: "PLM-TSEAT-R1", code: "PLM SEAT",   category: "Plumbing",   description: "Replace toilet seat",                               unit: "EA",  price: 55.00 },
    { id: "PLM-TSUPPLY",  code: "PLM SUPL",   category: "Plumbing",   description: "Replace toilet supply line & stop valve",           unit: "EA",  price: 58.00 },
    { id: "PLM-WAX-R1",   code: "PLM WAX",    category: "Plumbing",   description: "Replace wax ring and closet bolts",                 unit: "EA",  price: 45.00 },
  ],

  "bathtub": [
    { id: "PLM-TUB-R1",   code: "PLM TUB",    category: "Plumbing",   description: "Remove bathtub",                                    unit: "EA",  price: 185.00 },
    { id: "PLM-TUB-R2",   code: "PLM TUB",    category: "Plumbing",   description: "Replace bathtub – alcove, fiberglass",              unit: "EA",  price: 895.00 },
    { id: "PLM-TFAU-R1",  code: "PLM TFAU",   category: "Plumbing",   description: "Remove tub faucet/shower valve",                    unit: "EA",  price: 65.00 },
    { id: "PLM-TFAU-R2",  code: "PLM TFAU",   category: "Plumbing",   description: "Replace tub/shower valve, trim & spout",            unit: "EA",  price: 285.00 },
    { id: "TIL-SURR-R1",  code: "TIL SURR",   category: "Tile",       description: "Remove tub surround tile",                          unit: "SF",  price: 3.50 },
    { id: "TIL-SURR-R2",  code: "TIL SURR",   category: "Tile",       description: "Replace tub surround tile – ceramic, up to 4\"x4\"",unit: "SF",  price: 14.50 },
    { id: "TIL-SURR-R3",  code: "TIL BKRD",   category: "Tile",       description: "Replace cement backer board – 1/2\"",               unit: "SF",  price: 3.85 },
    { id: "PLM-OVFLOW",   code: "PLM OVFL",   category: "Plumbing",   description: "Replace overflow plate and drain",                  unit: "EA",  price: 68.00 },
  ],

  "shower": [
    { id: "PLM-SHWR-R1",  code: "PLM SHWR",   category: "Plumbing",   description: "Remove shower unit",                                unit: "EA",  price: 195.00 },
    { id: "PLM-SHWR-R2",  code: "PLM SHWR",   category: "Plumbing",   description: "Replace shower valve and trim kit",                 unit: "EA",  price: 315.00 },
    { id: "PLM-SHEAD-R1", code: "PLM HEAD",   category: "Plumbing",   description: "Replace showerhead",                               unit: "EA",  price: 85.00 },
    { id: "PLM-DRAIN-S1", code: "PLM DRNS",   category: "Plumbing",   description: "Replace shower drain assembly",                     unit: "EA",  price: 95.00 },
    { id: "TIL-SHWR-R1",  code: "TIL SHWR",   category: "Tile",       description: "Remove shower tile",                               unit: "SF",  price: 3.75 },
    { id: "TIL-SHWR-R2",  code: "TIL SHWR",   category: "Tile",       description: "Replace shower tile – ceramic",                    unit: "SF",  price: 16.50 },
    { id: "TIL-PAN-R1",   code: "TIL PAN",    category: "Tile",       description: "Replace shower pan liner",                         unit: "SF",  price: 8.50 },
    { id: "TIL-GROUT-R1", code: "TIL GROUT",  category: "Tile",       description: "Regrout shower – per SF",                          unit: "SF",  price: 4.25 },
    { id: "GLS-DOOR-R1",  code: "GLS DOOR",   category: "Glass",      description: "Remove shower door/enclosure",                     unit: "EA",  price: 95.00 },
    { id: "GLS-DOOR-R2",  code: "GLS DOOR",   category: "Glass",      description: "Replace shower door – frameless glass",            unit: "EA",  price: 785.00 },
  ],

  "drywall": [
    { id: "DRY-RMV-R1",   code: "DRY RMV",    category: "Drywall",    description: "Remove drywall – 1/2\"",                            unit: "SF",  price: 1.15 },
    { id: "DRY-INST-R1",  code: "DRY INST",   category: "Drywall",    description: "Replace drywall – 1/2\", hung, taped, floated",     unit: "SF",  price: 2.85 },
    { id: "DRY-INST-R2",  code: "DRY INST",   category: "Drywall",    description: "Replace drywall – 5/8\" Type X, fire rated",        unit: "SF",  price: 3.25 },
    { id: "DRY-TEXT-R1",  code: "DRY TEXT",   category: "Drywall",    description: "Texture drywall – orange peel",                     unit: "SF",  price: 0.95 },
    { id: "DRY-TEXT-R2",  code: "DRY TEXT",   category: "Drywall",    description: "Texture drywall – knockdown",                       unit: "SF",  price: 1.10 },
    { id: "DRY-PRIME-R1", code: "PNT PRIM",   category: "Paint",      description: "Prime drywall – 1 coat",                            unit: "SF",  price: 0.52 },
    { id: "DRY-CORNER",   code: "DRY CORN",   category: "Drywall",    description: "Install corner bead – metal",                       unit: "LF",  price: 1.85 },
    { id: "DRY-INSUL-R1", code: "INS BATT",   category: "Insulation", description: "Replace batt insulation – R-13, 3.5\"",             unit: "SF",  price: 1.45 },
  ],

  "ceiling": [
    { id: "CLG-RMV-R1",   code: "CLG RMV",    category: "Drywall",    description: "Remove ceiling drywall",                            unit: "SF",  price: 1.25 },
    { id: "CLG-INST-R1",  code: "CLG INST",   category: "Drywall",    description: "Replace ceiling drywall – 1/2\"",                   unit: "SF",  price: 3.15 },
    { id: "CLG-TEXT-R1",  code: "CLG TEXT",   category: "Drywall",    description: "Ceiling texture – acoustic/popcorn",                unit: "SF",  price: 1.35 },
    { id: "CLG-TEXT-R2",  code: "CLG TEXT",   category: "Drywall",    description: "Remove popcorn texture",                            unit: "SF",  price: 0.88 },
    { id: "CLG-PNT-R1",   code: "PNT CLG",    category: "Paint",      description: "Paint ceiling – 1 coat",                            unit: "SF",  price: 0.68 },
    { id: "CLG-PNT-R2",   code: "PNT CLG",    category: "Paint",      description: "Paint ceiling – 2 coats",                           unit: "SF",  price: 1.05 },
    { id: "CLG-INST-R2",  code: "CLG INST",   category: "Drywall",    description: "Replace drop ceiling grid – 2x2",                   unit: "SF",  price: 4.25 },
    { id: "CLG-INST-R3",  code: "CLG TILE",   category: "Drywall",    description: "Replace drop ceiling tile – 2x2",                   unit: "EA",  price: 8.50 },
  ],

  "flooring": [
    { id: "FLR-RMV-R1",   code: "FLR RMV",    category: "Flooring",   description: "Remove carpet and pad",                             unit: "SY",  price: 2.85 },
    { id: "FLR-RMV-R2",   code: "FLR RMV",    category: "Flooring",   description: "Remove hardwood flooring",                          unit: "SF",  price: 2.15 },
    { id: "FLR-RMV-R3",   code: "FLR RMV",    category: "Flooring",   description: "Remove vinyl/LVP flooring",                         unit: "SF",  price: 1.45 },
    { id: "FLR-RMV-R4",   code: "FLR RMV",    category: "Flooring",   description: "Remove ceramic/porcelain tile",                     unit: "SF",  price: 3.25 },
    { id: "FLR-INST-R1",  code: "FLR CARP",   category: "Flooring",   description: "Replace carpet – medium grade w/ pad",              unit: "SY",  price: 32.50 },
    { id: "FLR-INST-R2",  code: "FLR LVP",    category: "Flooring",   description: "Replace LVP flooring – click-lock",                 unit: "SF",  price: 5.85 },
    { id: "FLR-INST-R3",  code: "FLR HWD",    category: "Flooring",   description: "Replace hardwood – 3/4\" 2.25\" strip, sand/finish",unit: "SF",  price: 9.50 },
    { id: "FLR-INST-R4",  code: "FLR TILE",   category: "Flooring",   description: "Replace floor tile – ceramic 12x12",                unit: "SF",  price: 8.75 },
    { id: "FLR-INST-R5",  code: "FLR TILE",   category: "Flooring",   description: "Replace floor tile – porcelain 12x24",              unit: "SF",  price: 11.50 },
    { id: "FLR-SUB-R1",   code: "FLR SUBF",   category: "Flooring",   description: "Replace subfloor – 3/4\" OSB",                      unit: "SF",  price: 4.85 },
    { id: "FLR-TBAR-R1",  code: "FLR TBAR",   category: "Flooring",   description: "Replace transition strip / T-bar",                  unit: "LF",  price: 4.25 },
  ],

  "window": [
    { id: "WIN-RMV-R1",   code: "WIN RMV",    category: "Windows",    description: "Remove window – single/double hung",                unit: "EA",  price: 85.00 },
    { id: "WIN-INST-R1",  code: "WIN INST",   category: "Windows",    description: "Replace window – vinyl single hung, 3x4",           unit: "EA",  price: 385.00 },
    { id: "WIN-INST-R2",  code: "WIN INST",   category: "Windows",    description: "Replace window – vinyl double hung, 3x4",           unit: "EA",  price: 465.00 },
    { id: "WIN-INST-R3",  code: "WIN INST",   category: "Windows",    description: "Replace window – aluminum sliding, 4x3",            unit: "EA",  price: 325.00 },
    { id: "WIN-TRIM-R1",  code: "WIN TRIM",   category: "Windows",    description: "Replace window casing – interior",                  unit: "LF",  price: 3.85 },
    { id: "WIN-TRIM-R2",  code: "WIN TRIM",   category: "Windows",    description: "Replace window sill – wood",                        unit: "LF",  price: 6.50 },
    { id: "WIN-SEAL-R1",  code: "WIN SEAL",   category: "Windows",    description: "Caulk and seal window – exterior",                  unit: "LF",  price: 2.15 },
    { id: "WIN-FLASH-R1", code: "WIN FLSH",   category: "Windows",    description: "Replace window flashing",                           unit: "LF",  price: 4.75 },
  ],

  "door": [
    { id: "DOR-RMV-R1",   code: "DOR RMV",    category: "Doors",      description: "Remove interior door and frame",                    unit: "EA",  price: 65.00 },
    { id: "DOR-RMV-R2",   code: "DOR RMV",    category: "Doors",      description: "Remove exterior door and frame",                    unit: "EA",  price: 95.00 },
    { id: "DOR-INST-R1",  code: "DOR INST",   category: "Doors",      description: "Replace interior door – 6-panel hollow core, 2.8",  unit: "EA",  price: 285.00 },
    { id: "DOR-INST-R2",  code: "DOR INST",   category: "Doors",      description: "Replace interior door – solid core, 2.8",           unit: "EA",  price: 465.00 },
    { id: "DOR-INST-R3",  code: "DOR INST",   category: "Doors",      description: "Replace exterior door – steel insulated, 3.0",      unit: "EA",  price: 785.00 },
    { id: "DOR-HW-R1",    code: "DOR HW",     category: "Doors",      description: "Replace door hardware – lever set, interior",       unit: "EA",  price: 95.00 },
    { id: "DOR-HW-R2",    code: "DOR HW",     category: "Doors",      description: "Replace door hardware – deadbolt + lever, exterior", unit: "EA",  price: 185.00 },
    { id: "DOR-TRIM-R1",  code: "DOR TRIM",   category: "Doors",      description: "Replace door casing – both sides",                  unit: "LF",  price: 3.45 },
    { id: "DOR-JAMB-R1",  code: "DOR JAMB",   category: "Doors",      description: "Replace door jamb – interior",                      unit: "EA",  price: 125.00 },
  ],

  "cabinet": [
    { id: "CAB-RMV-R1",   code: "CAB RMV",    category: "Cabinetry",  description: "Remove upper cabinet",                              unit: "LF",  price: 12.50 },
    { id: "CAB-RMV-R2",   code: "CAB RMV",    category: "Cabinetry",  description: "Remove base cabinet",                               unit: "LF",  price: 15.00 },
    { id: "CAB-INST-R1",  code: "CAB UPPR",   category: "Cabinetry",  description: "Replace upper cabinets – stock, per LF",            unit: "LF",  price: 185.00 },
    { id: "CAB-INST-R2",  code: "CAB BASE",   category: "Cabinetry",  description: "Replace base cabinets – stock, per LF",             unit: "LF",  price: 225.00 },
    { id: "CAB-CTOP-R1",  code: "CAB CTOP",   category: "Cabinetry",  description: "Replace countertop – laminate",                     unit: "LF",  price: 42.00 },
    { id: "CAB-CTOP-R2",  code: "CAB CTOP",   category: "Cabinetry",  description: "Replace countertop – granite",                      unit: "SF",  price: 65.00 },
    { id: "CAB-CTOP-R3",  code: "CAB CTOP",   category: "Cabinetry",  description: "Replace countertop – quartz",                       unit: "SF",  price: 72.00 },
    { id: "CAB-HW-R1",    code: "CAB HW",     category: "Cabinetry",  description: "Replace cabinet hardware – pulls/knobs",            unit: "EA",  price: 18.50 },
  ],

  "refrigerator": [
    { id: "APP-REF-R1",   code: "APP REF",    category: "Appliances", description: "Remove refrigerator",                               unit: "EA",  price: 75.00 },
    { id: "APP-REF-R2",   code: "APP REF",    category: "Appliances", description: "Replace refrigerator – 25 cu ft, side by side",     unit: "EA",  price: 1285.00 },
    { id: "APP-REF-R3",   code: "APP REF",    category: "Appliances", description: "Replace refrigerator – 20 cu ft, top freezer",      unit: "EA",  price: 895.00 },
    { id: "PLM-WLINE",    code: "PLM WLIN",   category: "Plumbing",   description: "Replace ice maker water line",                      unit: "EA",  price: 65.00 },
  ],

  "dishwasher": [
    { id: "APP-DW-R1",    code: "APP DW",     category: "Appliances", description: "Remove dishwasher",                                 unit: "EA",  price: 65.00 },
    { id: "APP-DW-R2",    code: "APP DW",     category: "Appliances", description: "Replace dishwasher – built-in, standard",           unit: "EA",  price: 745.00 },
    { id: "PLM-DW-R1",    code: "PLM DW",     category: "Plumbing",   description: "Replace dishwasher supply and drain line",           unit: "EA",  price: 55.00 },
  ],

  "stove": [
    { id: "APP-STR-R1",   code: "APP STR",    category: "Appliances", description: "Remove range/stove",                                unit: "EA",  price: 75.00 },
    { id: "APP-STR-R2",   code: "APP STR",    category: "Appliances", description: "Replace electric range – freestanding",             unit: "EA",  price: 895.00 },
    { id: "APP-STR-R3",   code: "APP STR",    category: "Appliances", description: "Replace gas range – freestanding",                  unit: "EA",  price: 985.00 },
    { id: "APP-HOOD-R1",  code: "APP HOOD",   category: "Appliances", description: "Remove range hood",                                 unit: "EA",  price: 65.00 },
    { id: "APP-HOOD-R2",  code: "APP HOOD",   category: "Appliances", description: "Replace range hood – 30\", ductless",               unit: "EA",  price: 285.00 },
  ],

  "water heater": [
    { id: "PLM-WH-R1",    code: "PLM WH",     category: "Plumbing",   description: "Remove water heater",                               unit: "EA",  price: 95.00 },
    { id: "PLM-WH-R2",    code: "PLM WH",     category: "Plumbing",   description: "Replace water heater – 40 gal, electric",           unit: "EA",  price: 895.00 },
    { id: "PLM-WH-R3",    code: "PLM WH",     category: "Plumbing",   description: "Replace water heater – 40 gal, natural gas",        unit: "EA",  price: 985.00 },
    { id: "PLM-WH-R4",    code: "PLM WH",     category: "Plumbing",   description: "Replace water heater – 50 gal, gas",                unit: "EA",  price: 1085.00 },
    { id: "PLM-EXPV-R1",  code: "PLM EXPV",   category: "Plumbing",   description: "Replace expansion tank",                            unit: "EA",  price: 165.00 },
    { id: "PLM-PRV-R1",   code: "PLM PRV",    category: "Plumbing",   description: "Replace pressure relief valve",                     unit: "EA",  price: 85.00 },
  ],

  "electrical panel": [
    { id: "ELC-PNL-R1",   code: "ELC PNL",    category: "Electrical", description: "Remove electrical panel",                           unit: "EA",  price: 185.00 },
    { id: "ELC-PNL-R2",   code: "ELC PNL",    category: "Electrical", description: "Replace electrical panel – 100 amp",                unit: "EA",  price: 1850.00 },
    { id: "ELC-PNL-R3",   code: "ELC PNL",    category: "Electrical", description: "Replace electrical panel – 200 amp",                unit: "EA",  price: 2450.00 },
    { id: "ELC-BRKR-R1",  code: "ELC BRKR",   category: "Electrical", description: "Replace circuit breaker – single pole",             unit: "EA",  price: 75.00 },
    { id: "ELC-BRKR-R2",  code: "ELC BRKR",   category: "Electrical", description: "Replace circuit breaker – double pole",             unit: "EA",  price: 125.00 },
  ],

  "outlet": [
    { id: "ELC-OUT-R1",   code: "ELC OUT",    category: "Electrical", description: "Replace duplex outlet",                             unit: "EA",  price: 45.00 },
    { id: "ELC-GFCI-R1",  code: "ELC GFCI",   category: "Electrical", description: "Replace GFCI outlet",                               unit: "EA",  price: 85.00 },
    { id: "ELC-AFCI-R1",  code: "ELC AFCI",   category: "Electrical", description: "Replace AFCI breaker outlet",                       unit: "EA",  price: 125.00 },
    { id: "ELC-CVPL-R1",  code: "ELC CVPL",   category: "Electrical", description: "Replace cover plate",                               unit: "EA",  price: 8.50 },
  ],

  "light fixture": [
    { id: "ELC-LGT-R1",   code: "ELC LGT",    category: "Electrical", description: "Remove light fixture",                              unit: "EA",  price: 45.00 },
    { id: "ELC-LGT-R2",   code: "ELC LGT",    category: "Electrical", description: "Replace ceiling light fixture – flush mount",       unit: "EA",  price: 145.00 },
    { id: "ELC-LGT-R3",   code: "ELC LGT",    category: "Electrical", description: "Replace recessed light – 6\" LED",                  unit: "EA",  price: 125.00 },
    { id: "ELC-LGT-R4",   code: "ELC LGT",    category: "Electrical", description: "Replace chandelier – up to $500 allowance",         unit: "EA",  price: 685.00 },
    { id: "ELC-VFN-R1",   code: "ELC VFN",    category: "Electrical", description: "Replace bathroom exhaust fan",                      unit: "EA",  price: 185.00 },
    { id: "ELC-CEFN-R1",  code: "ELC CEFN",   category: "Electrical", description: "Replace ceiling fan with light",                    unit: "EA",  price: 285.00 },
  ],

  "hvac": [
    { id: "HVA-FURN-R1",  code: "HVA FURN",   category: "HVAC",       description: "Remove furnace",                                    unit: "EA",  price: 285.00 },
    { id: "HVA-FURN-R2",  code: "HVA FURN",   category: "HVAC",       description: "Replace gas furnace – 80,000 BTU, 80% AFUE",        unit: "EA",  price: 2850.00 },
    { id: "HVA-AC-R1",    code: "HVA AC",     category: "HVAC",       description: "Remove AC condenser unit",                          unit: "EA",  price: 185.00 },
    { id: "HVA-AC-R2",    code: "HVA AC",     category: "HVAC",       description: "Replace AC condenser – 3 ton, 14 SEER",             unit: "EA",  price: 2650.00 },
    { id: "HVA-DUCT-R1",  code: "HVA DUCT",   category: "HVAC",       description: "Replace flexible duct – per LF",                    unit: "LF",  price: 8.50 },
    { id: "HVA-VENT-R1",  code: "HVA VENT",   category: "HVAC",       description: "Replace supply/return vent cover",                  unit: "EA",  price: 28.00 },
    { id: "HVA-FILT-R1",  code: "HVA FILT",   category: "HVAC",       description: "Replace air filter – 16x20",                        unit: "EA",  price: 18.00 },
  ],

  "paint": [
    { id: "PNT-WALL-R1",  code: "PNT WALL",   category: "Paint",      description: "Paint walls – 1 coat",                              unit: "SF",  price: 0.58 },
    { id: "PNT-WALL-R2",  code: "PNT WALL",   category: "Paint",      description: "Paint walls – 2 coats",                             unit: "SF",  price: 0.92 },
    { id: "PNT-TRIM-R1",  code: "PNT TRIM",   category: "Paint",      description: "Paint trim/baseboard",                              unit: "LF",  price: 1.45 },
    { id: "PNT-DOOR-R1",  code: "PNT DOOR",   category: "Paint",      description: "Paint door – both sides",                           unit: "EA",  price: 65.00 },
    { id: "PNT-PRIM-R1",  code: "PNT PRIM",   category: "Paint",      description: "Prime walls – 1 coat",                              unit: "SF",  price: 0.48 },
  ],

  "baseboard": [
    { id: "TRM-BASE-R1",  code: "TRM BASE",   category: "Trim",       description: "Remove baseboard",                                  unit: "LF",  price: 0.85 },
    { id: "TRM-BASE-R2",  code: "TRM BASE",   category: "Trim",       description: "Replace baseboard – 3.5\" colonial",                unit: "LF",  price: 3.85 },
    { id: "TRM-SHOE-R1",  code: "TRM SHOE",   category: "Trim",       description: "Replace shoe molding",                              unit: "LF",  price: 1.65 },
    { id: "TRM-COPE-R1",  code: "TRM COPE",   category: "Trim",       description: "Cope and return corners – baseboard",               unit: "EA",  price: 12.00 },
  ],
};

// Category colors for UI badges
export const CATEGORY_COLORS = {
  "Plumbing":    { bg: "#1E40AF", text: "#BFDBFE" },
  "Tile":        { bg: "#065F46", text: "#A7F3D0" },
  "Cabinetry":   { bg: "#7C2D12", text: "#FED7AA" },
  "Flooring":    { bg: "#4C1D95", text: "#DDD6FE" },
  "Drywall":     { bg: "#1F2937", text: "#D1D5DB" },
  "Windows":     { bg: "#0C4A6E", text: "#BAE6FD" },
  "Doors":       { bg: "#7F1D1D", text: "#FECACA" },
  "Appliances":  { bg: "#134E4A", text: "#99F6E4" },
  "Electrical":  { bg: "#78350F", text: "#FDE68A" },
  "HVAC":        { bg: "#1E3A5F", text: "#93C5FD" },
  "Paint":       { bg: "#4A1D96", text: "#E9D5FF" },
  "Insulation":  { bg: "#14532D", text: "#BBF7D0" },
  "Demo":        { bg: "#450A0A", text: "#FECACA" },
  "Glass":       { bg: "#164E63", text: "#A5F3FC" },
  "Trim":        { bg: "#44403C", text: "#D6D3D1" },
};

// AI prompt for object detection
export const DETECTION_PROMPT = `You are an expert restoration estimator analyzing a photo of a room or space.

Identify every distinct item or surface that a restoration contractor might need to estimate for repair or replacement. Be specific and thorough.

For each item detected, provide:
- label: short name (e.g. "kitchen sink", "drywall", "flooring", "toilet")
- confidence: high/medium/low
- notes: brief observation relevant to restoration (e.g. "water stained", "cracked grout", "damaged")
- x: approximate horizontal center as percentage of image width (0-100)
- y: approximate vertical center as percentage of image height (0-100)

Use ONLY these label values (pick the closest match):
kitchen sink, bathroom sink, toilet, bathtub, shower, drywall, ceiling, flooring, window, door, cabinet, refrigerator, dishwasher, stove, water heater, electrical panel, outlet, light fixture, hvac, paint, baseboard

Return ONLY a JSON array, no explanation, no markdown. Example:
[{"label":"kitchen sink","confidence":"high","notes":"mineral deposits visible","x":35,"y":60},{"label":"cabinet","confidence":"high","notes":"water damage on lower doors","x":60,"y":55}]`;
