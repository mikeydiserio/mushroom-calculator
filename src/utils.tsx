export const calculateDosage = (
  mushroomType?: string,
  consumptionMethod?: string,
  weight?: string,
  height?: string,
  age?: string,
  intensity?: string
) => {
  if (!weight || !height || !age || !intensity) {
    alert("Please fill in all your profile details");
  }

  const w = weight;

  // Determine base dose based on intensity
  let baseDose = 0;
  switch (intensity) {
    case "micro":
      baseDose = 0.1;
      break;
    case "low":
      baseDose = 1.5;
      break;
    case "medium":
      baseDose = 2.5;
      break;
    case "high":
      baseDose = 3.5;
      break;
    case "heroic":
      baseDose = 5;
      break;
    default:
      baseDose = 1.5;
  }

  // Adjust for mushroom species potency
  let potencyFactor = 1;
  switch (mushroomType) {
    case "cubensis":
      potencyFactor = 1;
      break;
    case "cyanescens":
      potencyFactor = 0.6;
      break;
    case "azurescens":
      potencyFactor = 0.4;
      break;

    case "azurescens":
      potencyFactor = 0.4;
      break;
    case "liberty":
      potencyFactor = 0.7;
      break;
    case "truffle":
      potencyFactor = 2;
      break;
    default:
      potencyFactor = 1;
  }

  // Adjust for consumption method
  let methodFactor = 1;
  switch (consumptionMethod) {
    case "dried":
      methodFactor = 1;
      break;
    case "fresh":
      methodFactor = 10; // fresh ~90% water
      break;
    case "tea":
      methodFactor = 1.1;
      break;
    case "lemon":
      methodFactor = 0.8;
      break;
    case "chocolate":
      methodFactor = 1.2;
      break;
    default:
      methodFactor = 1;
  }

  // Adjust for body weight (70kg reference)
  const weightFactor = Math.sqrt(Number(weight) / 70);
  const dosageVal = (
    baseDose *
    potencyFactor *
    methodFactor *
    weightFactor
  ).toFixed(1);

  // Set duration based on intensity
  let duration = "";
  let durationDesc = "";
  switch (intensity) {
    case "micro":
      duration = "4-6 hours";
      durationDesc = "Subtle effects lasting most of the day";
      break;
    case "low":
      duration = "4-6 hours";
      durationDesc = "Mild experience with gradual comedown";
      break;
    case "medium":
      duration = "5-7 hours";
      durationDesc = "Full experience with clear peak and gradual return";
      break;
    case "high":
      duration = "6-8 hours";
      durationDesc = "Intense experience with extended peak";
      break;
    case "heroic":
      duration = "6-10 hours";
      durationDesc = "Very intense experience with long duration";
      break;
    default:
      duration = "4-6 hours";
  }

  // Adjust duration for specific consumption methods
  if (consumptionMethod === "lemon") {
    const parts = duration.split("-").map((d) => Math.floor(parseInt(d) * 0.8));
    duration = parts.join("-") + " hours";
    durationDesc += " (shorter with lemon tek)";
  } else if (consumptionMethod === "chocolate") {
    const parts = duration.split("-").map((d) => Math.floor(parseInt(d) * 1.2));
    duration = parts.join("-") + " hours";
    durationDesc += " (may last longer with edibles)";
  }

  // Set effects based on intensity
  let effects = "";
  let effectsDesc = "";
  switch (intensity) {
    case "micro":
      effects = "Subtle";
      effectsDesc = "Enhanced mood, creativity, slight sensory enhancement";
      break;
    case "low":
      effects = "Mild";
      effectsDesc = "Visual distortions, euphoria, enhanced emotions";
      break;
    case "medium":
      effects = "Moderate";
      effectsDesc = "Clear visuals, time distortion, deep introspection";
      break;
    case "high":
      effects = "Strong";
      effectsDesc = "Intense visuals, ego dissolution, profound insights";
      break;
    case "heroic":
      effects = "Very Strong";
      effectsDesc =
        "Complete loss of ego, mystical experiences, possible entity encounters";
      break;
    case "dont-know":
      effects = "Could be nothing, could be something";
      effectsDesc =
        "You might feel something, but it's hard to say what. Just be careful and enjoy the ride!";
      break;
    default:
      effects = "";
      effectsDesc = "";
  }

  return {
    dosage: dosageVal + (consumptionMethod === "fresh" ? "g fresh" : "g dried"),
    dosageDescription: `For ${intensity} intensity`,
    duration,
    durationDesc,
    effects,
    effectsDesc,
  };
};
