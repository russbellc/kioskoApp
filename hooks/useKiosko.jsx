import { useContext } from "react";
import KioskoContext from "../contexts/KioskoProvider";

const useKiosko = () => {
	return useContext(KioskoContext);
};

export default useKiosko;
