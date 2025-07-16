import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "temp",
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: "cel" | "fah",
    outputType?: "cel" | "fah"
  ): unknown {
    let val: number;
    if (typeof value === "string") {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let outputTemp: number;
    if (inputType === "cel" && outputType === "fah") {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputType === "fah" && outputType === "cel") {
      outputTemp = val - 32;
    } else {
      outputTemp = val;
    }

    let symbol: "°F" | "°C";
    if (!outputType) {
      symbol = inputType === "cel" ? "°C" : "°F";
    } else {
      symbol = outputType === "cel" ? "°C" : "°F";
    }
    return `${outputTemp} ${symbol}`;
  }
}
