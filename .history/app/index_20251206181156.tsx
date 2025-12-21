import {SafeAreaView} from "react-native-safe-area-context";
import { FlatList, Pressable, View} from "react-native";
 
export default function Index() {
  return (
    <SafeAreaView>
     <FlatList
      <FlatList
              data={offers}
              renderItem={({ item, index }) => {
                  const isEven = index % 2 === 0;

                  
                  return (
                      <View>
                          <Pressable
                              className={cn("offer-card", isEven ? 'flex-row-reverse' : 'flex-row')}
                              style={{ backgroundColor: item.color }}
                              android_ripple={{ color: "#fffff22"}}
                          >
                              {({ pressed }) => (
                                  <Fragment>
                                      <View className={"h-full w-1/2"}>
                                        <Image source={item.image} className={"size-full"} resizeMode={"contain"} />
                                      </View>
     />

    </SafeAreaView>
    
  
  );
}