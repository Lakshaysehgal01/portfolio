import DarkVeil from "./DarkViel";

const ParallaxBackground = () => {

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div className="relative w-full h-[1100px]">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
