"use client";
import { calculateDosage } from "@/utils";
import Head from "next/head";
import { SetStateAction, useEffect, useRef, useState } from "react";
import InfoCard from "./Components/InfoCard/InfoCard";
import Input from "./Components/Input";
import { Results } from "./Components/Results/Results";
import { mushyInfos } from "./mushroomInfos";
import * as S from "./page.styles";

export interface IResults {
  dosage?: number | string;
  dosageDescription: string;
  mushroomTypeDisplay?: string;
  duration?: string;
  durationDesc?: string;
  effects?: string;
  effectsDesc?: string;
}

export default function Home() {
  // Form states
  const [weight, setWeight] = useState<string | undefined>("");
  const [height, setHeight] = useState<string | undefined>("");
  const [age, setAge] = useState<string | undefined>("");
  const [experience, setExperience] = useState<
    "beginner" | "intermediate" | "experienced"
  >("beginner");
  const [mushroomType, setMushroomType] = useState<string>("cubensis");
  const [consumptionMethod, setConsumptionMethod] = useState<string>("dried");
  const [intensity, setIntensity] = useState<
    "micro" | "low" | "medium" | "high" | "heroic" | ""
  >("");
  const [results, setResults] = useState<IResults | null>(null);

  const [animate, setAnimate] = useState(false);
  const timeoutRef = useRef<number | undefined>(null);

  const handleMouseMove = () => {
    // Start the animation if not already running
    if (!animate) {
      setAnimate(true);
    }
    // Reset the timer on every mouse move
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    // After 1 second of inactivity, pause the animation
    timeoutRef.current = window.setTimeout(() => {
      setAnimate(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCalculateDosage = () => {
    const results = calculateDosage(
      mushroomType,
      consumptionMethod,
      weight,
      height,
      age,
      intensity
    );
    setResults(results);
  };
  const handleReset = () => {
    setWeight(undefined);
    setHeight(undefined);
    setAge(undefined);
    setExperience("beginner");
    setMushroomType("cubensis");
    setConsumptionMethod("dried");
    setIntensity("");
    setResults(null);
  };

  return (
    <>
      <Head>
        <title>Psychedelic Dosage Calculator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <S.PageWrapper>
        <S.Container>
          <S.CalculatorCard animate={animate} onMouseMove={handleMouseMove}>
            <S.CardGrid>
              <S.Column>
                <S.SectionHeader>
                  <i className="fas fa-user-circle" />
                  <span>Your details</span>
                </S.SectionHeader>
                <S.InputGroup>
                  <Input
                    id="weight"
                    type="number"
                    value={weight || ""}
                    placeholder="Enter your weight"
                    onChange={(e: {
                      target: { value: SetStateAction<string | undefined> };
                    }) => setWeight(e.target.value)}
                  />
                  <Input
                    placeholder="Enter your height"
                    label="height"
                    id="height"
                    type="number"
                    value={height || ""}
                    onChange={(e: {
                      target: { value: SetStateAction<string | undefined> };
                    }) => setHeight(e.target.value)}
                  />
                  <Input
                    placeholder="Enter your age"
                    id="age"
                    type="number"
                    value={age || ""}
                    onChange={(e: {
                      target: { value: SetStateAction<string | undefined> };
                    }) => setAge(e.target.value)}
                  />
                </S.InputGroup>
                <p>Experience Level</p>
                <S.ButtonRow>
                  <S.ExperienceButton
                    selected={experience === "beginner"}
                    onClick={() => setExperience("beginner")}
                  >
                    <i className="fas fa-seedling" />
                    <span>Beginner - I have never tripped before</span>
                  </S.ExperienceButton>
                  <S.ExperienceButton
                    selected={experience === "experienced"}
                    onClick={() => setExperience("experienced")}
                  >
                    <i className="fas fa-mountain" />
                    <span>Intermediate - I have tripped before</span>
                  </S.ExperienceButton>
                  <S.ExperienceButton
                    selected={experience === "intermediate"}
                    onClick={() => setExperience("intermediate")}
                  >
                    <i className="fas fa-mountain" />
                    <span>Experienced - I am a well versed psychonaut</span>
                  </S.ExperienceButton>
                </S.ButtonRow>
              </S.Column>
              {/* Right Column: Experience Settings */}
              <S.Column>
                <S.SectionHeader>
                  <i className="fas fa-magic" />
                  <span>Your Experience</span>
                </S.SectionHeader>
                <S.InputGroup>
                  <S.Label htmlFor="mushroom-type">Mushroom Species</S.Label>
                  <S.SelectField
                    id="mushroom-type"
                    value={mushroomType}
                    onChange={(e: {
                      target: { value: SetStateAction<string> };
                    }) => setMushroomType(e.target.value)}
                  >
                    <option value="cubensis">
                      Psilocybe cubensis (common)
                    </option>
                    <option value="cyanescens">
                      Psilocybe cyanescens (stronger)
                    </option>
                    <option value="azurescens">
                      Psilocybe azurescens (very strong)
                    </option>
                    <option value="liberty">
                      Psilocybe semilanceata (liberty cap)
                    </option>
                    <option value="truffle">Psilocybe truffles</option>
                    <option value="dont-know">I Don't Know</option>
                  </S.SelectField>
                </S.InputGroup>
                <S.InputGroup>
                  <S.Label htmlFor="consumption-method">
                    Consumption Method
                  </S.Label>
                  <S.SelectField
                    id="consumption-method"
                    value={consumptionMethod}
                    onChange={(e: {
                      target: { value: SetStateAction<string> };
                    }) => setConsumptionMethod(e.target.value)}
                  >
                    <option value="dried">Dried mushrooms</option>
                    <option value="fresh">Fresh mushrooms</option>
                    <option value="tea">Mushroom tea</option>
                    <option value="lemon">Lemon tek</option>
                    <option value="chocolate">Chocolate/edible</option>
                  </S.SelectField>
                </S.InputGroup>
                <S.Label>Desired Intensity</S.Label>
                <S.GridRow>
                  {(["micro", "low", "medium", "high", "heroic"] as const).map(
                    (level) => (
                      <S.IntensityOption
                        key={level}
                        selected={intensity === level}
                        onClick={() => setIntensity(level)}
                      >
                        {/* {level === "micro" && (
                          <i
                            className="fas fa-leaf"
                            style={{ color: "#34d399" }}
                          />
                        )}
                        {level === "low" && (
                          <i
                            className="fas fa-smile"
                            style={{ color: "#fbbf24" }}
                          />
                        )}
                        {level === "medium" && (
                          <i
                            className="fas fa-brain"
                            style={{ color: "#f59e0b" }}
                          />
                        )}
                        {level === "high" && (
                          <i
                            className="fas fa-fire"
                            style={{ color: "#f87171" }}
                          />
                        )}
                        {level === "heroic" && (
                          <i
                            className="fas fa-bolt"
                            style={{ color: "#a78bfa" }}
                          />
                        )} */}
                        <S.OptionLabel>
                          {level.charAt(0).toUpperCase() + level.slice(1)}
                        </S.OptionLabel>
                      </S.IntensityOption>
                    )
                  )}
                </S.GridRow>
              </S.Column>
            </S.CardGrid>
            <S.ButtonContainer>
              <S.CalculateButton onClick={handleCalculateDosage}>
                <span>Calculate Dosage</span>
              </S.CalculateButton>
            </S.ButtonContainer>
          </S.CalculatorCard>

          {results && (
            <S.CalculatorCard animate={animate} onMouseMove={handleMouseMove}>
              <Results handleReset={handleReset} results={results} />
            </S.CalculatorCard>
          )}

          {/* Mushroom Info Cards */}
          <S.InfoGrid>
            {mushyInfos.map((mushroom) => {
              return (
                <InfoCard
                  key={mushroom.title}
                  infoTitle={mushroom.title}
                  infoText={mushroom.text}
                  infoStats={{
                    potency: mushroom.stats[0].value,
                    doses: mushroom.stats[1].value,
                    duration: mushroom.stats[2].value,
                  }}
                  headerBgColor={mushroom.headerBgColor}
                />
              );
            })}
          </S.InfoGrid>
        </S.Container>
      </S.PageWrapper>
    </>
  );
}
