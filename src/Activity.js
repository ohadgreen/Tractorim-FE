import React from "react";
import "./Activity.css";
import { Progress } from "@material-tailwind/react";
import Gauge from "./style/svg-gauge";


export default function Activity(props) {
  const { activity } = props;
  const plotArea = Math.round(activity.plot.areaHectares * 100) / 100;
  const areaDoneRounded = Math.round(activity.areaDone * 100) / 100;

  let areaProgress = (plotArea !== null && plotArea !== undefined && plotArea !== 0) ? areaDoneRounded * 100 / plotArea : 0;
  // round areaProgress to 2 decimal places
  areaProgress = Math.round(areaProgress * 100) / 100;
  const fuelDisplay = 100 - (Math.round(activity.fuelConsumption * 100) / 100);

  return (
    <div className="activity--container">
      <div className="activity--info">
        <div>{activity.activity.name}</div>
        <div>{activity.activity.equipment}</div>
      </div>
      <div className="activity--info">
        <div>{activity.plot.name}</div>
        <div>{activity.plot.crop}</div>
        <div>{activity.plot.areaHectares}</div>
      </div>
      <div className="activity--info">
        <div>
          {activity.tractor.brand} {activity.tractor.model}
        </div>
        <div>{activity.tractor.year}</div>
        <div>{activity.fuelConsumption}</div>
      </div>
      <div className="activity--info">
        <div>{areaDoneRounded} / {plotArea}</div>
        <div className="flex w-full flex-col gap-4">
        <Progress value={areaProgress} color="red" label="Comp." />
        </div>      
      </div>
      <div className="activity--info">
        <div className="flex w-full flex-col gap-4">
        <Gauge value={fuelDisplay} label={"Fuel consumption"} />
        </div>      
      </div>
    </div>
  );
}
