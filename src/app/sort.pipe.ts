import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  standalone: true,
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | number[], dir: "asc" | "desc" = "asc") {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if (dir === "asc") {
        return a > b ? 1 : -1;
      } else return b > a ? 1 : -1;
    });
    return sorted;
  }
}
