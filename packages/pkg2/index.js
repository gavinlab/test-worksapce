import {getTime} from "@gavinlab/pkg1";

export function formatTime() {
    return getTime().format("Y-m-d");
}
