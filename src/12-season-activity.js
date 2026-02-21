/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temp) {
  let obj = {
    season : "",
    activity : ""
  }

  if( month==1 || month == 2 || month == 12 ){
    obj.season = "Winter";
    if(temp < 0) obj.activity = "skiing";
    else if(temp >= 0) obj.activity = "ice skating";
    else obj = null;
  }
   else if( month==3 || month == 4 || month == 5 ){
    obj.season = "Spring";
    if(temp > 20) obj.activity = "hiking";
    else if(temp <= 20) obj.activity = "museum visit";
    else obj = null;
  }
  else if(month == 6 || month == 7 || month == 8 ){
    obj.season = "Summer";
    if(temp > 35) obj.activity = "swimming";
    else if(temp <= 35) obj.activity = "cycling";
    else obj = null;
  }
  else if( month==9 || month == 10 || month == 11){
    obj.season = "Autumn";
    if(temp > 15) obj.activity = "nature walk";
    else if(temp <= 15) obj.activity = "reading at a cafe";
    else obj = null;
  }
 else obj = null;

 return obj;
}
