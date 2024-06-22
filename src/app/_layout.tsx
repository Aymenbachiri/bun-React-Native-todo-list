import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: () => (
            <AntDesign name="infocirlce" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: () => <AntDesign name="mail" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          tabBarIcon: () => (
            <FontAwesome5 name="box-open" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
