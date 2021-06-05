interface ITechnicianModelAngular {
    registeredUserID: number;
    technicianID: number;
    name:string;
    skillList: Array<string>;
    ratingListID: Array<number>;
    salonListID: Array<number>;
    languageList: Array<string>;
}
export default ITechnicianModelAngular;