import {SafeAreaView} from "react-native-safe-area-context";
import { FlatList, Pressable, Text, View } from "react-native";
import { offers } from "@/constants";
import 

 
export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
      data={offers}
      renderItem={({item, index}) => {

        return (
        <View>
          <Pressable className="offer-card" style={{backgroundColor: item.color}}>
           {({pressed})=>(
            <Fragment>
              <View>

              </View>
            </Fragment>
           )}

          </Pressable>
          
        </View>

        )

      }}
    />
    </SafeAreaView>
  );
}
   