import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import Info from "../components/Info";

const HomeScreen = () => {
  return (
    <View style={tw`flex justify-center items-center h-full`}>
      <SafeAreaView style={tw`bg-white h-full w-full`}>
        <View style={tw`flex justify-center items-center`}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://links.papareact.com/gzs",
            }}
          />
          <NavOptions />
          <Info />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
