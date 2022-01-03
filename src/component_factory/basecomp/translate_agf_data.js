import wg from "../../wiz_globals/wg.js";

export default function translate_agf_data(agf_data){
if (agf_data.component_target == "x") {
    agf_data.begin_data = wg.x(agf_data.begin_data);
    agf_data.final_data = wg.x(agf_data.final_data);
}
if (agf_data.component_target == "y") {
    agf_data.begin_data = wg.y(agf_data.begin_data);
    agf_data.final_data = wg.y(agf_data.final_data);
}

    return agf_data;
}