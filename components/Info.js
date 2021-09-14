import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Info = () => {
  return (
    <View>
      <Step
        subtitle="Step 1"
        title="A rider opens the app"
        content="The rider enters their destination into the “Where to?” box; reviews each ride option for vehicle size, price, and estimated dropoff time; chooses the desired option; then confirms the pickup."
      />
      <Step
        subtitle="Step 2"
        title="The rider is matched with a driver"
        content="A nearby driver sees and chooses to accept the rider’s ride request. The rider is automatically notified when the driver’s vehicle is about a minute away."
      />
      <Step
        subtitle="Step 3"
        title="The driver picks up the rider"
        content="The driver and the rider verify each other’s names and the destination. Then the driver starts the ride."
      />
      <Step
        subtitle="Step 4"
        title="The driver takes the rider to the destination"
        content="The app gives the driver the option to access turn-by-turn directions."
      />
      <Step
        subtitle="Step 5"
        title="The driver and rider leave ratings and reviews"
        content="At the end of each trip, drivers and riders can rate each other from 1 to 5 stars. Riders also have the option to give the driver compliments and a tip directly in the app."
      />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
