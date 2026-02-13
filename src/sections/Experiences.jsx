import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full scroll-mt-32" id="experience">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
