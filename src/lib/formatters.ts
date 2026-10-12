
const numberFormatter = new Intl.NumberFormat(
  "bn-BD",
  {
    maximumFractionDigits: 2,
  }
);

const percentFormatter = new Intl.NumberFormat(
  "bn-BD",
  {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }
);

export function formatPrice(
  price: number
): string {
  return numberFormatter.format(price);
}

export function formatPercentage(
  percentage: number
): string {
  return percentFormatter.format(
    Math.abs(percentage)
  );
}

export function formatUnit(
  unit: string
): string {
  const units: Record<string, string> = {
    kg: "কেজি",
    kilogram: "কেজি",
    g: "গ্রাম",
    gram: "গ্রাম",
    litre: "লিটার",
    liter: "লিটার",
    l: "লিটার",
    piece: "পিস",
    pcs: "পিস",
    dozen: "ডজন",
    hali: "হালি",
  };

  const normalized = unit.trim().toLowerCase();

  return (
    units[normalized] ||
    unit.trim().replace(/^প্রতি\s*/, "")
  );
}
