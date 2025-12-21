import {SafeAreaView} from "react-native-safe-area-context";
import {F}
import { offers } from "@/constants";

 
export default function Index() {
  return (
    <SafeAreaView>
      <FileList
      data={offers}
      renderItem={({item.index})=>{

      }}
      />
    </SafeAreaView>
  );
}
   