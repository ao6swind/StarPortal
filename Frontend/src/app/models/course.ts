export class Course
{
    name: string;
    year: number;
    season: string = "";
    status: string = "";
    main_series: string = "";
    sub_series: string[] = [];
    teachers: string[] = [];
    description: string;
}